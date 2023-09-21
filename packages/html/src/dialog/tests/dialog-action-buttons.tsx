import { Button } from '../../button';
import { DialogNormal } from '../../dialog';


const styles = `
    .k-dialog {
        position: relative;
        width: 300px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <DialogNormal title="Title" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Action Buttons at start position
            </DialogNormal>

            <DialogNormal title="Title" actions={[ 'x' ]} actionButtonsAlign="center" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Action Buttons at center position
            </DialogNormal>

            <DialogNormal title="Title" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Action Buttons at end position
            </DialogNormal>

            <DialogNormal title="Title" actions={[ 'x' ]} actionButtonsAlign="stretched" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Action Buttons with stretched position
            </DialogNormal>

        </div>
    </>
);
