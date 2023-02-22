import { classNames, optionClassNames } from '../utils-new';

export const CHIPLIST_CLASSNAME = `k-chip-list`;

const states = [];

const options = {
    size: [ "small", "medium", "large" ],
};

export type KendoChipListOptions = {
  size?: (typeof options.size)[number] | null;
};

const defaultProps = {
    size: "medium",
    rounded: "medium",
    fillMode: "solid",
    themeColor: "base",
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

export default ChipList;
