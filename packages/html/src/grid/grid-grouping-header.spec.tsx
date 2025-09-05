import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';
const className = `k-grouping-header`;

export type KendoGroupingHeaderProps = {
    dropHint?: string;
    dropClue?: boolean;
};

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
GridGroupingHeader.moduleName = "grid";
GridGroupingHeader.folderName = "grid";
