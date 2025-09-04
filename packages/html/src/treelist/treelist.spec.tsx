import { classNames } from '../misc';
import { Grid, KendoGridProps } from '../grid';

import { KendoComponent } from '../_types/component';
const TREELIST_CLASSNAME = 'k-treelist';

const states = [];

const options = {};

const defaultOptions = {};

export const TreeList: KendoComponent<KendoGridProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGridProps &
        React.HTMLAttributes<HTMLDivElement>
) => (
    <Grid
        {...props}
        className={classNames(
            TREELIST_CLASSNAME,
            props.className
        )}
    >
        {props.children}
    </Grid>
);

TreeList.states = states;
TreeList.options = options;
TreeList.className = TREELIST_CLASSNAME;
TreeList.defaultOptions = defaultOptions;
TreeList.moduleName = "treelist";
TreeList.folderName = "treelist";

export default TreeList;
