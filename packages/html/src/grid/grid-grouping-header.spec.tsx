import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
import { GRID_FOLDER_NAME, GRID_MODULE_NAME } from './constants';
const className = `k-grouping-header`;

export type KendoGroupingHeaderProps = {
    dropHint?: string;
    dropClue?: boolean;
    'aria-label'?: string;
    'aria-controls'?: string;
};

export const GridGroupingHeader: KendoComponent<KendoGroupingHeaderProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoGroupingHeaderProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        dropHint,
        dropClue,
        'aria-label': ariaLabel,
        'aria-controls': ariaControls,
        ...others
    } = props;

    return (
        <div
            {...others}
            className={classNames(
                props.className,
                className,
            )}
            role="toolbar"
            {...(ariaLabel && { 'aria-label': ariaLabel })}
            {...(ariaControls && { 'aria-controls': ariaControls })}
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
