import { ActionButtons } from "../../action-buttons";
import { Button } from "../../button";
import { Form, FormField } from "../../form";
import { Icon } from "../../icon";
import { Popover } from "../../popover";
import { SchedulerWeek } from "../templates/scheduler-week";
import { Textbox } from "../../textbox/textbox.spec";

const style = `
    #test-area {
        max-width: 1080px;
    }

    .scheduler-quick-edit-test {
        position: relative;
    }

    .scheduler-quick-edit-test .k-animation-container {
        position: absolute;
        top: 150px;
        left: 275px;
        z-index: 1;
    }
`;

export default () => (
    <>
        <style>{style}</style>
        <div id="test-area">
            <span>Scheduler Week View - Quick edit popover</span>
            <div className="scheduler-quick-edit-test">
                <SchedulerWeek />
                <Popover
                    callout="left"
                    title="Event Name"
                    body={
                        <Form className="k-scheduler-edit-form" orientation="horizontal">
                            <FormField
                                orientation="horizontal"
                                label={<Icon size="xlarge" icon="clock" />}
                                editor={<div className="k-scheduler-edit-form-row k-color-subtle">20 October, 11:00 – 11:30</div>}
                            />
                            <FormField
                                orientation="horizontal"
                                label={<Icon size="xlarge" icon="comment" />}
                                editor={<Textbox value="This is a description of the event." aria-label="Event description" />}
                            />
                        </Form>
                    }
                    style={{ width: "360px" }}
                >
                    <ActionButtons className="k-popover-actions" alignment="end">
                        <Button>Delete</Button>
                        <Button themeColor="primary">Edit</Button>
                    </ActionButtons>
                </Popover>
            </div>
        </div>
    </>
);
