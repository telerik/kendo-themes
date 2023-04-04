import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { MenuItem, MenuList } from '../../menu';
import { Popup } from '../../popup';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        height: 300px;
    }

    .k-animation-container {
        top: 50px;
        left: 100px;
        overflow: visible;
        z-index: 12000;
    }

    .k-window {
        position: relative;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <section>
                <Window title="Window" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>
                    Target
                </Window>
                <div className="k-animation-container">
                    <Popup className="k-menu-popup">
                        <MenuList className="k-context-menu">
                            <MenuItem text="Item 1" showArrow></MenuItem>
                            <MenuItem text="Item 2" showArrow></MenuItem>
                            <MenuItem text="Item 3" showArrow></MenuItem>
                            <MenuItem text="Item 4" showArrow></MenuItem>
                            <MenuItem text="Item 5" showArrow></MenuItem>
                            <MenuItem text="Item 6" showArrow></MenuItem>
                        </MenuList>
                    </Popup>
                </div>
            </section>
        </div>
    </>
);
