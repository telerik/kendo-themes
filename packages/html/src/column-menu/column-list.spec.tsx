import { classNames, optionClassNames, Size } from '../misc';

export const COLUMNLIST_CLASSNAME = `k-column-list`;

const states = [];

const options = {
    size: [Size.small, Size.medium, Size.large]
};

export type KendoColumnListOptions = {
    size?: (typeof options.size)[number] | null;
}

export type KendoColumnListProps = KendoColumnListOptions;

const defaultOptions = {
    size: Size.medium
};

export const ColumnList = (
    props: KendoColumnListProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        ...other
    } = props;

    return (
        <div className="k-column-list-wrapper">
            <div
                {...other}
                className={classNames(
                    props.className,
                    COLUMNLIST_CLASSNAME,
                    optionClassNames(COLUMNLIST_CLASSNAME, {
                        size,
                    })
                )}>
                {props.children}
            </div>
        </div>
    );
};

ColumnList.states = states;
ColumnList.options = options;
ColumnList.className = COLUMNLIST_CLASSNAME;
ColumnList.defaultOptions = defaultOptions;

export default ColumnList;
