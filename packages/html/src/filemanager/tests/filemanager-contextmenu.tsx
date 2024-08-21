import { ContextMenuNormal } from '../../context-menu';
import { FileManagerNormal } from '../../filemanager';
import { MenuListItem } from '../../menu';
import { Popup } from '../../popup';


const styles = `
    #filemanager-context-menu {
        position: absolute;
        top: 200px;
        left: 350px;
        z-index: 2;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>File Manager ContextMenu</span>
            <FileManagerNormal />

            <Popup id="filemanager-context-menu" className="k-menu-popup k-context-menu-popup">
                <ContextMenuNormal>
                    <MenuListItem first text="Rename" icon="pencil"></MenuListItem>
                    <MenuListItem last text="Delete" icon="trash"></MenuListItem>
                </ContextMenuNormal>
            </Popup>

        </div>
    </>
);
