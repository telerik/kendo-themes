import { Button } from '../../button';
import { DialogNormal } from '../../dialog';

const styles = `
    .k-dialog {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <DialogNormal title="Title
                        g y p
                        t d l" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog content template
            </DialogNormal>

            <DialogNormal title="Cursive
                        g y p
                        t d l" actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog without titlebar actions
            </DialogNormal>

            <DialogNormal title="" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog with empty title and actions
            </DialogNormal>

            <DialogNormal title="">
                Dialog with empty title and no actions
            </DialogNormal>

            <DialogNormal actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog without title
            </DialogNormal>

            <DialogNormal title="Scrolling" actions={[ 'x' ]} actionButtonsAlign="end" style={{ height: "170px" }} actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                <p>Dialog content template with long text and vertical scrolling.</p>
                <p>Dialog content template with long text and vertical scrolling.</p>
                <p>Dialog content template with long text and vertical scrolling.</p>
            </DialogNormal>

        </div>
    </>
);
