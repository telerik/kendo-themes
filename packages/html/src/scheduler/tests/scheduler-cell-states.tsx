import { Fragment } from "react";
import { SchedulerBody, SchedulerCell, SchedulerContent, SchedulerHead, SchedulerHeader, SchedulerTable, SchedulerTimes, SchedulerWeek } from "..";

const style = `
    #test-area {
        max-width: 1080px;
    }
`;

const days = [
  { day: "Mon", date: "2" },
  { day: "Tue", date: "3" },
  { day: "Wed", date: "4", today: true },
  { day: "Thu", date: "5" },
  { day: "Fri", date: "6" },
  { day: "Sat", date: "7", nonwork: true },
  { day: "Sun", date: "8", nonwork: true },
];

const hours = ["8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM"];

// Rows are half-hour slots; the 10:00 AM slot is read-only on all days (non-work + readonly on the weekend)
const isReadonly = (row: number) => row === 4;

// The slot below the read-only one is selected on all days
const isSelectedRow = (row: number) => row === 5;

// State names on the first cell of the non-work column and of the read-only and selected rows, keyed by "row-day"
const labels: Record<string, string> = {
  "0-Sat": "non-work",
  "0-Sun": "non-work",
  "4-Mon": "readonly",
  "5-Mon": "selected",
};

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <p>This test covers the read-only, non-work and selected cell states, and their combinations.</p>
      <SchedulerWeek
        children={
          <tbody>
            <SchedulerHead as="tr">
              <td>
                <SchedulerTimes>
                  <SchedulerTable role="none">
                    <tbody>
                      <tr style={{ height: "55px" }}>
                        <SchedulerCell as="th" />
                      </tr>
                      <tr style={{ height: "86px" }}>
                        <SchedulerCell as="th" allDay text="all day" />
                      </tr>
                    </tbody>
                  </SchedulerTable>
                </SchedulerTimes>
              </td>
              <td>
                <SchedulerHeader>
                  <SchedulerTable>
                    <tbody>
                      <tr className="k-scheduler-date-group">
                        {days.map(({ day, date, today }) => (
                          <SchedulerCell key={day} as="th" today={today} dayText={day} text={date} />
                        ))}
                      </tr>
                    </tbody>
                  </SchedulerTable>
                  <SchedulerTable className="k-scheduler-header-all-day">
                    <tbody>
                      <tr style={{ height: "86px" }}>
                        {days.map(({ day, nonwork }) => (
                          <SchedulerCell key={day} as="td" nonwork={nonwork} />
                        ))}
                      </tr>
                    </tbody>
                  </SchedulerTable>
                </SchedulerHeader>
              </td>
            </SchedulerHead>
            <SchedulerBody as="tr">
              <td>
                <SchedulerTimes>
                  <SchedulerTable role="none">
                    <tbody>
                      {hours.map((hour) => (
                        <Fragment key={hour}>
                          <tr>
                            <SchedulerCell as="th">
                              <span>{hour}</span>
                            </SchedulerCell>
                          </tr>
                          <tr>
                            <SchedulerCell as="th" cellType={["slot"]} />
                          </tr>
                        </Fragment>
                      ))}
                    </tbody>
                  </SchedulerTable>
                </SchedulerTimes>
              </td>
              <td>
                <SchedulerContent tabIndex={0}>
                  <SchedulerTable>
                    <tbody>
                      {Array.from({ length: hours.length * 2 }, (_, row) => (
                        <tr key={row} className={row % 2 === 0 ? "k-middle-row" : undefined}>
                          {days.map(({ day, nonwork }) => (
                            <SchedulerCell
                              key={day}
                              as="td"
                              readonly={isReadonly(row)}
                              selected={isSelectedRow(row)}
                              nonwork={nonwork}
                            >
                              {labels[`${row}-${day}`] ?? <>&nbsp;</>}
                            </SchedulerCell>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </SchedulerTable>
                </SchedulerContent>
              </td>
            </SchedulerBody>
          </tbody>
        }
      />
    </div>
  </>
);
