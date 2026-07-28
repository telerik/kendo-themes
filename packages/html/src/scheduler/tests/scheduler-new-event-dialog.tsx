import { Button } from "../../button";
import { Textbox } from "../../textbox";
import { TimePicker } from "../../timepicker";
import { Switch } from "../../switch";
import { Dialog } from "../../dialog";
import { Form, FormField } from "../../form";
import { Icon } from "../../icon";
import Textarea from "../../textarea/textarea.spec";
import { DatePicker } from "../../datepicker";
import { DropdownList } from "../../dropdownlist";

const style = `
    #test-area {
        gap: 32px;
    }
    .k-dialog-wrapper {
        position: relative;
        align-items: start;
    }

    .k-window {
      position: relative;
    }

    .k-animation-container {
     position: relative;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid">
      <section>
        <span>Dialog - More options</span>
        <Dialog
          modal={false}
          title="New event"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button>Cancel</Button>
              <Button themeColor="primary">Save</Button>
            </>
          }
          style={{ width: "650px" }}
        >
          <Form className="k-scheduler-edit-form" orientation="horizontal">
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="right-double-quotes" />} editor={<Textbox placeholder="New event" aria-label="Event title" />} />

            <FormField
              label={<Icon size="xlarge" icon="clock" />}
              editor={
                <div className="k-scheduler-datetime-section">
                  <div className="k-scheduler-edit-form-row">
                    <Switch checked={false} aria-label="All day" />
                    <span>All day</span>
                  </div>
                  <div className="k-scheduler-datetime-grid">
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker showClearButton={false} value="1/21/2021" aria-label="Start date" />
                      <span className="k-scheduler-datetime-label">from</span>
                      <TimePicker showClearButton={false} value="3:07 AM" aria-label="Start time" />
                    </div>
                    <Button className="k-col-span-2" title="Set Timezone" fillMode="flat" themeColor="primary" icon="globe">
                      Time zone
                    </Button>
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker showClearButton={false} value="1/21/2021" aria-label="End date" />
                      <span className="k-scheduler-datetime-label">to</span>
                      <TimePicker showClearButton={false} value="3:07 AM" aria-label="End time" />
                    </div>
                  </div>
                  <div className="k-scheduler-edit-form-row">
                    <Button fillMode="flat" icon="arrow-rotate-cw" themeColor="primary">
                      Make recurring
                    </Button>
                  </div>
                </div>
              }
            />

            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="comment" />} editor={<Textarea resize="y" placeholder="Add Description" aria-label="Description" />} />
          </Form>
        </Dialog>
      </section>

      <section>
        <span>Dialog - More options, time zone</span>
        <Dialog
          modal={false}
          title="New event"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button>Cancel</Button>
              <Button themeColor="primary">Save</Button>
            </>
          }
          style={{ width: "650px" }}
        >
          <Form className="k-scheduler-edit-form" orientation="horizontal">
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="right-double-quotes" />} editor={<Textbox placeholder="New event" aria-label="Event title" />} />

            <FormField
              label={<Icon size="xlarge" icon="clock" />}
              editor={
                <div className="k-scheduler-datetime-section">
                  <div className="k-scheduler-edit-form-row">
                    <Switch checked={false} aria-label="All day" />
                    <span>All day</span>
                  </div>
                  <div className="k-scheduler-datetime-grid">
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker showClearButton={false} value="1/21/2021" aria-label="Start date" />
                      <span className="k-scheduler-datetime-label">from</span>
                      <TimePicker showClearButton={false} value="3:07 AM" aria-label="Start time" />
                    </div>
                    <DropdownList value="(UTC+02:00)" aria-label="Start timezone" />
                    <Button fillMode="flat" title="Reset Timezone" themeColor="primary" icon="globe" aria-label="Reset timezone"></Button>
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker showClearButton={false} value="1/21/2021" aria-label="End date" />
                      <span className="k-scheduler-datetime-label">to</span>
                      <TimePicker showClearButton={false} value="3:07 AM" aria-label="End time" />
                    </div>
                    <DropdownList value="(UTC+02:00)" aria-label="End timezone" />
                  </div>
                  <div className="k-scheduler-edit-form-row">
                    <Button fillMode="flat" icon="arrow-rotate-cw" themeColor="primary">
                      Make recurring
                    </Button>
                  </div>
                </div>
              }
            />
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="comment" />} editor={<Textarea resize="y" placeholder="Add description" aria-label="Description" />} />
          </Form>
        </Dialog>
      </section>

      <section>
        <span>Dialog - More options, all day</span>
        <Dialog
          modal={false}
          title="New event"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button>Cancel</Button>
              <Button themeColor="primary">Save</Button>
            </>
          }
          style={{ width: "650px" }}
        >
          <Form className="k-scheduler-edit-form" orientation="horizontal">
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="right-double-quotes" />} editor={<Textbox placeholder="New event" aria-label="Event title" />} />

            <FormField
              label={<Icon size="xlarge" icon="clock" />}
              editor={
                <div className="k-scheduler-datetime-section">
                  <div className="k-scheduler-edit-form-row">
                    <Switch checked={true} aria-label="All day" />
                    <span>All day</span>
                  </div>
                  <div className="k-scheduler-datetime-grid">
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker showClearButton={false} value="1/21/2021" aria-label="Start date" />
                      <span className="k-scheduler-datetime-label">to</span>
                      <DatePicker showClearButton={false} value="1/21/2021" aria-label="End date" />
                    </div>
                  </div>
                  <div className="k-scheduler-edit-form-row">
                    <Button fillMode="flat" icon="arrow-rotate-cw" themeColor="primary">
                      Make recurring
                    </Button>
                  </div>
                </div>
              }
            />

            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="comment" />} editor={<Textarea resize="y" placeholder="Add description" aria-label="Description" />} />
          </Form>
        </Dialog>
      </section>
    </div>
  </>
);
