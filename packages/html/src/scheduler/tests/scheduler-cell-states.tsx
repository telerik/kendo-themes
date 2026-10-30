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

// Rows are half-hour slots; the 10:00 AM hour is read-only on all days (non-work + read-only on the weekend)
const isReadonly = (row: number) => row === 4 || row === 5;

// Selected cells: [row, day] spanning regular, read-only and non-work slots
const selected = [[3, "Fri"], [4, "Fri"], [3, "Sat"], [4, "Sat"]];
// Labels (S = selected, NW = non-work, RO = read-only) on one representative cell of each state, keyed by "row-day"
const labels: Record<string, string> = {
  "1-Sun": "NW",
  "4-Mon": "RO",
  "4-Sun": "NW+RO",
  "3-Fri": "S",
  "4-Fri": "S+RO",
  "3-Sat": "S+NW",
  "4-Sat": "S+NW+RO",
};

const isSelected = (row: number, day: string) => selected.some(([r, d]) => r === row && d === day);

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
                              selected={isSelected(row, day)}
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
