import { classNames } from '../misc';
import { Button } from '../button';
import { FilterPreview } from './filter-preview';

import { KendoComponent } from '../_types/component';
export const FILTER_CLASSNAME = 'k-filter';

const states = [];

const options = {};

export type KendoFilterProps = {
    children?: React.JSX.Element | React.JSX.Element[];
    showApplyButton?: boolean;
}

const defaultOptions = {};

export const Filter: KendoComponent<KendoFilterProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoFilterProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        children,
        showApplyButton
    } = props;

    const filterChildren: React.JSX.Element | React.JSX.Element[] = [];

    let expressionPreview: React.JSX.Element = <></>;

    if (children) {
        if (Array.isArray(children)) {
            children.map((child) => {
                if (child.type !== FilterPreview) {
                    filterChildren.push(child);
                } else {
                    expressionPreview = <FilterPreview {...child.props} />;
                }
            });
        }
    }

    return (
        <div className={classNames(props.className, FILTER_CLASSNAME)}>
            <ul className="k-filter-container">
                <li className="k-filter-group-main">
                    {filterChildren}
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

export default Filter;
