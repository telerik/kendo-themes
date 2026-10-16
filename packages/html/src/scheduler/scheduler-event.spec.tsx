import { classNames, States, stateClassNames } from "../misc";
import { Icon } from "../icon";

import { KendoComponent } from "../_types/component";
import { SCHEDULER_FOLDER_NAME, SCHEDULER_MODULE_NAME } from "./constants";
const className = "k-event";

const states = [States.hover, States.focus, States.selected];

const options = {};

const defaultOptions = {
  resizable: "vertical",
} as const;

export type KendoSchedulerEventProps = {
  inverse?: boolean;
  ongoing?: boolean;
  multiDay?: boolean;
  readonly?: boolean;
  recurring?: "recurring" | "non-recurring";
  resizable?: "horizontal" | "vertical" | "none";
  hover?: boolean;
  focus?: boolean;
  selected?: boolean;
  continuationRight?: boolean;
  continuationLeft?: boolean;
  continuationTop?: boolean;
  continuationBottom?: boolean;
  title?: string;
  time?: string;
  /** Renders the single-row all-day layout (`k-event-all-day`). Inferred automatically when `startTime` or `endTime` is set. */
  allDayEvent?: boolean;
  /** Start time label shown for all-day events, to the left of the title. Omitted when `continuationLeft` is set. */
  startTime?: string;
  /** End time label shown for all-day events, aligned to the right edge. Omitted when `continuationRight` is set. */
  endTime?: string;
};


/**
 * @aria {role="button"} Indicating that the event element is interactive.
 * @aria {aria-label} Label containing the title, start, and end date of the appointment.
 * @ux {Drag and drop} The event can be dragged to a different time slot or resource.
 * @ux {Resize} Dragging the event's edge changes its start or end time.
 * @ux {Edit on click} Clicking the event opens an edit form.
 * @ux {Overflow indicator} A count badge shows when multiple events overlap in the same slot.
 */
export const SchedulerEvent: KendoComponent<KendoSchedulerEventProps & React.HTMLAttributes<HTMLDivElement>> = (props: KendoSchedulerEventProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { inverse, ongoing, readonly, title, time, allDayEvent, startTime, endTime, recurring, resizable = defaultOptions.resizable, hover, focus, selected, continuationLeft, continuationRight, continuationTop, continuationBottom, ...others } = props;
  const isAllDay = allDayEvent || startTime !== undefined || endTime !== undefined;

  return (
    <div
      {...others}
      className={classNames(
        className,
        props.className,
        stateClassNames(className, {
          hover,
          focus,
          selected,
        }),
        {
          "k-event-inverse": inverse,
          "k-event-ongoing": ongoing,
          "k-readonly": readonly,
          "k-event-all-day": isAllDay,
        },
      )}
      role="button"
      aria-disabled={readonly || undefined}
      aria-label={others["aria-label"] || "Event"}
    >
      {continuationLeft && (
        <span className="k-event-continuation">
          <Icon icon="chevron-left" />
        </span>
      )}
      <div>
        {isAllDay ? (
          <>
            {!continuationLeft && startTime && <span className="k-event-all-day-time">{startTime}</span>}
            {title && <div className="k-event-template k-event-title">{title}</div>}
            {!continuationRight && endTime && <span className="k-event-all-day-time">{endTime}</span>}
          </>
        ) : (
          <>
            {continuationTop && (
              <span className="k-event-continuation">
                <Icon icon="chevron-up" />
              </span>
            )}
            {title && <div className="k-event-template k-event-title">{title}</div>}
            {time && (
              <div className="k-event-template k-event-time">
                {recurring === "recurring" && (
                  <span className="k-event-recurrence-icon">
                    <Icon size="small" icon="arrow-rotate-cw" />
                  </span>
                )}
                {recurring === "non-recurring" && (
                  <span className="k-event-recurrence-icon">
                    <Icon size="small" icon="arrows-no-repeat" />
                  </span>
                )}
                {time}
              </div>
            )}
            {continuationBottom && (
              <span className="k-event-continuation">
                <Icon icon="chevron-down" />
              </span>
            )}
          </>
        )}
      </div>
      {recurring === "recurring" && (
        <span className="k-event-recurrence-icon">
          <Icon icon="arrow-rotate-cw" />
        </span>
      )}
      {recurring === "non-recurring" && (
        <span className="k-event-recurrence-icon">
          <Icon icon="arrows-no-repeat" />
        </span>
      )}
      {continuationRight && (
        <span className="k-event-continuation">
          <Icon icon="chevron-right" />
        </span>
      )}
      {resizable === "vertical" ? (
        <>
          <span className="k-resize-handle k-resize-n"></span>
          <span className="k-resize-handle k-resize-s"></span>
        </>
      ) : (
        resizable === "horizontal" && (
          <>
            <span className="k-resize-handle k-resize-w"></span>
            <span className="k-resize-handle k-resize-e"></span>
          </>
        )
      )}
    </div>
  );
};

SchedulerEvent.states = states;
SchedulerEvent.options = options;
SchedulerEvent.defaultOptions = defaultOptions;
SchedulerEvent.className = className;
SchedulerEvent.moduleName = SCHEDULER_MODULE_NAME;
SchedulerEvent.folderName = SCHEDULER_FOLDER_NAME;

export default SchedulerEvent;
