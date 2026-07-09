import { KendoCardProps, Card } from '../card';
import { classNames } from '../misc';
import { TimelineCardCallout } from '.';

const states = [];

const defaultOptions = {};

export type KendoTimelineCardProps = KendoCardProps & {
    ariaRole?: string;
    ariaDescribedBy?: string;
    ariaLive?: 'polite' | 'off';
    ariaExpanded?: boolean;
    ariaLabel?: string;
    cardTabIndex?: number;
};

/**
 * @aria {role} for the card element (button for vertical, tabpanel for horizontal)
 * @aria {aria-describedby} pointing to the date element
 * @aria {aria-live} region for vertical cards
 * @aria {aria-expanded} for collapsible vertical cards
 * @aria {aria-label} for horizontal tabpanel
 * @aria {tabindex} Tab index for focusable cards.
 */
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
