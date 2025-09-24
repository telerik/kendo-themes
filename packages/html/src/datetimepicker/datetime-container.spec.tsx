import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { DATETIMEPICKER_FOLDER_NAME, DATETIMEPICKER_MODULE_NAME } from './constants';

export const DATETIME_CONTAINER_CLASSNAME = `k-datetime-container`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDateTimeContainerOptions = {};

export type KendoDateTimeContainerProps = KendoDateTimeContainerOptions & {};

export const DateTimeContainer: KendoComponent<KendoDateTimeContainerProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoDateTimeContainerProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DATETIME_CONTAINER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

DateTimeContainer.states = states;
DateTimeContainer.options = options;
DateTimeContainer.className = DATETIME_CONTAINER_CLASSNAME;
DateTimeContainer.defaultOptions = defaultOptions;
DateTimeContainer.moduleName = DATETIMEPICKER_MODULE_NAME;
DateTimeContainer.folderName = DATETIMEPICKER_FOLDER_NAME;

export default DateTimeContainer;
