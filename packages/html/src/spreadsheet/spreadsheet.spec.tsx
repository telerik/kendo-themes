import { classNames } from '../misc';

export const SPREADSHEET_CLASSNAME = `k-spreadsheet`;

const states = [];

const options = {};

const defaultOptions = {};

export const Spreadsheet = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                SPREADSHEET_CLASSNAME,
                props.className
            )}>
            {children}
        </div>
    );
};

Spreadsheet.states = states;
Spreadsheet.options = options;
Spreadsheet.className = SPREADSHEET_CLASSNAME;
Spreadsheet.defaultOptions = defaultOptions;

export default Spreadsheet;
