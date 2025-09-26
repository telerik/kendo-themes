import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import { COLUMN_MENU_FOLDER_NAME, COLUMN_MENU_MODULE_NAME } from './constants';
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
};

export const ColumnList: KendoComponent<KendoColumnListProps & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoColumnListProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size,
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
ColumnList.moduleName = COLUMN_MENU_MODULE_NAME;
ColumnList.folderName = COLUMN_MENU_FOLDER_NAME;

export default ColumnList;
