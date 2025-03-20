import { Button } from "../../button";
import Dialog from "../dialog.spec";

export const DialogNormal = (props) => (
    <Dialog
        title="Title"
        children={
            <>
                Dialog content
            </>
        }
        actionButtons={
            <>
                <Button>Action</Button>
                <Button themeColor="primary">Primary</Button>
            </>
        }
        actions={[ 'x' ]}
        {...props}
    />
);

/**
 * @deprecated This template has been moved to DialogNormal. Please update your code accordingly.
 */
export const DialogModal = DialogNormal;
