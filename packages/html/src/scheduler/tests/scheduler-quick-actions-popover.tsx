import { Button } from "../../button";
import { Form, FormField } from "../../form";
import { Icon } from "../../icon";
import Popover from "../../popover/popover.spec";
import ActionButtons from "../../action-buttons/action-buttons.spec";
import { Textbox } from "../../textbox/textbox.spec";

const style = `
    #test-area {
        gap: 32px;
    }
    .k-dialog-wrapper {
        position: relative;
        align-items: start;
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
        <span>Popover - Quick create</span>
        <div style={{ position: "relative" }}>
          <Popover
            callout="left"
            title="New event"
            body={
              <Form className="k-scheduler-edit-form" orientation="horizontal">
                <FormField orientation="horizontal" label={<Icon size="xlarge" icon="right-double-quotes" />} editor={<Textbox placeholder="New event" aria-label="Event title" />} />

                <FormField orientation="horizontal" label={<Icon size="xlarge" icon="clock" />} editor={<div className="k-scheduler-edit-form-row k-color-subtle">20 October, 11:00 - 11:30</div>} />
              </Form>
            }
            style={{ width: "380px" }}
          >
            <ActionButtons className="k-popover-actions" alignment="stretched">
              <Button fillMode="flat" themeColor="primary" icon="arrows-resizing">
                More options
              </Button>
              <span className="k-spacer" />
              <Button>Cancel</Button>
              <Button themeColor="primary">Save</Button>
            </ActionButtons>
          </Popover>
        </div>
      </section>

      <section>
        <span>Popover Quick edit</span>
        <div style={{ position: "relative" }}>
          <Popover
            callout="left"
            title="Event Name"
            body={
              <Form className="k-scheduler-edit-form" orientation="horizontal">
                <FormField orientation="horizontal" label={<Icon size="xlarge" icon="clock" />} editor={<div className="k-scheduler-edit-form-row k-color-subtle">20 October, 11:00 – 11:30</div>} />
              </Form>
            }
            style={{ width: "380px" }}
          >
            <ActionButtons className="k-popover-actions" alignment="end">
              <Button>Delete</Button>
              <Button themeColor="primary">Edit</Button>
            </ActionButtons>
          </Popover>
        </div>
      </section>

      <section>
        <span>Popover Quick edit - with description</span>
        <div style={{ position: "relative" }}>
          <Popover
            callout="left"
            title="Event Name"
            body={
              <Form className="k-scheduler-edit-form" orientation="horizontal">
                <FormField orientation="horizontal" label={<Icon size="xlarge" icon="clock" />} editor={<div className="k-scheduler-edit-form-row k-color-subtle">20 October, 11:00 – 11:30</div>} />

                <FormField orientation="horizontal" label={<Icon size="xlarge" icon="comment" />} editor={<div className="k-scheduler-edit-form-row">This is a description of the event saying what the event will be about and other stuff.</div>} />
              </Form>
            }
            style={{ width: "380px" }}
          >
            <ActionButtons className="k-popover-actions" alignment="end">
              <Button>Delete</Button>
              <Button themeColor="primary">Edit</Button>
            </ActionButtons>
          </Popover>
        </div>
      </section>

      <section>
        <span>Popover Quick Edit - readonly</span>
        <div style={{ position: "relative" }}>
          <Popover
            callout="left"
            title="Event Name"
            body={
              <Form className="k-scheduler-edit-form" orientation="horizontal">
                <FormField orientation="horizontal" label={<Icon size="xlarge" icon="clock" />} editor={<div className="k-scheduler-edit-form-row k-color-subtle">20 October, 11:00 – 11:30</div>} />
              </Form>
            }
            style={{ width: "380px" }}
          />
        </div>
      </section>
    </div>
  </>
);
