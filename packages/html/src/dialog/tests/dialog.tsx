import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Dialog } from '../../dialog';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-dialog {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <Dialog title="Title
                        g y p
                        t d l" actions={[ 'close' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog content template
            </Dialog>

            <Dialog title="Cursive
                        g y p
                        t d l" actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog without titlebar actions
            </Dialog>

            <Dialog title="" actions={[ 'close' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog with empty title and actions
            </Dialog>

            <Dialog title="">
                Dialog with empty title and no actions
            </Dialog>

            <Dialog actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog without title
            </Dialog>

            <Dialog title="Scrolling" actions={[ 'close' ]} actionButtonsAlign="end" style={{ height: "170px" }} actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                <p>Dialog content template with long text and vertical scrolling.</p>
                <p>Dialog content template with long text and vertical scrolling.</p>
                <p>Dialog content template with long text and vertical scrolling.</p>
            </Dialog>

        </div>
    </>
);
