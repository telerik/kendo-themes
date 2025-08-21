import { classNames } from '../misc';

export const DATETIME_CONTAINER_CLASSNAME = `k-datetime-container`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoDateTimeContainerOptions = {};

export type KendoDateTimeContainerProps = KendoDateTimeContainerOptions & {};

export const DateTimeContainer = (
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

export default DateTimeContainer;
