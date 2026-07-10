import { classNames, stateClassNames, optionClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { BREADCRUMB_FOLDER_NAME, BREADCRUMB_MODULE_NAME } from './constants';
export const BREADCRUMB_CLASSNAME = `k-breadcrumb`;

const states = [
    States.focus
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoBreadcrumbProps = {
    collapsing?: null | 'auto' | 'none' | 'wrap';
    size?: (typeof options.size)[number] | null;
};

export type KendoBreadcrumbState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    collapsing: 'auto'
};

/**
 * @aria {aria-label="Breadcrumb"} Indicates the type of navigation provided by the nav element.
 * @aria {role="link"} The breadcrumb item should render an <a> element or have role="link".
 * @aria {aria-current="page"} The last breadcrumb item points to the active page.
 * @aria {aria-disabled="true"} The last breadcrumb item is disabled.
 * @aria {aria-hidden="true"} Delimiter icon should not be accessed through assistive technology.
 * @ux {Navigation trail} Shows the current page location within the application hierarchy.
 * @ux {Collapsing} Collapses middle items into an ellipsis when space is limited.
 * @ux {Last item} The last item represents the current page and is non-interactive.
 * @ux {Root icon} Optionally displays a home icon as the first item.
 */
export const Breadcrumb: KendoComponent<KendoBreadcrumbProps & KendoBreadcrumbState & React.HTMLAttributes<HTMLElement>> = (
    props: KendoBreadcrumbProps &
    KendoBreadcrumbState &
        React.HTMLAttributes<HTMLElement>
) => {
    const {
        size,
        collapsing = defaultOptions.collapsing,
        focus,
        ...other
    } = props;

    return (
        <nav
            {...other}
            className={classNames(
                props.className,
                BREADCRUMB_CLASSNAME,
                stateClassNames(BREADCRUMB_CLASSNAME, {
                    focus,
                }),
                optionClassNames(BREADCRUMB_CLASSNAME, {
                    size,
                }),
                {
                    'k-breadcrumb-wrap': collapsing === 'wrap'
                }
            )}
            aria-label="Breadcrumb"
        >
            {props.children}
        </nav>
    );
};

Breadcrumb.states = states;
Breadcrumb.options = options;
Breadcrumb.className = BREADCRUMB_CLASSNAME;
Breadcrumb.defaultOptions = defaultOptions;
Breadcrumb.moduleName = BREADCRUMB_MODULE_NAME;
Breadcrumb.folderName = BREADCRUMB_FOLDER_NAME;

/**
 * @keyboard {Tab or Shift + Tab} Focuses next and previous breadcrumb items. The focusable element is the element with either `a` tag, or `role=\"link\"`
 * @keyboard {Enter} Selects the Bredcrumb item, and navigates to it (if navigatable).
 *
 * @see https://www.w3.org/WAI/ARIA/apg/example-index/breadcrumb/index.html ARIA practices: BreadCrumb Example
 */

export default Breadcrumb;
