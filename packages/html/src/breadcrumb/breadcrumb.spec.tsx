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
 * @ariaSpec
 * Breadcrumb uses the semantic nav element with aria-label.
 *
 * - nav: aria-label="Breadcrumb"
 * - Items: links use <a> elements (implicit role="link")
 * - Last item: aria-current="page", aria-disabled="true"
 * - Delimiter icons: aria-hidden="true"
 */
Breadcrumb.ariaSpec = {
    selector: '.k-breadcrumb',
    rules: [
        { selector: '.k-breadcrumb', attribute: 'aria-label=Breadcrumb', usage: 'Indicates the type of navigation provided by the nav element.' },
        { selector: '.k-breadcrumb-item .k-breadcrumb-link,.k-breadcrumb-item .k-breadcrumb-root-link', attribute: 'role=link or nodeName=a', usage: 'The breadcrumb item should render an <a> element or have role="link".' },
        { selector: '.k-breadcrumb-last-item .k-breadcrumb-link,.k-breadcrumb-last-item .k-breadcrumb-root-link', attribute: 'aria-current=page', usage: 'The last breadcrumb item points to the active page.' },
        { selector: '.k-breadcrumb-last-item .k-breadcrumb-link', attribute: 'aria-disabled=true', usage: 'The last breadcrumb item is disabled.' },
        { selector: '.k-breadcrumb-delimiter-icon', attribute: 'aria-hidden=true', usage: 'Delimiter icon should not be accessed through assistive technology.' },
    ]
};

export default Breadcrumb;
