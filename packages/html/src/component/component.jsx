import { isFunction } from '../../utils/object';
import { renderDOM, htmlToProps } from '../../lib/jsx-runtime';

const globalDefaultProps = {
    legacy: false,

    framework: 'universal',

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
        this._props = htmlToProps( element );

        delete this._props.is;

        if (isFunction( this.init )) {
            this.init();
        }

        if (isFunction( this.render )) {
            let htmlObj = this.render();
            let htmlFragment = renderDOM(htmlObj);

            this.element.replaceWith( htmlFragment );
        }
    }

}

export { Component, globalDefaultProps };
