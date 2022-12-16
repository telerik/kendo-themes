import * as React from 'react';
import { classNames, kendoThemeMaps } from '../utils';
import { Button } from '../button';
import { DropdownList } from '../dropdownlist';
import { Textbox } from '../textbox';

export interface PagerProps {
    className?: string,
    dir?: string,
    size?: null | 'small' | 'medium' | 'large';
    mobile?: null | 'small' | 'medium';
    type?: 'numeric' | 'input';
    pageSizes?: boolean,
    refresh?: boolean,
    info?: boolean,
    focus?: boolean,
    disabled?: boolean
}

export class Pager extends React.Component<PagerProps> {

    static defaultProps = {
        size: 'medium',
        mobile: null,
        type: 'numeric',
        pageSizes: true,
        refresh: true,
        info: true
    };

    render() {
        const {
            className,
            size,
            mobile,
            type,
            pageSizes,
            refresh,
            info,
            focus,
            disabled,
            ...htmlAttributes
        } = this.props;

        return (
            <div
                {...htmlAttributes}
                dir={this.props.dir}
                className={classNames(
                    className,
                    'k-pager',
                    {
                        [`k-pager-${kendoThemeMaps.sizeMap[size!] || size}`]: size,
                        'k-focus': focus,
                        'k-disabled': disabled,
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
                        size={this.props.size}
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
                        size={this.props.size}
                        rounded={null}
                        icon="caret-alt-left"
                    >
                    </Button>
                    <select
                        className={classNames(
                            'k-picker',
                            'k-dropdown-list',
                            'k-dropdown',
                            'k-rounded-md',
                            {
                                [`k-picker-${kendoThemeMaps.sizeMap[size!] || size}`]: size
                            }
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
                                size={this.props.size}
                                rounded={null}
                            >
                            1
                            </Button>
                            <Button
                                hover
                                fillMode="flat"
                                themeColor="primary"
                                size={this.props.size}
                                rounded={null}
                            >
                            2
                            </Button>
                            <Button
                                focus
                                fillMode="flat"
                                themeColor="primary"
                                size={this.props.size}
                                rounded={null}
                            >
                            3
                            </Button>
                            <Button
                                selected
                                fillMode="flat"
                                themeColor="primary"
                                size={this.props.size}
                                rounded={null}
                            >
                            4
                            </Button>
                            <Button
                                hover
                                focus
                                fillMode="flat"
                                themeColor="primary"
                                size={this.props.size}
                                rounded={null}
                            >
                            5
                            </Button>
                            <Button
                                selected
                                focus
                                fillMode="flat"
                                themeColor="primary"
                                size={this.props.size}
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
                            <Textbox showClearButton={false} size={this.props.size} value="999" />
                            of 8
                        </span> }
                    <Button
                        className={classNames(
                            'k-pager-nav'
                        )}
                        hover
                        fillMode="flat"
                        size={this.props.size}
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
                        size={this.props.size}
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
                        <DropdownList value="20" size={this.props.size} />
                        items per page
                    </span>
                }
                { refresh &&
                    <Button
                        className={classNames(
                            'k-pager-refresh'
                        )}
                        fillMode="flat"
                        size={this.props.size}
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
    }
}
