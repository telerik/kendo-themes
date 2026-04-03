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

Filter.ariaSpec = {
    selector: '.k-filter',
    rules: [
        { selector: '.k-filter-container', attribute: 'role=tree', usage: 'Describes the hierarchical structure of the Filter component.' },
        { selector: '.k-filter-container', attribute: 'aria-label', usage: 'Specifies a label for the Filter component.' },
        { selector: '.k-filter-group-main,.k-filter-item', attribute: 'role=treeitem', usage: 'Each FilterGroup and FilterExpression represent a separate treeitem in the Filter component structure.' },
        { selector: '.k-filter-lines', attribute: 'role=group', usage: 'Represents a group of items in the Filter component.' },
        { selector: '.k-toolbar', attribute: 'role=toolbar', usage: 'The role represents a collection of tools.' },
        { selector: '.k-toolbar', attribute: 'aria-label', usage: 'Specifies a label for the toolbar.' },
    ]
};

export default Filter;
