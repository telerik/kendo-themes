import { Button } from '../button';
import { DropdownList } from '../dropdownlist';
import { Textbox } from '../textbox';
import { classNames, optionClassNames, stateClassNames, States, Size } from '../utils';

export const PAGER_CLASSNAME = `k-pager`;

const states = [
    States.focus,
    States.disabled
];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoPagerOptions = {
  size?: (typeof options.size)[number] | null;
};

export type KendoPagerProps = KendoPagerOptions & {
    mobile?: null | 'small' | 'medium';
    type?: 'numeric' | 'input';
    pageSizes?: boolean,
    refresh?: boolean,
    info?: boolean,
};

export type KendoPagerState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    size: Size.medium,
    mobile: null,
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
        mobile = defaultProps.mobile,
        type = defaultProps.type,
        pageSizes = defaultProps.pageSizes,
        refresh = defaultProps.refresh,
        info = defaultProps.info,
        focus,
        disabled,
        ...other
    } = props;

    return (
        <div
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
                    'k-pager-mobile-md': mobile === 'medium',
                    'k-pager-mobile-sm': mobile === 'small'
                }
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
                    icon="caret-alt-to-left"
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
                    icon="caret-alt-left"
                >
                </Button>
                <select
                    className={classNames(
                        'k-picker',
                        'k-picker-solid',
                        'k-dropdown-list',
                        'k-dropdown',
                        'k-rounded-md',
                        optionClassNames('k-picker', {
                            size,
                        })
                    )}
                >
                    <option>1</option>
                </select>
                { type === 'numeric' &&
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
                { type === 'input' &&
                    <span
                        className={classNames(
                            'k-pager-input'
                        )}>
                        Page
                        <Textbox showClearButton={false} size={size} value="999" />
                        of 8
                    </span> }
                <Button
                    className={classNames(
                        'k-pager-nav'
                    )}
                    hover
                    fillMode="flat"
                    size={size}
                    rounded={null}
                    icon="caret-alt-right"
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
                    icon="caret-alt-to-right"
                >
                </Button>
            </div>
            { pageSizes &&
                <span
                    className={classNames(
                        'k-pager-sizes'
                    )}>
                    <DropdownList value="20" size={size} />
                    items per page
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
