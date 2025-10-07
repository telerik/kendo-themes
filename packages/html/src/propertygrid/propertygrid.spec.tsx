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

export default PropertyGrid;
