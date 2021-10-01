/* eslint-disable no-new */
/* global kendo */
import { isFunction } from '../utils/object';
import { Button } from './button.jsx';


export {
    Button
};

window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[is]').forEach( element => {
        const componentName = element.getAttribute('is');
        const component = kendo.Html[componentName];

        if (isFunction( component )) {
            new component( element );
        }
    });
});
