import { isFunction } from '../utils/object';
import { renderDOM, attrToProps } from '../lib/jsx-runtime';

const globalDefaultProps = {
    legacy: true,

    className: '',

    aria: false,
    disabled: false,
};

class Component {

    get element() {
        return this._element;
    }

    get props() {
        return this._props;
    }

    constructor( element ) {

        this._element = element;
        this._props = attrToProps( element );

        delete this._props.is;

        if (isFunction( this.init )) {
            this.init();
        }

        if (isFunction( this.render )) {
            let htmlObj = this.render();
            let htmlFragment = renderDOM(htmlObj);
            let html = htmlFragment.outerHTML;

            this.element.outerHTML = html;
        }
    }

}

export { Component, globalDefaultProps };
