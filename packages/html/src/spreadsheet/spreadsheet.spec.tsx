import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { SPREADSHEET_FOLDER_NAME, SPREADSHEET_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const SPREADSHEET_CLASSNAME = `k-spreadsheet`;

const states = [];

const options = {};

const defaultOptions = {};

export const Spreadsheet: KendoComponent<React.HTMLAttributes<HTMLDivElement>> = (
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
            )}
            role="application">
            {children}
        </div>
    );
};

Spreadsheet.states = states;
Spreadsheet.options = options;
Spreadsheet.className = SPREADSHEET_CLASSNAME;
Spreadsheet.defaultOptions = defaultOptions;
Spreadsheet.moduleName = SPREADSHEET_MODULE_NAME;
Spreadsheet.folderName = SPREADSHEET_FOLDER_NAME;

Spreadsheet.ariaSpec = a11ySpec.ariaSpec;

export default Spreadsheet;
