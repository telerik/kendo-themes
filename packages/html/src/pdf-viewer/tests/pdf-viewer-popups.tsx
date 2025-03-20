import { Button } from "../../button";
import { MenuList, MenuListItem, MenuSeparator } from "../../menu";
import { MenuButton } from "../../menu-button";
import { Popup } from "../../popup";
import { Toolbar } from "../../toolbar";

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>PDF Viewer Toolbar Menu Popup</span>
            <span>PDF Viewer Annotation Selection Popup</span>

            <div>
                <MenuButton icon="menu" fillMode="flat" showArrow={false} opened={true}
                    popup={
                        <MenuList>
                            <MenuListItem first icon="folder-open" text="Open" />
                            <MenuListItem icon="download" text="Download" />
                            <MenuListItem icon="print" text="Print" />
                            <MenuSeparator></MenuSeparator>
                            <MenuListItem last icon="question" text="Help" />
                        </MenuList>
                    } />
            </div>

            <div>
                <Popup className="k-pdf-viewer-annotation-editor-toolbar">
                    <Toolbar resizable fillMode="flat">
                        <Button fillMode="flat" icon="palette" />
                        <Button fillMode="flat" icon="trash" themeColor="error" />
                    </Toolbar>
                </Popup>
            </div>
        </div>
    </>
);
