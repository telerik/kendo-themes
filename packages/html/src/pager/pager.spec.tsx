/* eslint-disable complexity */
import { Button } from '../button';
import { DropdownList } from '../dropdownlist';
import { NumericTextbox } from '../numerictextbox';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../misc';

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
    adaptive?: boolean;
    showPagerSizeInfo?: boolean;
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

const defaultProps = {
    size: Size.medium,
    adaptive: false,
    showPagerSizeInfo: true,
    type: 'numeric',
    pageSizes: true,
    refresh: true,
    previousNext: true,
    info: "1 - 5 of 20 items",
    itemsPerPage: 5,
    maxPages: 6,
    currentPage: 1,
} as const;

export const Pager = (
    props: KendoPagerProps &
        KendoPagerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        adaptive = defaultProps.adaptive,
        showPagerSizeInfo = defaultProps.showPagerSizeInfo,
        itemsPerPage = defaultProps.itemsPerPage,
        maxPages = defaultProps.maxPages,
        currentPage = defaultProps.currentPage,
        previousNext = defaultProps.previousNext,
        type = defaultProps.type,
        pageSizes = defaultProps.pageSizes,
        refresh = defaultProps.refresh,
        info = defaultProps.info,
        focus,
        disabled,
        dir,
        ...other
    } = props;

    const pageButtons: JSX.Element[] = [];
    const options: JSX.Element[] = [];

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
            <option>{i}</option>
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
                })
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
                        disabled
                        fillMode="flat"
                        size={size}
                        rounded={null}
                        icon={dir === "rtl" ? "caret-alt-to-right" : "caret-alt-to-left"}
                    >
                    </Button><Button
                        className={classNames(
                            'k-pager-nav'
                        )}
                        disabled
                        fillMode="flat"
                        size={size}
                        rounded={null}
                        icon={dir === "rtl" ? "caret-alt-right" : "caret-alt-left"}
                    >
                    </Button>
                </>
                }
                { type === 'numeric' && !adaptive &&
                    <div
                        className={classNames(
                            'k-pager-numbers'
                        )}>
                        {pageButtons}
                    </div>
                }
                { type === 'numeric' &&
                    <select
                        className={classNames(
                            'k-picker',
                            'k-picker-solid',
                            'k-dropdown-list',
                            'k-dropdown',
                            'k-rounded-md',
                            optionClassNames('k-picker', {
                                size,
                            }),
                            {
                                ['k-hidden']: !adaptive
                            }
                        )}
                    >
                        {options}
                    </select>
                }
                { type === 'input' &&
                    <span
                        className={classNames(
                            'k-pager-input'
                        )}>
                        { !adaptive && <span>Page</span> }
                        <NumericTextbox value={`${currentPage}`} size={size} showSpinButton={false} showClearButton={false}></NumericTextbox>
                        { !adaptive && <span>{`of ${maxPages}`}</span> }
                    </span> }
                {previousNext &&
                <>
                    <Button
                        className={classNames(
                            'k-pager-nav'
                        )}
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
                    { showPagerSizeInfo &&
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
Pager.defaultProps = defaultProps;

export default Pager;
