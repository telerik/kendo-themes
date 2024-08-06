import { classNames } from '../misc';

export const GANTT_CLASSNAME = 'k-gantt';

const states = [];

const options = {};

export type KendoGanttProps = {
    headerToolbar?: React.JSX.Element;
    footerToolbar?: React.JSX.Element;
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
                props.className,
                GANTT_CLASSNAME,
            )}>
            { headerToolbar }
            { props.children}
            { footerToolbar }
        </div>
    );
};

Gantt.states = states;
Gantt.options = options;
Gantt.className = GANTT_CLASSNAME;

export default Gantt;
