import { classNames } from '../misc';
import { Button } from '../button';

import { KendoComponent } from '../_types/component';
import { FILTER_FOLDER_NAME, FILTER_MODULE_NAME } from './constants';
export const FILTER_CLASSNAME = 'k-filter';

const states = [];

const options = {};

export type KendoFilterProps = {
    children?: React.ReactNode;
    expressionPreview?: React.ReactNode;
    showApplyButton?: boolean;
}

const defaultOptions = {};

/**
 * @aria {role="tree"} Describes the hierarchical structure of the Filter component.
 * @aria {aria-label} Specifies a label for the Filter component.
 * @aria {role="treeitem"} Each FilterGroup and FilterExpression represent a separate treeitem in the Filter component structure.
 * @aria {role="group"} Represents a group of items in the Filter component.
 * @aria {role="toolbar"} The role represents a collection of tools.
 * @aria {aria-label} Specifies a label for the toolbar.
 */
export const Filter: KendoComponent<KendoFilterProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFilterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        expressionPreview,
        showApplyButton
    } = props;

    return (
        <div className={classNames(props.className, FILTER_CLASSNAME)}>
            <ul className="k-filter-container" role="tree" aria-label="Filter">
                <li className="k-filter-group-main" role="treeitem">
                    {children}
                </li>
            </ul>
            {expressionPreview}
            {showApplyButton && <Button className="k-filter-apply">Apply</Button>}
        </div>
    );
};

Filter.states = states;
Filter.options = options;
Filter.defaultOptions = defaultOptions;
Filter.className = FILTER_CLASSNAME;
Filter.moduleName = FILTER_MODULE_NAME;
Filter.folderName = FILTER_FOLDER_NAME;

/**
 * @keyboard {ArrowUp} Focuses the previous item (FilterGroup or FilterExpression) in the `tree`.
 * @keyboard {ArrowDown} Focuses the next item (FilterGroup or FilterExpression) in the `tree`.
 *
 * @see https://www.w3.org/TR/wai-aria-1.2/#toolbar WAI-ARIA specification for toolbar
 */

export default Filter;
