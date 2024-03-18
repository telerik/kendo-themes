import { DrawerWithOverlay } from '..';

const styles = `
    #test-area .k-drawer,
    #test-area .k-overlay {
        position: absolute;
    }

    #test-area .k-drawer-container:nth-of-type(2) .k-overlay {
        display: none;
    }

    #test-area .k-drawer-content {
        padding: 0 20px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <DrawerWithOverlay />
            <DrawerWithOverlay position="end" />
        </div>
    </>
);
