import { Button } from '../button';
import { DropdownList } from '../dropdownlist';
import { NumericTextbox } from '../numerictextbox';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { PAGER_FOLDER_NAME, PAGER_MODULE_NAME } from './constants';
export const PAGER_CLASSNAME = `k-pager`;

const states = [
    States.focus,
    States.disabled
];

const options = {
    size: [ Size.undefined, Size.small, Size.medium, Size.large ]
};

export type KendoPagerOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoPagerProps = KendoPagerOptions & {
    responsive?: boolean;
    pagerSizeInfo?: boolean;
    pageTitleInfo?: boolean;
    maxPagesInfo?: boolean;
    type?: 'numeric' | 'input';
    pageSizes?: boolean;
    refresh?: boolean;
    info?: boolean | string;
    dir?: 'ltr' | 'rtl';
    itemsPerPage?: number;
    maxPages?: number;
    currentPage?: number;
    previousNext?: boolean;
};

export type KendoPagerState = { [K in (typeof states)[number]]?: boolean };

const defaultOptions = {
    responsive: true,
    pagerSizeInfo: true,
    pageTitleInfo: true,
    maxPagesInfo: true,
    type: 'numeric',
    pageSizes: true,
    refresh: true,
    previousNext: true,
    info: "1 - 5 of 20 items",
    itemsPerPage: 5,
    maxPages: 6,
    currentPage: 1,
} as const;

/**
 * @aria {role="application"} Indicates that the pager has its own keyboard navigation implemented.
 * @aria {aria-roledescription="pager"} Clarifies the role of the Pager.
 * @aria {aria-keyshortcuts="Enter ArrowRight ArrowLeft"} Announces the available keyboard shortcuts.
 * @aria {aria-label} Announces the currently selected page and the number of available pages.
 * @aria {role="button"} Specifies the role of the navigation element.
 * @aria {aria-disabled="true"} Present when the navigation button is non-interactive.
 * @aria {title} Specifies the purpose of each navigation button.
 * @aria {aria-label|title} Specifies the purpose of each page link, e.g., Page 6.
 * @aria {aria-current="page"} Present on the currently selected page element.
 * @aria {aria-label|aria-labelledby} The DropDownList requires a label to specify its purpose.
 * @aria {aria-label} The input requires a label to specify its purpose.
 */
export const Pager: KendoComponent<KendoPagerProps & KendoPagerState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPagerProps &
        KendoPagerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        responsive = defaultOptions.responsive,
        size,
        pagerSizeInfo = defaultOptions.pagerSizeInfo,
        pageTitleInfo = defaultOptions.pageTitleInfo,
        maxPagesInfo = defaultOptions.maxPagesInfo,
        itemsPerPage = defaultOptions.itemsPerPage,
        maxPages = defaultOptions.maxPages,
        currentPage = defaultOptions.currentPage,
        previousNext = defaultOptions.previousNext,
        type = defaultOptions.type,
        pageSizes = defaultOptions.pageSizes,
        refresh = defaultOptions.refresh,
        info = defaultOptions.info,
        focus,
        disabled,
        dir,
        ...other
    } = props;

    const pageButtons: React.JSX.Element[] = [];
    const options: React.JSX.Element[] = [];

    for (let i = 1; i <= maxPages; i++) {
        pageButtons.push(
            <Button
                key={i}
                selected={i === currentPage ? true : false}
                fillMode="flat"
                themeColor="primary"
                size={size}
                aria-label={`Page ${i}`}
                {...(i === currentPage && { 'aria-current': 'page' as const })}
            >
                {i}
            </Button>
        );
        options.push(
            <option key={i} selected={i === currentPage ? true : false}>{i}</option>
        );
    }

    return (
        <div
            dir={dir}
            {...other}
            className={classNames(
                props.className,
                PAGER_CLASSNAME,
                optionClassNames(PAGER_CLASSNAME, {
                    size,
                }),
                stateClassNames(PAGER_CLASSNAME, {
                    focus,
                    disabled,
                }),
                {
                    ['k-pager-responsive']: responsive
                }
            )}
            role="application"
            aria-roledescription="pager"
            aria-keyshortcuts="Enter ArrowRight ArrowLeft"
            aria-label={`Page ${currentPage} of ${maxPages}`}>
            <div
                className={classNames(
                    'k-pager-numbers-wrap'
                )}>
                {previousNext &&
                <>
                    <Button
                        className={classNames(
                            'k-pager-nav',
                            'k-pager-first'
                        )}
                        ariaDisabled={currentPage === 1}
                        fillMode="flat"
                        size={size}
                        icon={dir === "rtl" ? "caret-alt-to-right" : "caret-alt-to-left"}
                        title="Go to the first page"
                        aria-label="Go to the first page"
                    >
                    </Button><Button
                        className={classNames(
                            'k-pager-nav'
                        )}
                        ariaDisabled={currentPage === 1}
                        fillMode="flat"
                        size={size}
                        icon={dir === "rtl" ? "caret-alt-right" : "caret-alt-left"}
                        title="Go to the previous page"
                        aria-label="Go to the previous page"
                    >
                    </Button>
                </>
                }
                { type === 'numeric' &&
                    <div
                        className={classNames(
                            'k-pager-numbers'
                        )}>
                        {pageButtons}
                    </div>
                }
                { type === 'input' &&
                    <span
                        className={classNames(
                            'k-pager-input'
                        )}>
                        { pageTitleInfo && <span>Page</span> }
                        <NumericTextbox value={`${currentPage}`} size={size} showSpinButton={false} showClearButton={false} aria-label="Current page"></NumericTextbox>
                        <span>{ maxPagesInfo && `of ${maxPages}`}</span>
                    </span> }
                {previousNext &&
                <>
                    <Button
                        className={classNames(
                            'k-pager-nav'
                        )}
                        ariaDisabled={currentPage === maxPages}
                        fillMode="flat"
                        size={size}
                        icon={dir === "rtl" ? "caret-alt-left" : "caret-alt-right" }
                        title="Go to the next page"
                        aria-label="Go to the next page"
                    >
                    </Button>
                    <Button
                        className={classNames(
                            'k-pager-nav',
                            'k-pager-last'
                        )}
                        ariaDisabled={currentPage === maxPages}
                        fillMode="flat"
                        size={size}
                        icon={dir === "rtl" ? "caret-alt-to-left" : "caret-alt-to-right" }
                        title="Go to the last page"
                        aria-label="Go to the last page"
                    >
                    </Button>
                </>
                }
            </div>
            { pageSizes &&
                <span
                    className={classNames(
                        'k-pager-sizes'
                    )}>
                    <DropdownList value={`${itemsPerPage}`} size={size} aria-label="Items per page" />
                    { pagerSizeInfo &&
                        <span>items per page</span>
                    }
                </span>
            }
            { refresh &&
                <Button
                    className={classNames(
                        'k-pager-refresh'
                    )}
                    fillMode="flat"
                    size={size}
                    icon="arrow-rotate-cw"
                    title="Refresh"
                    aria-label="Refresh"
                >
                </Button>
            }
            { info &&
                <span
                    className={classNames(
                        'k-pager-info'
                    )}>
                    {info}
                </span>
            }
        </div>
    );
};

Pager.states = states;
Pager.options = options;
Pager.className = PAGER_CLASSNAME;
Pager.defaultOptions = defaultOptions;
Pager.moduleName = PAGER_MODULE_NAME;
Pager.folderName = PAGER_FOLDER_NAME;

/**
 * @keyboard {Home} Loads the first page of data if the current page is not the first one.
 * @keyboard {End} Loads the last page of data if the current page is not the last one.
 * @keyboard {Enter} Activates the inner Pager navigation.
 * @keyboard {Tab} Navigates to the next focusable element on the page.
 * @keyboard {Shift + Tab} Navigates to the previous focusable element on the page.
 * @keyboard {ArrowLeft} Loads the previous page of data, if any.
 * @keyboard {ArrowRight} Loads the next page of data, if any.
 * @keyboard {PageUp} Loads the previous page of data, if any.
 * @keyboard {PageDown} Loads the next page of data, if any.
 * @keyboard {Escape} Moves the focus back to the wrapper element. Deactivates the inner Pager navigation.
 * @keyboard {Tab} Navigates to the next focusable element in the Pager. If the current focus is on the last element, moves the focus to the first focusable item in the component.
 * @keyboard {Shift + Tab} Navigates to the previous focusable element in the Pager. If the current focus is on the first element, moves the focus to the last focusable item in the component.
 * @keyboard {Enter} For button items, and Pager input executes the currently focused action (page change).
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#navigation WAI-ARIA Specification for Navigation
 * @see https://a11y-style-guide.com/style-guide/section-navigation.html#kssref-navigation-pagination Accessibility Style Guide: Pagination
 */

export default Pager;
