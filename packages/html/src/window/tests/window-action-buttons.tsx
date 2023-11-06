import { Button } from '../../button';
import { WindowNormal } from '../../window';


const style = `
    .k-window {
        position: relative;
        width: 300px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <WindowNormal actionButtonsAlign="start" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons at start position
            </WindowNormal>

            <WindowNormal actionButtonsAlign="center" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons at center position
            </WindowNormal>

            <WindowNormal actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons at end position
            </WindowNormal>

            <WindowNormal actionButtonsAlign="stretched" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons with stretched position
            </WindowNormal>

        </div>
    </>
);
