function isString( obj ) {
    return typeof obj === 'string';
}

function isFunction( obj ) {
    return typeof obj === 'function';
}

function isElement( obj ) {
    return obj instanceof HTMLElement;
}

function isArray( obj ) {
    return Array.isArray( obj );
}

function isObject( obj ) {
    return typeof obj === 'object';
}


export {
    isString,
    isFunction,
    isElement,
    isArray,
    isObject
};
