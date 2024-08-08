import { KendoToolbarProps, Toolbar } from '../toolbar';
import { classNames } from '../misc';

export const SPREADSHEETTOOLBAR_CLASSNAME = `k-spreadsheet-toolbar`;

const states = [];

const options = {};

const defaultOptions = {};

export const SpreadsheetToolbar = (
    props: KendoToolbarProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        ...other
    } = props;

    return (
        <Toolbar
            {...other}
            resizable
            className={classNames(
                props.className,
                SPREADSHEETTOOLBAR_CLASSNAME,
                "k-toolbar-flat"
            )}
        >
            {children}
        </Toolbar>
    );
};

SpreadsheetToolbar.states = states;
SpreadsheetToolbar.options = options;
SpreadsheetToolbar.className = SPREADSHEETTOOLBAR_CLASSNAME;
SpreadsheetToolbar.defaultOptions = defaultOptions;

export default SpreadsheetToolbar;
