import { Button } from "../../button";
import { NumericTextbox } from "../../numerictextbox";
import { DatePicker } from "../../datepicker";
import { DropdownListNormal } from "../../dropdownlist";
import { Dialog } from "../../dialog";
import { Form, FormField, FormHint } from "../../form";
import { RadioButton, RadioGroup, RadioItem } from "../../radio";

const style = `
    #test-area {
        gap: 40px;
    }
    .k-dialog-wrapper {
        position: relative;
    }
    .k-overlay {
        display: none;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-flex k-flex-wrap">
      {/* ── Recurrence – Daily ─────────────────────────────────────────── */}
      <section>
        <span>Recurrence – Daily</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="1" aria-label="Interval" />
                  <DropdownListNormal value="Day" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="Never" aria-label="End condition" />
                </div>
              }
            />

            <FormField editor={<FormHint>Repeats every day.</FormHint>} />
          </Form>
        </Dialog>
      </section>

      {/* ── Recurrence – Daily – After N occurrences ──────────────────── */}
      <section>
        <span>Recurrence – Daily – After occurrences</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="2" aria-label="Interval" />
                  <DropdownListNormal value="Day" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="After" aria-label="End condition" />
                  <NumericTextbox showClearButton={false} value="10" aria-label="Occurrences" />
                </div>
              }
            />
            <FormField editor={<FormHint>Repeats every 2 days, after 10 time(s).</FormHint>} />
          </Form>
        </Dialog>
      </section>

      {/* ── Recurrence – Daily – On date ──────────────────────────────── */}
      <section>
        <span>Recurrence – Daily – On date</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="1" aria-label="Interval" />
                  <DropdownListNormal value="Day" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="On" aria-label="End condition" />
                  <DatePicker value="01/31/2026" aria-label="End date" />
                </div>
              }
            />
            <FormField editor={<FormHint>Repeats every day until Jan 31, 2026.</FormHint>} />
          </Form>
        </Dialog>
      </section>

      {/* ── Recurrence – Weekly ────────────────────────────────────────── */}
      <section>
        <span>Recurrence – Weekly</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="1" aria-label="Interval" />
                  <DropdownListNormal value="Week" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Repeat on"
              editor={
                <div className="k-scheduler-weekday-picker" role="group" aria-label="Repeat on days">
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Monday" aria-pressed="false" tabIndex={-1}>
                    M
                  </Button>
                  <Button selected themeColor="primary" fillMode="flat" rounded="full" aria-label="Tuesday" aria-pressed="true" tabIndex={0}>
                    T
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Wednesday" aria-pressed="false" tabIndex={-1}>
                    W
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Thursday" aria-pressed="false" tabIndex={-1}>
                    T
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Friday" aria-pressed="false" tabIndex={-1}>
                    F
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Saturday" aria-pressed="false" tabIndex={-1}>
                    S
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Sunday" aria-pressed="false" tabIndex={-1}>
                    S
                  </Button>
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="Never" aria-label="End condition" />
                </div>
              }
            />
            <FormField editor={<FormHint>Repeats every week on Tuesday.</FormHint>} />
          </Form>
        </Dialog>
      </section>

      {/* ── Recurrence – Monthly ───────────────────────────────────────── */}
      <section>
        <span>Recurrence – Monthly</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="1" aria-label="Interval" />
                  <DropdownListNormal value="Month" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Repeat on"
              editor={
                <RadioGroup>
                  <RadioItem>
                    <RadioButton id="recur-monthday" checked aria-label="Day of the week" />
                    <div className="k-scheduler-recurrence-fields">
                      <DropdownListNormal value="Second" aria-label="Position" />
                      <DropdownListNormal value="Weekend day" aria-label="Day type" />
                    </div>
                  </RadioItem>
                  <RadioItem>
                    <RadioButton id="recur-weekday" aria-label="Day of the month" />
                    <div className="k-scheduler-recurrence-fields">
                      <NumericTextbox showClearButton={false} value="31 day" aria-label="Day of month" />
                    </div>
                  </RadioItem>
                </RadioGroup>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="Never" aria-label="End condition" />
                </div>
              }
            />
            <FormField editor={<FormHint>Repeats every month on the second weekend day.</FormHint>} />
          </Form>
        </Dialog>
      </section>

      {/* ── Recurrence – Yearly ────────────────────────────────────────── */}
      <section>
        <span>Recurrence – Yearly</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="1" aria-label="Interval" />
                  <DropdownListNormal value="Year" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Repeat on"
              editor={
                <RadioGroup>
                  <RadioItem>
                    <RadioButton id="recur-yearly-monthday" checked aria-label="Day of the month" />
                    <div className="k-scheduler-recurrence-fields">
                      <DropdownListNormal value="October" aria-label="Month" />
                      <NumericTextbox showClearButton={false} value="1" aria-label="Day" />
                    </div>
                  </RadioItem>
                  <RadioItem>
                    <RadioButton id="recur-yearly-weekday" aria-label="Day of the week" />
                    <div className="k-scheduler-recurrence-fields">
                      <DropdownListNormal value="Second" aria-label="Position" />
                      <DropdownListNormal value="Weekend day" aria-label="Day type" />
                      <span className="k-scheduler-edit-form-row">
                        <span>of</span>
                        <DropdownListNormal value="October" aria-label="Month" />
                      </span>
                    </div>
                  </RadioItem>
                </RadioGroup>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="Never" aria-label="End condition" />
                </div>
              }
            />
            <FormField editor={<FormHint>Repeats every year on October 1st.</FormHint>} />
          </Form>
        </Dialog>
      </section>

      {/* ── Recurrence – Weekly – Remove recurrence ────────────────────── */}
      <section>
        <span>Recurrence – Weekly – Remove recurrence</span>
        <Dialog
          title="Recurrence"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button fillMode="flat" themeColor="primary">
                Remove recurrence
              </Button>
              <Button>Cancel</Button>
              <Button themeColor="primary">
                Save
              </Button>
            </>
          }
          style={{ width: "540px" }}
        >
          <Form tag="div" orientation="horizontal">
            <FormField
              orientation="horizontal"
              label="Repeat every"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <NumericTextbox showClearButton={false} value="1" aria-label="Interval" />
                  <DropdownListNormal value="Week" aria-label="Frequency" />
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Repeat on"
              editor={
                <div className="k-scheduler-weekday-picker" role="group" aria-label="Repeat on days">
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Monday" aria-pressed="false" tabIndex={-1}>
                    M
                  </Button>
                  <Button selected themeColor="primary" fillMode="flat" rounded="full" aria-label="Tuesday" aria-pressed="true" tabIndex={0}>
                    T
                  </Button>
                  <Button selected themeColor="primary" fillMode="flat" rounded="full" aria-label="Wednesday" aria-pressed="true" tabIndex={-1}>
                    W
                  </Button>
                  <Button selected themeColor="primary" fillMode="flat" rounded="full" aria-label="Thursday" aria-pressed="true" tabIndex={-1}>
                    T
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Friday" aria-pressed="false" tabIndex={-1}>
                    F
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Saturday" aria-pressed="false" tabIndex={-1}>
                    S
                  </Button>
                  <Button themeColor="primary" fillMode="flat" rounded="full" aria-label="Sunday" aria-pressed="false" tabIndex={-1}>
                    S
                  </Button>
                </div>
              }
            />
            <FormField
              orientation="horizontal"
              label="Ends"
              editor={
                <div className="k-scheduler-recurrence-fields">
                  <DropdownListNormal value="Never" aria-label="End condition" />
                </div>
              }
            />
            <FormField editor={<FormHint>Repeats every week on Tuesday, Wednesday and Thursday.</FormHint>} />
          </Form>
        </Dialog>
      </section>
    </div>
  </>
);
