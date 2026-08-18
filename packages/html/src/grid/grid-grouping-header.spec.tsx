import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grouping-header`;

export type KendoGroupingHeaderProps = {
    dropHint?: string;
    dropClue?: boolean;
};

/**
 * @aria {role="toolbar"} The Grouping pane is a ToolBar (collection of buttons).
 * @aria {aria-label} Clarifies the purpose of the grouping pane.
 * @aria {aria-controls=".k-grid-aria-root id"} Pointing to the id of the element with role=grid.
 * @aria {role="none"} The ChipList default listbox role is removed to keep the toolbar --> button roles hierarchy.
 * @aria {role="button"} If the element used is not <button>, then the role must be specified.
 */
export const GridGroupingHeader: KendoComponent<KendoGroupingHeaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGroupingHeaderProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        dropHint,
        dropClue,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                props.className,
                className,
            )}
        >
            { dropClue && <div className="k-grouping-dropclue"></div> }
            {props.children}
            <div className="k-grouping-drop-container">{dropHint}</div>
        </div>
    );
};

GridGroupingHeader.className = className;
GridGroupingHeader.moduleName = GRID_MODULE_NAME;
GridGroupingHeader.folderName = GRID_FOLDER_NAME;

