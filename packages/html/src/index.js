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

export * from './component';
export * from './icon/index';
export * from './button/index';
