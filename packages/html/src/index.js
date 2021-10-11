/* eslint-disable no-new */
/* global kendo */
import { isFunction } from '../utils/object';

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[is]').forEach( element => {
        const componentName = element.getAttribute('is');
        const component = kendo.Html[componentName];

        if (isFunction( component )) {
            new component( element );
        }
    });
});

// Dependencies
export * from './component';

// Generic content
export * from './icon/index';

// Basic forms
export * from './button/index';
export * from './textbox/index';
export * from './textarea/index';
export * from './masked/index';
export * from './numeric/index';
export * from './checkbox/index';
