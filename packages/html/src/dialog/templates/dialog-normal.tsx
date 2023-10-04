import Dialog from "../dialog.spec";

export const DialogNormal = (props) => (
    <Dialog children={[
        <>
        Dialog content
        </>
    ]}
    { ...props}
    >
    </Dialog>
);
