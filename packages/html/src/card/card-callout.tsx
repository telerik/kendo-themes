import { classNames, kendoThemeMaps } from '../utils-new';

export const CARDCALLOUT_CLASSNAME = `k-card-callout`;

export type KendoCardCalloutProps = {
    callout?: null | 'true' | 'top' | 'bottom' | 'left' | 'right';
};

export const CardCallout = (
    props: KendoCardCalloutProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        callout,
        ...other
    } = props;

    return (
        <span
            {...other}
            className={classNames(
                props.className,
                CARDCALLOUT_CLASSNAME,
                {
                    [`k-callout-${kendoThemeMaps.calloutMap[callout!] || callout}`]: callout
                },
            )}>
        </span>
    );
};
