import { classNames, optionClassNames, Size } from '../utils';

export const CHIPLIST_CLASSNAME = `k-chip-list`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ],
};

export type KendoChipListOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultProps = {
    size: Size.medium,
};

export const ChipList = (
    props: KendoChipListOptions &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        size = defaultProps.size,
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
ChipList.defaultProps = defaultProps;

export default ChipList;
