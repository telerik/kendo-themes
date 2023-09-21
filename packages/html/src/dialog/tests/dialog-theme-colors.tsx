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

            <DialogNormal title="Title" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog with default theme color
            </DialogNormal>

            <DialogNormal themeColor="primary" title="Title" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog with primary theme color
            </DialogNormal>

            <DialogNormal themeColor="dark" title="Title" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog with dark theme color
            </DialogNormal>

            <DialogNormal themeColor="light" title="Title" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog with light theme color
            </DialogNormal>
        </div>
    </>
);
