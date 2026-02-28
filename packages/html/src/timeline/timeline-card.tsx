import { KendoCardProps, Card } from '../card';
import { classNames } from '../misc';
import { TimelineCardCallout } from '.';

const states = [];

const defaultOptions = {};

export type KendoTimelineCardProps = KendoCardProps & {
    /** @aria role for the card element (button for vertical, tabpanel for horizontal) */
    ariaRole?: string;
    /** @aria aria-describedby pointing to the date element */
    ariaDescribedBy?: string;
    /** @aria aria-live region for vertical cards */
    ariaLive?: 'polite' | 'off';
    /** @aria aria-expanded for collapsible vertical cards */
    ariaExpanded?: boolean;
    /** @aria aria-label for horizontal tabpanel */
    ariaLabel?: string;
    /** @aria tab index for focusable cards */
    cardTabIndex?: number;
};

export const TimelineCard = (
    props:
    KendoTimelineCardProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        callout,
        children,
        ariaRole,
        ariaDescribedBy,
        ariaLive,
        ariaExpanded,
        ariaLabel,
        cardTabIndex,
        ...other
    } = props;

    return (
        <Card
            className={classNames(
                props.className
            )}
            orientation="vertical"
            callout="true"
            role={ariaRole}
            aria-describedby={ariaDescribedBy}
            aria-live={ariaLive}
            aria-expanded={ariaExpanded !== undefined ? (ariaExpanded ? 'true' : 'false') : undefined}
            aria-label={ariaLabel}
            tabIndex={cardTabIndex}
            {...other}
        >
            { callout && <TimelineCardCallout callout={callout} />}
            {children}
        </Card>
    );
};

TimelineCard.states = states;
TimelineCard.defaultOptions = defaultOptions;

export default TimelineCard;
