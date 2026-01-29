import { Dialog } from "../../dialog";
import { Button } from "../../button";

export const DialogPredefined = (props) => (
    <div {...props}>
        <Dialog
            className="k-prompt"
            title="Prompt Dialog"
            actions={["x"]}
            actionButtons={
                <>
                    <Button themeColor="base">Cancel</Button>
                    <Button themeColor="primary">OK</Button>
                </>
            }
        >
            Please enter your name:
            <input
                type="text"
                className="k-input k-input-md k-rounded-md k-input-solid"
                aria-label="Name"
            />
        </Dialog>

        <Dialog
            className="k-alert"
            title="Alert Dialog"
            actions={["x"]}
            actionButtons={
                <Button themeColor="primary">OK</Button>
            }
        >
            This is an alert message!
        </Dialog>

        <Dialog
            className="k-confirm"
            title="Confirm Dialog"
            actions={["x"]}
            actionButtons={
                <>
                    <Button themeColor="base">No</Button>
                    <Button themeColor="primary">Yes</Button>
                </>
            }
        >
            Are you sure you want to proceed?
        </Dialog>
    </div>
);
