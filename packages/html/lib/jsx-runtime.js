import { isFunction, isArray, isObject } from '../utils/object';
import { classNames } from '../utils/styles';

const JSX_FRAGMENT = '#fragment';
const JSX_TEXT = '#text';

const attrMap = {
    'class': 'className',
    themecolor: 'themeColor',
    fillmode: 'fillMode',
    showspinbuttons: 'showSpinButtons'
};

const booleanAttr = new Set([
    'hidden',

    'hover',
    'focus',
    'active',
    'disabled',

    'selected',

    'checked',
    'indeterminate',

    'valid',
    'invalid',

    'aria'
]);

const skipAttr = new Set([
    'aria',
    'legacy'
]);

const setAttr = new Set([
    // Global
    'id',

    // Related to forms
    'type',
    'value',
    'placeholder',
    'autocomplete'
]);

function attrToProps( element ) {
    let attributes = element.attributes;
    let props = {};

    Array.from(attributes).forEach((attrObj) => {
        let attrName = attrObj.name;
        let attrValue = attrObj.value;

        if (attrMap[attrName]) {
            attrName = attrMap[attrName];
        }

        if (booleanAttr.has(attrName) && attrValue === '') {
            props[ attrName ] = true;
        } else {
            props[ attrName ] = attrValue;
        }
    });

    return props;
}

function jsx( type, config ) {

    if ( isFunction( type ) ) {
        return type( { ...type.defaultProps, ...config } );
    }

    let { children = [], ...props } = config;

    if (!isArray( children) ) {
        children = [ children ];
    }

    children.forEach( ( child, index ) => {
        if ( !isObject( child ) ) {
            children[index] = {
                type: JSX_TEXT,
                props: {
                    text: child
                }
            };
        }
    });

    return {
        type,
        props: {
            ...props,
            children
        }
    };
}

function jsxs( type, config ) {
    return jsx( type, config );
}

function renderDOM( jsxNode, container = null ) {

    // Handle native nodes
    switch (jsxNode.nodeType) {
        case Node.TEXT_NODE:
        case Node.ELEMENT_NODE:
        case Node.DOCUMENT_FRAGMENT_NODE: {

            if ( container !== null ) {
                container.appendChild( jsxNode );
            }

            return jsxNode;
        }
        default:
            break;
    }

    const jsxNodeType = jsxNode.type;
    const { children = [], ...props } = jsxNode.props;
    let element;
    let textNode;

    if ( jsxNodeType === JSX_TEXT ) {
        textNode = document.createTextNode( props.text || '' );

        if ( container !== null ) {
            container.appendChild( textNode );
        }

        return textNode;
    }

    if ( jsxNodeType === JSX_FRAGMENT ) {
        element = document.createDocumentFragment();
    } else {
        element = document.createElement(jsxNodeType);
    }

    props.className = classNames( props.className );

    for (let [ attr, val ] of Object.entries(props)) {
        if (skipAttr.has(attr)) {
            continue;
        }

        if (setAttr.has(attr) && val !== '') {
            element.setAttribute( attr, val );
        } else {
            element[attr] = val;
        }
    }

    if (children.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        element.append( children );
    } else {
        children.forEach( child => {
            renderDOM( child, element );
        });
    }

    if ( container !== null ) {
        container.appendChild( element );
    }

    return element;
}

export {
    jsx,
    jsxs,
    JSX_FRAGMENT as Fragment,
    renderDOM,
    attrToProps
};
