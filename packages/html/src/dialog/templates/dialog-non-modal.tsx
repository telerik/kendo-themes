import { Button } from "../..";
import Dialog from "../dialog.spec";

export const DialogNonModal = (props) => (
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
        modal={false}
        {...props}
    />
);

export default DialogNonModal;
