import Dialog from "../dialog.spec";

export const DialogModal = ({ children, ...other }: any) => (
    <>
        <div className="k-dialog-wrapper">
            <div className="k-overlay"></div>
            <Dialog {...other}>
                {children}
            </Dialog>
        </div>
    </>
);

