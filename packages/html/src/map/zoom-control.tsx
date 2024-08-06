import { Button, ButtonGroup } from '..';
import { classNames } from '../misc';

export const ZOOMCONTROL_CLASSNAME = `k-zoom-control`;

const states = [];

const options = {};

export const ZoomControl = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <ButtonGroup
            {...other}
            className={classNames(
                props.className,
                "k-group-horizontal",
                ZOOMCONTROL_CLASSNAME
            )}
        >
            <Button icon="plus" className="k-zoom-in"></Button>
            <Button icon="minus" className="k-zoom-out"></Button>
        </ButtonGroup>
    );
};

ZoomControl.states = states;
ZoomControl.options = options;
ZoomControl.className = ZOOMCONTROL_CLASSNAME;

export default ZoomControl;
