import { classNames } from '../misc';
import { Grid, KendoGridProps } from '../grid';

const TREELIST_CLASSNAME = 'k-treelist';

const states = [];

const options = {};

const defaultOptions = {};

export const TreeList = (
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

export default TreeList;
