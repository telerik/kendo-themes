import { classNames } from '../misc';
import { KendoGridProps } from '../grid';
import { TreeList } from '../treelist';

import { KendoComponent } from '../_types/component';
import { PROPERTYGRID_FOLDER_NAME, PROPERTYGRID_MODULE_NAME } from './constants';
const PROPERTYGRID_CLASSNAME = 'k-property-grid';

const states = [];

const options = {};

const defaultOptions = {};

export const PropertyGrid: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <TreeList
        {...props}
        className={classNames(
            PROPERTYGRID_CLASSNAME,
            props.className
        )}
    >
        {props.children}
    </TreeList>
);

PropertyGrid.states = states;
PropertyGrid.options = options;
PropertyGrid.className = PROPERTYGRID_CLASSNAME;
PropertyGrid.defaultOptions = defaultOptions;
PropertyGrid.moduleName = PROPERTYGRID_MODULE_NAME;
PropertyGrid.folderName = PROPERTYGRID_FOLDER_NAME;

/**
 * @ariaSpec
 * The PropertyGrid is a composite component that consists of 2 logically separated structural elements:
 * - Toolbar (role=toolbar)
 * - Tree Grid (role=treegrid)
 *
 * It implements the TreeList ARIA specification.
 *
 * @see aria/propertygrid_aria.md
 */
PropertyGrid.ariaSpec = {
    selector: '.k-property-grid',
    rules: [
        // ── Toolbar ──
        { selector: '.k-grid-toolbar', attribute: 'role=toolbar', usage: 'The toolbar is a collection of command buttons and inputs.' },
        { selector: '.k-grid-toolbar', attribute: 'aria-label', usage: 'Clarifies the purpose of the toolbar.' },
        { selector: '.k-grid-toolbar', attribute: 'aria-controls=.k-grid-aria-root id', usage: 'Points to the id of the element with role=treegrid.' },

        // ── TreeGrid Element ──
        { selector: '.k-property-grid .k-grid-aria-root', attribute: 'role=treegrid', usage: 'Sets the proper role for the PropertyGrid component.' },
        { selector: '.k-grid-aria-root', attribute: 'aria-colcount', usage: 'The total number of columns.' },
        { selector: '.k-grid-aria-root', attribute: 'aria-rowcount', usage: 'The total number of rows in the table.' },

        // ── Content ──
        { selector: '.k-grid-content>table', attribute: 'role=none', usage: 'Negates the default semantic role of the <table> element.' },
        { selector: '.k-grid-content>table>tbody', attribute: 'role=rowgroup', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-content>table>tbody>tr:not(.k-hidden)', attribute: 'role=row', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-content>table>tbody>tr:not(.k-hidden)', attribute: 'aria-rowindex', usage: 'Row number.' },
        { selector: '.k-grid-content>table>tbody>tr:not(.k-hidden)>td', attribute: 'role=gridcell', usage: 'Required as the owner <table> element has its semantic role removed.' },
        { selector: '.k-grid-content>table>tbody>tr:not(.k-hidden)>td', attribute: 'aria-colindex', usage: 'Col number.' },

        // ── TreeList-Specific ──
        { selector: '.k-grid-content>table>tbody>tr:not(.k-hidden)', attribute: 'aria-expanded (when expandable)', usage: 'Set on the currently expanded row(s).' },
        { selector: '.k-treelist-toggle[class*="i-caret-alt-down"],.k-treelist-toggle[class*="i-caret-alt-right"]', attribute: 'aria-hidden=true', usage: 'Removes the expand/collapse icon from the accessibility tree.' },
    ]
};

export default PropertyGrid;
