import { Dialog } from '../../dialog';
import { Button } from '../../button';


const styles = `
    .k-dialog {
        width: 300px;
        position: relative;
    }

    section {
        height: 280px;
        transform: translate( 0, 0 );
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <Dialog
                    className="k-prompt"
                    title="Prompt Dialog"
                    actions={['x']}
                    actionButtons={
                        <>
                            <Button themeColor="base">Cancel</Button>
                            <Button themeColor="primary">OK</Button>
                        </>
                    }
                >
                    Please enter your name:
                    <input type="text" className="k-input k-input-md k-rounded-md k-input-solid" />
                </Dialog>
            </section>

            <section>
                <Dialog
                    className="k-alert"
                    title="Alert Dialog"
                    actions={['x']}
                    actionButtons={
                        <Button themeColor="primary">OK</Button>
                    }
                >
                    This is an alert message!
                </Dialog>
            </section>

            <section>
                <Dialog
                    className="k-confirm"
                    title="Confirm Dialog"
                    actions={['x']}
                    actionButtons={
                        <>
                            <Button themeColor="base">No</Button>
                            <Button themeColor="primary">Yes</Button>
                        </>
                    }
                >
                    Are you sure you want to proceed?
                </Dialog>
            </section>

        </div>
    </>
);
