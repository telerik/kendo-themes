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
export * from './component/index';

// Generic content
export * from './icon/index';

// Primitive components
export * from './input/index';
// export * from './picker/index';
export * from './popup/index';
export * from './list/index';
export * from './nodata/index';

// Indicators
export * from './avatar/index';
// export * from './badge/index';
export * from './chip/index';
// export * from './color-preview/index';
// export * from './loader/index';
// export * from './skeleton/index';

// Native forms
export * from './button/index';
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

// Command interfaces
// export * from './action-buttons/index';
export * from './fab/index';
export * from './menu/index';
// export * from './toolbar/index';

// Popups and modals
// export * from './action-sheet/index';
// export * from './dialog/index';
// export * from './drawer/index';
// export * from './notification/index';
// export * from './popover/index';
// export * from './tooltip/index';
// export * from './window/index';

// Navigation
// export * from './appbar/index';
// export * from './bottom-nav/index';
// export * from './breadcrumb/index';
// export * from './pager/index';
// export * from './stepper/index';
// export * from './tabstrip/index';
// export * from './wizard/index';

// Layout & containers
// export * from './card/index';
// export * from './expander/index';
// export * from './panelbar/index';
// export * from './splitter/index';
// export * from './tile-layout/index';
