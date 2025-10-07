import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GANTT_FOLDER_NAME, GANTT_MODULE_NAME } from './constants';
export const GANTT_CLASSNAME = 'k-gantt';

const states = [];

const options = {};

export type KendoGanttProps = {
    headerToolbar?: React.JSX.Element;
    footerToolbar?: React.JSX.Element;
};

const defaultOptions = {};

export const Gantt: KendoComponent<KendoGanttProps & React.HTMLAttributes<HTMLDivElement>> = (
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
Gantt.defaultOptions = defaultOptions;
Gantt.moduleName = GANTT_MODULE_NAME;
Gantt.folderName = GANTT_FOLDER_NAME;

export default Gantt;
