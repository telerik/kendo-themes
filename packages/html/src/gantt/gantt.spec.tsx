import { classNames } from '../misc';

const GANTT_CLASSNAME = `k-gantt`;

const states = [];

const options = {};

const defaultProps = {};

export type KendoGanttProps = {
    headerToolbar?: JSX.Element;
    footerToolbar?: JSX.Element;
};

export const Gantt = (
    props: KendoGanttProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        headerToolbar,
        footerToolbar,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                GANTT_CLASSNAME,
                props.className
            )}>
            { headerToolbar }
            <div className="k-gantt-content">
                { props.children }
            </div>
            { footerToolbar }
        </div>
    );
};

Gantt.states = states;
Gantt.options = options;
Gantt.className = GANTT_CLASSNAME;
Gantt.defaultProps = defaultProps;

export default Gantt;
