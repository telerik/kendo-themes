import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Window } from '../../window';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        position: relative;
        width: 300px;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <Window title="Title" actions={[ 'window-minimize', 'window', 'x' ]} actionButtonsAlign="start" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons at start position
            </Window>

            <Window title="Title" actions={[ 'window-minimize', 'window', 'x' ]} actionButtonsAlign="center" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons at center position
            </Window>

            <Window title="Title" actions={[ 'window-minimize', 'window', 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons at end position
            </Window>

            <Window title="Title" actions={[ 'window-minimize', 'window', 'x' ]} actionButtonsAlign="stretched" actionButtons={
                <>
                    <Button>Cancel</Button>
                    <Button themeColor="primary">Update</Button>
                </>
            }>
                Action Buttons with stretched position
            </Window>

        </div>
    </>
);
