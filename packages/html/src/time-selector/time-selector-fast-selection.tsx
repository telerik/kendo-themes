import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../utils-new';

const className = `k-time-fast-selection`;

export const TimeSelectorFastSelection = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <ActionButtons
            {...other}
            alignment="start"
            className={classNames(
                props.className,
                className,
            )}
        >
            <Button>1 d</Button>
            <Button>1 h</Button>
            <Button>15 m</Button>
        </ActionButtons>
    );
};
