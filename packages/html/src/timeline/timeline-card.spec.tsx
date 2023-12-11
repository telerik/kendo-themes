import { KendoCardProps, Card } from '../card';
import { classNames } from '../misc';
import { TimelineCardCallout } from '../timeline';

const states = [];

const defaultProps = {};

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
            {...other}
        >
            { callout && <TimelineCardCallout callout={callout} />}
            {children}
        </Card>
    );
};

TimelineCard.states = states;
TimelineCard.defaultProps = defaultProps;

export default TimelineCard;