import { classNames, stateClassNames, optionClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { BREADCRUMB_FOLDER_NAME, BREADCRUMB_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
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

Breadcrumb.ariaSpec = a11ySpec.ariaSpec;

export default Breadcrumb;
