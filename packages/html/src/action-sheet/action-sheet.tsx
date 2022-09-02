import * as React from 'react';
import { classNames } from '../utils';
import { ActionSheetHeader, ActionSheetFooter } from '../action-sheet';

export interface ActionSheetProps {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    header?: ActionSheetHeader;
    footer?: string | ActionSheetFooter;
    actions?: string[];
    fullscreen?: boolean;
    adaptive?: boolean;
    side?: 'top' | 'right' | 'bottom' | 'left';
}

export class ActionSheet extends React.Component<ActionSheetProps> {

    static defaultProps = {
        side: 'bottom',
        fullscreen: false,
        adaptive: false
    };

    render() {
        const {
            children,

            title,
            header,

            footer,
            actions,
            side,
            fullscreen,
            adaptive,

            className,
            ...htmlAttributes
        } = this.props;

        const childrenArray = React.Children.toArray(children);

        // eslint-disable-next-line no-nested-ternary
        const _ActionSheetHeader = title
            ? <ActionSheetHeader title={title} />
            : header
                ? header
                : childrenArray.find((child) => React.isValidElement(child) && child.type === ActionSheetHeader);

        // eslint-disable-next-line no-nested-ternary
        const _ActionSheetFooter = actions
            ? <ActionSheetFooter className="k-actions" actions={actions} />
            // eslint-disable-next-line no-nested-ternary
            : footer
                ? typeof footer === 'string'
                    ? <ActionSheetFooter>{footer}</ActionSheetFooter>
                    : footer
                : childrenArray.find((child) => React.isValidElement(child) && child.type === ActionSheetFooter);

        const _ActionSheetContent = childrenArray.filter(child => {
            if (React.isValidElement(child)) {
                switch (child.type) {
                    case ActionSheetHeader:
                    case ActionSheetFooter:
                        return false;
                    default:
                        return true;
                }
            }
            return true;
        });

        return (
            <div className="k-actionsheet-container">
                <div className="k-overlay"></div>
                <div className="k-animation-container">
                    <div className="k-child-animation-container"
                        style={{
                            [`${ fullscreen === true ? 'top' : side }`]: 0,
                            [`${ fullscreen === true ? 'width' : null }`]: '100%',
                            [`${ fullscreen === true ? 'height' : null }`]: '100%',
                            [`${ side === 'top' || side === 'bottom' ? 'width' : null }`]: '100%',
                            [`${ side === 'left' || side === 'right' ? 'height' : null }`]: '100%'
                        }}>
                        <div
                            className={classNames(
                                'k-actionsheet',
                                {
                                    [`k-actionsheet-${side}`]: fullscreen === false,
                                    'k-actionsheet-fullscreen': fullscreen === true,
                                    'k-adaptive-actionsheet': adaptive
                                },
                                className
                            )}
                            {...htmlAttributes}>
                            <>
                                {_ActionSheetHeader}
                                <div className={classNames(
                                    'k-actionsheet-content',
                                    {
                                        '!k-overflow-hidden': adaptive
                                    }
                                )}>
                                    {_ActionSheetContent}
                                </div>
                                {_ActionSheetFooter}
                            </>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
