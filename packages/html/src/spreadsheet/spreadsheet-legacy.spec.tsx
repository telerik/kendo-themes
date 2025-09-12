import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';

export const SPREADSHEET_LEGACY_CLASSNAME = `k-spreadsheet-legacy`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoSpreadsheetLegacyOptions = {};

export type KendoSpreadsheetLegacyProps = KendoSpreadsheetLegacyOptions & {};

/**
 * @deprecated This component is deprecated and will be removed in future versions
 */
export const SpreadsheetLegacy: KendoComponent<KendoSpreadsheetLegacyProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoSpreadsheetLegacyProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                SPREADSHEET_LEGACY_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

SpreadsheetLegacy.states = states;
SpreadsheetLegacy.options = options;
SpreadsheetLegacy.className = SPREADSHEET_LEGACY_CLASSNAME;
SpreadsheetLegacy.defaultOptions = defaultOptions;
SpreadsheetLegacy.moduleName = "spreadsheet";
SpreadsheetLegacy.folderName = "spreadsheet";

export default SpreadsheetLegacy;
