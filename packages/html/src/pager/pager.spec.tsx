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
    size: [ Size.small, Size.medium, Size.large ]
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
    size: Size.medium,
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

export const Pager: KendoComponent<KendoPagerProps & KendoPagerState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPagerProps &
        KendoPagerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        responsive = defaultOptions.responsive,
        size = defaultOptions.size,
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
                selected={i === currentPage ? true : false}
                fillMode="flat"
                themeColor="primary"
                size={size}
                rounded={null}
            >
                {i}
            </Button>
        );
        options.push(
            <option selected={i === currentPage ? true : false}>{i}</option>
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
            )}>
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
                        disabled={currentPage === 1 && !disabled}
                        fillMode="flat"
                        size={size}
                        rounded={null}
                        icon={dir === "rtl" ? "caret-alt-to-right" : "caret-alt-to-left"}
                    >
                    </Button><Button
                        className={classNames(
                            'k-pager-nav'
                        )}
                        disabled={currentPage === 1 && !disabled}
                        fillMode="flat"
                        size={size}
                        rounded={null}
                        icon={dir === "rtl" ? "caret-alt-right" : "caret-alt-left"}
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
                        <NumericTextbox value={`${currentPage}`} size={size} showSpinButton={false} showClearButton={false}></NumericTextbox>
                        <span>{ maxPagesInfo && `of ${maxPages}`}</span>
                    </span> }
                {previousNext &&
                <>
                    <Button
                        className={classNames(
                            'k-pager-nav'
                        )}
                        disabled={currentPage === maxPages && !disabled}
                        fillMode="flat"
                        size={size}
                        rounded={null}
                        icon={dir === "rtl" ? "caret-alt-left" : "caret-alt-right" }
                    >
                    </Button>
                    <Button
                        className={classNames(
                            'k-pager-nav',
                            'k-pager-last'
                        )}
                        disabled={currentPage === maxPages && !disabled}
                        fillMode="flat"
                        size={size}
                        rounded={null}
                        icon={dir === "rtl" ? "caret-alt-to-left" : "caret-alt-to-right" }
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
                    <DropdownList value={`${itemsPerPage}`} size={size} />
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
                    rounded={null}
                    icon="arrow-rotate-cw"
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

export default Pager;
