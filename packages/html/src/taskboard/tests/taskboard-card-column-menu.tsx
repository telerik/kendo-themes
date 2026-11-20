import { Popup } from '../../popup';
import { ContextMenu } from '../../context-menu';
import { MenuListItem } from '../../menu';

const styles = `
    .k-animation-container,
    .k-popup {
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <Popup className="k-menu-popup">
                <ContextMenu>
                    <MenuListItem text="Edit card" icon="pencil" />
                    <MenuListItem text="Delete card" icon="trash" />
                </ContextMenu>
            </Popup>
        </div>
    </>
);
