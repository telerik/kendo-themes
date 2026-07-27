import { Button } from "../../button";
import { Textbox } from "../../textbox";
import { TimePicker } from "../../timepicker";
import { Switch } from "../../switch";
import { Dialog } from "../../dialog";
import { Form, FormField } from "../../form";
import { Icon } from "../../icon";
import Textarea from "../../textarea/textarea.spec";
import { DatePicker } from "../../datepicker";

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
        <span>Dialog - Edit Event</span>
        <Dialog
          modal={false}
          title="Edit event"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button themeColor="primary" fillMode="flat" icon="trash">
                Delete
              </Button>
              <Button>Cancel</Button>
              <Button themeColor="primary">Save</Button>
            </>
          }
          style={{ width: "650px" }}
        >
          <Form className="k-scheduler-edit-form" orientation="horizontal">
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="right-double-quotes" />} editor={<Textbox value="Event Name" aria-label="Event title" />} />

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
                      <DatePicker value="1/21/2021" aria-label="Start date" />
                      <span className="k-scheduler-datetime-label">from</span>
                      <TimePicker value="3:07 AM" aria-label="Start time" />
                    </div>
                    <Button className="k-col-span-2" title="Set Timezone" fillMode="flat" themeColor="primary" icon="globe">
                      Time zone
                    </Button>
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker value="1/21/2021" aria-label="End date" />
                      <span className="k-scheduler-datetime-label">to</span>
                      <TimePicker value="3:07 AM" aria-label="End time" />
                    </div>
                  </div>
                </div>
              }
            />

            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="comment" />} editor={<Textarea resize="y" placeholder="Add Description" aria-label="Description" />} />
          </Form>
        </Dialog>
      </section>

      <section>
        <span>Dialog - Edit Series</span>
        <Dialog
          modal={false}
          title="Edit event"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button themeColor="primary" fillMode="flat" icon="trash">
                Delete
              </Button>
              <Button>Cancel</Button>
              <Button themeColor="primary">Save</Button>
            </>
          }
          style={{ width: "650px" }}
        >
          <Form className="k-scheduler-edit-form" orientation="horizontal">
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="right-double-quotes" />} editor={<Textbox value="Event Name" aria-label="Event title" />} />

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
                      <DatePicker value="1/21/2021" aria-label="Start date" />
                      <span className="k-scheduler-datetime-label">from</span>
                      <TimePicker value="3:07 AM" aria-label="Start time" />
                    </div>
                    <Button className="k-col-span-2" title="Set Timezone" fillMode="flat" themeColor="primary" icon="globe">
                      Time zone
                    </Button>
                    <div className="k-scheduler-edit-form-row">
                      <DatePicker value="1/21/2021" aria-label="End date" />
                      <span className="k-scheduler-datetime-label">to</span>
                      <TimePicker value="3:07 AM" aria-label="End time" />
                    </div>
                  </div>
                  <div className="k-scheduler-edit-form-row">
                    <Button fillMode="flat" icon="arrow-rotate-cw" themeColor="primary">
                      Repeats every 2 days for 3 occurrences.
                    </Button>
                  </div>
                </div>
              }
            />
            <FormField orientation="horizontal" label={<Icon size="xlarge" icon="comment" />} editor={<Textarea resize="y" placeholder="Add Description" aria-label="Description" />} />
          </Form>
        </Dialog>
      </section>
    </div>
  </>
);
