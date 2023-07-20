import { classNames } from '../misc';

export const FILTER_PREVIEW_CLASSNAME = 'k-filter-preview';

const states = [];

const options = {};

export type KendoFilterPreviewProps = {
    fields?: Array<{name: string, value: string}>;
}

const defaultProps = {};

export const FilterPreview = (
    props: KendoFilterPreviewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const { fields } = props;

    const expressionPreview: JSX.Element | JSX.Element[] = [];

    if (fields) {
        fields.map(({ name, value }) => {
            expressionPreview.push(
                <span className={`k-filter-preview-${name}`}>{`${value} `}</span>
            );
        });
    }

    return (
        <div className={classNames(FILTER_PREVIEW_CLASSNAME)}>
            {expressionPreview}
        </div>
    );
};

FilterPreview.states = states;
FilterPreview.options = options;
FilterPreview.defaultProps = defaultProps;
FilterPreview.className = FILTER_PREVIEW_CLASSNAME;

export default FilterPreview;
