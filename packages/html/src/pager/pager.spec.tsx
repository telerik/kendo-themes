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
    itemsPerPage?: boolean;
    type?: 'numeric' | 'input';
    pageSizes?: boolean;
    refresh?: boolean;
    info?: boolean;
    dir?: 'ltr' | 'rtl';
};

export type KendoPagerState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    adaptive: false,
    itemsPerPage: true,
    type: 'numeric',
    pageSizes: true,
    refresh: true,
    info: true
};

export const Pager = (
    props: KendoPagerProps &
        KendoPagerState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
        adaptive = defaultProps.adaptive,
        itemsPerPage = defaultProps.itemsPerPage,
        type = defaultProps.type,
        pageSizes = defaultProps.pageSizes,
        refresh = defaultProps.refresh,
        info = defaultProps.info,
        focus,
        disabled,
        dir,
        ...other
    } = props;

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
                <Button
                    className={classNames(
                        'k-pager-nav',
                        'k-pager-first'
                    )}
                    disabled
                    fillMode="flat"
                    size={size}
                    rounded={null}
                    icon={dir === "rtl" ? "caret-alt-to-right" : "caret-alt-to-left" }
                >
                </Button>
                <Button
                    className={classNames(
                        'k-pager-nav'
                    )}
                    focus
                    fillMode="flat"
                    size={size}
                    rounded={null}
                    icon={dir === "rtl" ? "caret-alt-right" : "caret-alt-left" }
                >
                </Button>
                { type === 'numeric' && !adaptive &&
                    <div
                        className={classNames(
                            'k-pager-numbers'
                        )}>
                        <Button
                            fillMode="flat"
                            themeColor="primary"
                            size={size}
                            rounded={null}
                        >
                        1
                        </Button>
                        <Button
                            hover
                            fillMode="flat"
                            themeColor="primary"
                            size={size}
                            rounded={null}
                        >
                        2
                        </Button>
                        <Button
                            focus
                            fillMode="flat"
                            themeColor="primary"
                            size={size}
                            rounded={null}
                        >
                        3
                        </Button>
                        <Button
                            selected
                            fillMode="flat"
                            themeColor="primary"
                            size={size}
                            rounded={null}
                        >
                        4
                        </Button>
                        <Button
                            hover
                            focus
                            fillMode="flat"
                            themeColor="primary"
                            size={size}
                            rounded={null}
                        >
                        5
                        </Button>
                        <Button
                            selected
                            focus
                            fillMode="flat"
                            themeColor="primary"
                            size={size}
                            rounded={null}
                        >
                        6
                        </Button>
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
                        <option>99</option>
                    </select>
                }
                { type === 'input' &&
                    <span
                        className={classNames(
                            'k-pager-input'
                        )}>
                        { !adaptive && <span>Page</span> }
                        <NumericTextbox value="999" size={size} showSpinButton={false} showClearButton={false}></NumericTextbox>
                        { !adaptive && <span>of 8</span> }
                    </span> }
                <Button
                    className={classNames(
                        'k-pager-nav'
                    )}
                    hover
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
            </div>
            { pageSizes &&
                <span
                    className={classNames(
                        'k-pager-sizes'
                    )}>
                    <DropdownList value="99" size={size} />
                    { itemsPerPage &&
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
                    1 - 20 of 91 items
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
