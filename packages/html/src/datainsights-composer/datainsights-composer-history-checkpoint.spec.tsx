import { IconButton } from '../button';
import { ListItem } from '../list';
import { classNames } from '../misc';
import type { KendoComponent } from '../_types/component';
import { DATA_INSIGHTS_COMPOSER_FOLDER_NAME, DATA_INSIGHTS_COMPOSER_MODULE_NAME } from './constants';

export const DATA_INSIGHTS_COMPOSER_HISTORY_CHECKPOINT_CLASSNAME = 'k-datainsights-composer-history-checkpoint';

export interface DataInsightsComposerHistoryCheckpointProps extends React.HTMLAttributes<HTMLLIElement> {
    /** Short description of the checkpoint (derived from the prompt/refinement text). */
    label: string;
    /** Relative timestamp, e.g. "Today, 9:26 AM". */
    timestamp: string;
    /** Displays the restore action in the static hover-state preview. */
    hover?: boolean;
    /** Makes this checkpoint the active item in the listbox roving tab order. */
    focus?: boolean;
    /** Marks the currently displayed report version, which cannot be restored. */
    current?: boolean;
}

/**
 * @aria {role="option"} Each checkpoint is an option in the history listbox.
 * @aria {tabindex="-1"} Non-active checkpoints stay out of the tab order.
 * @keyboard {ArrowUp or ArrowDown} Moves the roving tab stop between checkpoints, same as a standard list.
 * @keyboard {Tab} From the active checkpoint, moves focus to its restore button. From that button, or from the current checkpoint which has no restore action, moves focus outside the popup.
 * @keyboard {Shift+Tab} From a restore button, returns focus to its own checkpoint. From the active checkpoint, moves focus to the previous focusable element outside the popup.
 * A history item with a timestamp and an optional restore action.
 */
export const DataInsightsComposerHistoryCheckpoint: KendoComponent<DataInsightsComposerHistoryCheckpointProps> = (props) => {
    const { label, timestamp, hover, current, focus, className, ...other } = props;

    return (
        <ListItem
            {...other}
            focus={focus}
            className={classNames(DATA_INSIGHTS_COMPOSER_HISTORY_CHECKPOINT_CLASSNAME, className)}
            description={timestamp}
            hover={hover}
            actions={current ? undefined : (
                <IconButton
                    className="k-datainsights-composer-history-restore"
                    icon="arrow-rotate-ccw"
                    size="xsmall"
                    fillMode="flat"
                    title="Restore to this version"
                    aria-label={`Restore ${label}`}
                    tabIndex={focus ? 0 : -1}
                />
            )}
        >
            {label}
        </ListItem>
    );
};

DataInsightsComposerHistoryCheckpoint.states = [];
DataInsightsComposerHistoryCheckpoint.options = {};
DataInsightsComposerHistoryCheckpoint.className = DATA_INSIGHTS_COMPOSER_HISTORY_CHECKPOINT_CLASSNAME;
DataInsightsComposerHistoryCheckpoint.defaultOptions = {};
DataInsightsComposerHistoryCheckpoint.moduleName = DATA_INSIGHTS_COMPOSER_MODULE_NAME;
DataInsightsComposerHistoryCheckpoint.folderName = DATA_INSIGHTS_COMPOSER_FOLDER_NAME;

export default DataInsightsComposerHistoryCheckpoint;
