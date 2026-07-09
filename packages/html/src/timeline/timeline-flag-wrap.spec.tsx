import { classNames, States } from '../misc';

import { KendoComponent } from '../_types/component';
import { TIMELINE_FOLDER_NAME, TIMELINE_MODULE_NAME } from './constants';
export const TIMELINEFLAGWRAP_CLASSNAME = `k-timeline-flag-wrap`;

const states = [
    States.focus,
    States.selected
];

const options = {};

export type KendoFlagWrapProps = {
    year?: string;
};

const defaultOptions = {
    year: "2020",
};

/**
 * @aria {role="none"} The flag-wrap items have semantics removed.
 * @aria {aria-hidden="true"} Flag-wrap items are hidden from the accessibility tree.
 */
export const TimelineFlagWrap: KendoComponent<KendoFlagWrapProps & React.HTMLAttributes<HTMLLIElement>> = (
    props: KendoFlagWrapProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        year = defaultOptions.year,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                TIMELINEFLAGWRAP_CLASSNAME
            )}>
            <span className="k-timeline-flag">{year}</span>
            {props.children}
        </li>
    );
};

TimelineFlagWrap.states = states;
TimelineFlagWrap.options = options;
TimelineFlagWrap.className = TIMELINEFLAGWRAP_CLASSNAME;
TimelineFlagWrap.defaultOptions = defaultOptions;
TimelineFlagWrap.moduleName = TIMELINE_MODULE_NAME;
TimelineFlagWrap.folderName = TIMELINE_FOLDER_NAME;

export default TimelineFlagWrap;
