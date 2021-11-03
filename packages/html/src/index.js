/* eslint-disable no-new */
/* global kendo */
import { isFunction } from '../utils/object';

export function init() {
    document.querySelectorAll('[is]').forEach( element => {
        const componentName = element.getAttribute('is');
        const component = kendo.Html[componentName];

        if (isFunction( component )) {
            new component( element );
        }
    });
}

window.addEventListener('DOMContentLoaded', init);

// Dependencies
export * from './component';

// Generic content
export * from './icon/index';

// Primitive components
export * from './input/index';
// export * from './picker/index';
// export * from './popup/index';
export * from './list/index';
export * from './avatar/index';

// Native forms
export * from './button/index';
export * from './dropdownbutton/index';
export * from './splitbutton/index';
export * from './textbox/index';
export * from './textarea/index';
export * from './checkbox/index';
export * from './radio/index';
// export * from './listbox/index';
// export * from './progressbar/index';
// export * from './slider/index';

// Augmented inputs
export * from './autocomplete/index';
// export * from './captcha/index';
export * from './colorpicker/index';
export * from './combobox/index';
export * from './dateinput/index';
export * from './datepicker/index';
export * from './timepicker/index';
export * from './datetimepicker/index';
// export * from './dropdowngrid/index';
export * from './dropdownlist/index';
// export * from './dropdowntree/index';
export * from './maskedtextbox/index';
// export * from './multiselect/index';
export * from './numerictextbox/index';
// export * from './rating/index';
export * from './searchbox/index';
export * from './switch/index';
// export * from './upload/index';
// export * from './dropzone/index';
