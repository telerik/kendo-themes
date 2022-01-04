/* eslint-disable no-new */
/* global kendo */
import { isFunction, isArray, isObject } from '../utils/object';
import { classNames, cssStyle } from '../utils/styles';

const JSX_FRAGMENT = '#fragment';
const JSX_TEXT = '#text';

const attrMap = {
    'class': 'className',
    themecolor: 'themeColor',
    fillmode: 'fillMode',

    // Inputs
    showtext: 'showText',
    showvalue: 'showValue',
    valueicon: 'valueIcon',
    valueiconname: 'valueIconName',
    showicon: 'showIcon',
    iconposition: 'iconPosition',
    iconname: 'iconName',
    showarrow: 'showArrow',
    arrowicon: 'arrowIcon',
    arrowiconname: 'arrowIconName',
    showarrowbutton: 'showArrowButton',
    arrowbutton: 'arrowButton',
    showdropdownbutton: 'showDropdownButton',
    dropdownbutton: 'dropdownButton',
    showspinbutton: 'showSpinButton',
    spinbutton: 'spinButton',
    showclearbutton: 'showClearButton',
    clearbutton: 'clearButton',

    showcheckbox: 'showCheckbox',

    // Switch
    onlabel: 'onLabel',
    offlabel: 'offLabel',
    trackrounded: 'trackRounded',
    thumbrounded: 'thumbRounded',

    // Chip
    showavatar: 'showAvatar',

    // Hierarchy
    haschildren: 'hasChildren',

    // Treeview
    leafclassname: 'leafClassName',

    // Template
    contenttemplate: 'contentTemplate'
};

const booleanAttr = new Set([
    'hidden',

    'hover',
    'focus',
    'active',
    'readonly',
    'disabled',

    'checked',
    'indeterminate',

    'valid',
    'invalid',
    'required',

    'selected',
    'loading',

    'showText',
    'showValue',
    'showIcon',
    'showClearButton',
    'showSpinButton',

    'showCheckbox',

    'virtualization',
    'root',

    'open',
    'expanded',
    'hasChildren',

    'showArrow',

    'showAvatar',

    'aria'
]);

const nullAttr = new Set([
    'size',
    'rounded',
    'fillMode',
    'themeColor',

    'trackRounded',
    'thumbRounded'
]);

const skipAttr = new Set([
    'is',
    'aria',
    'legacy'
]);

const setAttr = new Set([
    // Global
    'id',
    'style',

    // Related to forms
    'type',
    'value',
    'placeholder',
    'autocomplete'
]);

function htmlToProps( element ) {
    let props = attrToProps( element.attributes );
    let children = Array.from( element.childNodes );

    props.children = [];

    children.forEach( child => {
        let childProps;
        let nodeType = child.nodeType;

        if ( nodeType === Node.TEXT_NODE ) {
            let textContent = child.textContent.trim();

            if ( textContent !== '' ) {
                childProps = {
                    type: JSX_TEXT,
                    props: {
                        text: textContent
                    }
                };

                props.children.push( childProps );
            }
        }

        if ( nodeType === Node.ELEMENT_NODE ) {
            let componentName = child.getAttribute('is');
            let component = kendo.Html[componentName];

            if (isFunction( component )) {
                component = new component( child );
                childProps = component.render();
                childProps._component = componentName;
            } else {
                childProps = {
                    type: child.nodeName,
                    props: htmlToProps( child )
                };

            }

            props.children.push( childProps );
        }

    });

    return props;
}

function attrToProps( attributes ) {
    let props = {};

    Array.from(attributes).forEach((attrObj) => {
        let attrName = attrObj.name;
        let attrValue = attrObj.value;

        if (attrMap[attrName]) {
            attrName = attrMap[attrName];
        }

        // Set props as is
        props[ attrName ] = attrValue;

        // Ensure boolean value
        if (booleanAttr.has(attrName) && typeof attrValue === 'string') {
            switch (attrValue) {
                case '':
                case 'true':
                    props[ attrName ] = true;
                    break;
                default:
                    props[ attrName ] = false;
                    break;
            }
        }

        // Ensure null value
        if (nullAttr.has(attrName) && attrValue === 'null') {
            props[ attrName ] = null;
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
    props.style = cssStyle( props.style );

    for (let [ attr, val ] of Object.entries(props)) {
        if (skipAttr.has(attr)) {
            continue;
        }

        if (setAttr.has(attr)) {
            if (val !== '') {
                element.setAttribute( attr, val );
            }
        } else {
            element[attr] = val;
        }
    }

    if (children.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        element.append( children );
    } else {
        children.forEach( child => {
            if (child === null) {
                return;
            }

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
    attrToProps,
    htmlToProps
};
