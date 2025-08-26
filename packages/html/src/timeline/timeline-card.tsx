import { KendoCardProps, Card } from '../card';
import { classNames } from '../misc';
import { TimelineCardCallout } from '.';

const states = [];

const defaultOptions = {};

export const TimelineCard = (
    props:
    KendoCardProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        callout,
        children,
        ...other
    } = props;

    return (
        <Card
            className={classNames(
                props.className
            )}
            orientation="vertical"
            callout="true"
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
