import { classNames, kendoThemeMaps } from '../misc';
import { AnimationContainer } from '../animation-container/animation-container.spec';

import { KendoComponent } from '../_types/component';
import { POPOVER_FOLDER_NAME, POPOVER_MODULE_NAME } from './constants';
export const POPOVER_CLASSNAME = `k-popover`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPopoverProps = {
    callout?: null | 'top' | 'bottom' | 'left' | 'right';
    title?: string;
    body?: React.JSX.Element | React.JSX.Element[];
    id?: string;
    role?: 'tooltip' | 'dialog';
};


export const Popover: KendoComponent<KendoPopoverProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoPopoverProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        callout,
        title,
        body,
        id = 'k-popover',
        role = 'tooltip',
        ...other
    } = props;

    const headerId = `${id}-header`;
    const bodyId = `${id}-body`;

    return (
        <AnimationContainer className={props.className}>
            <div
                {...other}
                className={classNames(
                    POPOVER_CLASSNAME,
                    'k-popup'
                )}
                id={id}
                role={role}
                {...(title && { 'aria-labelledby': headerId })}
                {...(body && { 'aria-describedby': bodyId })}
            >
                {callout &&
                    <div className={classNames(
                        'k-popover-callout',
                        {
                            [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                        }
                    )}/>
                }
                <div className="k-popover-inner">
                    {title && <div id={headerId} className="k-popover-header">{title}</div>}
                    {body && <div id={bodyId} className="k-popover-body">{body}</div>}
                    <>{props.children}</>
                </div>
            </div>
        </AnimationContainer>
    );
};

Popover.states = states;
Popover.options = options;
Popover.className = POPOVER_CLASSNAME;
Popover.defaultOptions = defaultOptions;
Popover.moduleName = POPOVER_MODULE_NAME;
Popover.folderName = POPOVER_FOLDER_NAME;

export default Popover;
