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
            <ul className="k-filter-container">
                <li className="k-filter-group-main">
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

export default Filter;
