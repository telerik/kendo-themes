import { isString, isArray, isObject } from './object';

const SPACE = ' ';

const sizeMap = {
    'small': 'sm',
    'medium': 'md',
    'large': 'lg'
};

const roundedMap = {
    'small': 'sm',
    'medium': 'md',
    'large': 'lg'
};

const calloutMap = {
    'top': 'n',
    'bottom': 's',
    'left': 'w',
    'right': 'e'
};

function lookup( map, key ) {
    let result = map[key];

    if (result) {
        return result;
    }

    return key;
}

function sizeClass( size, prefix ) {
    if ( size === null ) {
        return '';
    }

    return `${prefix}-${lookup(sizeMap, size)}`;
}

function roundedClass( rounded ) {
    if ( rounded === null ) {
        return '';
    }

    return `k-rounded-${lookup(roundedMap, rounded)}`;
}

function shapeClass( shape, prefix ) {
    if ( shape === null ) {
        return '';
    }

    return `${prefix}-${shape}`;
}

function fillModeClass( fill, prefix ) {
    if ( fill === null) {
        return '';
    }

    return `${prefix}-${fill}`;
}

function themeColorClass( fill, color, prefix ) {
    if ( fill === null || color === null) {
        return '';
    }

    return `${prefix}-${fill}-${color}`;
}

function borderedClass( bordered, prefix ) {
    if ( !bordered ) {
        return '';
    }

    return `${prefix}-bordered`;
}

function placementClass( placement, prefix ) {
    if ( placement === null ) {
        return '';
    }

    return `${prefix}-${placement}`;
}

function positionClass( position ) {
    if ( position === null ) {
        return '';
    }

    return `k-pos-${position}`;
}

function alignClass( align, prefix ) {
    if ( align === null ) {
        return '';
    }

    return `${prefix}-${align}`;
}

function calloutClass( callout ) {
    if ( callout === null ) {
        return '';
    }

    return `k-callout-${lookup(calloutMap, callout)}`;
}

function classNames( ...args ) {

    /* eslint-disable arrow-body-style, no-nested-ternary */
    let result = new Set();
    let temp = args.flat().filter( arg => arg !== true && Boolean( arg ) );

    temp.forEach( className => {

        if ( isArray( className ) ) {
            classNames( className ).split( SPACE ).forEach( part => result.add( part ) );
            return;
        }

        if ( isString( className ) ) {
            className.split( SPACE ).forEach( part => result.add( part ) );
            return;
        }

        if ( isObject( className ) ) {
            for (let [ key, val ] of Object.entries( className )) {
                if (val === true) {
                    key.split( SPACE ).forEach( part => result.add( part ) );
                }
            }
        }
    });

    return [ ...result ].join( SPACE );
    /* eslint-enable */
}

function cssStyle( styleObj ) {
    let result = new Set();

    if ( styleObj === null || styleObj === undefined ) {
        return '';
    }

    if ( typeof styleObj === 'string' ) {
        return styleObj;
    }

    for (const [ key, value ] of Object.entries(styleObj)) {
        if ( typeof value === 'string' && value !== '' ) {
            result.add( `${key}: ${value};` );
        }
    }

    return [ ...result ].join( SPACE );
}


export {
    sizeClass,
    roundedClass,
    shapeClass,
    fillModeClass,
    themeColorClass,
    borderedClass,
    alignClass,
    placementClass,
    positionClass,
    calloutClass,

    classNames,
    cssStyle,
};
