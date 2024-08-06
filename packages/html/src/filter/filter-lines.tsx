import { classNames } from '../misc';

export const FILTER_LINES_CLASSNAME = 'k-filter-lines';

const states = [];

const options = {};

export type KendoFilterLinesProps = {
    children?: React.JSX.Element | React.JSX.Element[];
}


export const FilterLines = (
    props: KendoFilterLinesProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const { children } = props;

    return (
        <ul className={classNames(FILTER_LINES_CLASSNAME)}>
            {children}
        </ul>
    );
};

FilterLines.states = states;
FilterLines.options = options;

export default FilterLines;
