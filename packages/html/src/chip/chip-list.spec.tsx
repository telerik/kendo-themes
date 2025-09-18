import { classNames, optionClassNames, Size } from '../misc';

import { KendoComponent } from '../_types/component';
import Chip from './chip.spec';
export const CHIPLIST_CLASSNAME = `k-chip-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoChipListOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultOptions = {
    size: Size.medium
};

export const ChipList: KendoComponent<KendoChipListOptions & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoChipListOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultOptions.size,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                CHIPLIST_CLASSNAME,
                optionClassNames(CHIPLIST_CLASSNAME, {
                    size,
                }),
            )}
        >
            {props.children}
        </div>
    );
};

ChipList.states = states;
ChipList.options = options;
ChipList.className = CHIPLIST_CLASSNAME;
ChipList.defaultOptions = defaultOptions;
ChipList.moduleName = Chip.moduleName;
ChipList.folderName = Chip.folderName;

export default ChipList;
