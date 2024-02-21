import { FileManagerNormal } from '../../filemanager';
import { MenuListItem, MenuList } from '../../menu';
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
                <MenuList>
                    <MenuListItem text="Rename" icon="pencil"></MenuListItem>
                    <MenuListItem text="Delete" icon="trash"></MenuListItem>
                </MenuList>
            </Popup>

        </div>
    </>
);
