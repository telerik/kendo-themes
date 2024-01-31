import { Button } from "../../button";
import { MenuList, MenuListItem, MenuSeparator } from "../../menu";
import { MenuButton } from "../../menu-button";
import { WindowNormal } from "../../window";
import { Popup } from "../../popup";
import { FormNormal, FormField } from "../../form";
import { Textbox } from "../../textbox";
import { SpreadsheetNormal, SpreadsheetSheetsBar } from "..";
import { TabStripItem } from "../..";

const style = `
    #test-area {
        max-width: 1180px;
    }

    #test-area section {
        justify-self: start;
    }

    .k-spreadsheet-cell,
    .k-spreadsheet-formula-input {
        white-space: normal !important;
    }

    .k-animation-container {
        position: relative;
    }

    .k-spreadsheet-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Sheets Bar</span>
            <section>
                <SpreadsheetNormal style={{ width: '100%', height: 'auto' }}>
                    <SpreadsheetSheetsBar tabStripItems={
                        <>
                            <TabStripItem first value="Sheet 1">
                                <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                            </TabStripItem>
                            <TabStripItem value="Sheet 2">
                                <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                            </TabStripItem>
                            <TabStripItem active value="Sheet 3">
                                <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                            </TabStripItem>
                            <TabStripItem focus value="Sheet 4">
                                <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                            </TabStripItem>
                            <TabStripItem value="Sheet 5">
                                <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                            </TabStripItem>
                            <TabStripItem last disabled value="Sheet 6">
                                <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                            </TabStripItem>
                        </>
                    } />
                </SpreadsheetNormal>
            </section>

            <span>Sheets Bar ContextMenu</span>
            <section>
                <Popup id="spreadsheet-context-menu-sheets" className="k-menu-popup k-context-menu-popup">
                    <MenuList className="k-context-menu">
                        <MenuListItem text="Delete" icon="trash"></MenuListItem>
                        <MenuListItem text="Duplicate" icon="copy"></MenuListItem>
                        <MenuListItem text="Rename" icon="pencil"></MenuListItem>
                        <MenuListItem text="Hide" icon="eye-slash"></MenuListItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuListItem text="Move Right" icon="arrow-right"></MenuListItem>
                        <MenuListItem text="Move Left" icon="arrow-left"></MenuListItem>
                    </MenuList>
                </Popup>
            </section>

            <span>Sheets Bar Rename</span>
            <section>
                <WindowNormal title="Rename Sheet" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="stretched" actionButtons={
                    <>
                        <Button themeColor="primary">Rename</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Rename sheet" editor={<Textbox placeholder="Sheet name" />}></FormField>
                    </FormNormal>
                </WindowNormal>
            </section>

            <span>Sheets Bar Delete</span>
            <section>
                <WindowNormal title="Delete Sheet" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="stretched" actionButtons={
                    <>
                        <Button themeColor="primary">Delete</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <p>The deleted sheet data will be lost.</p>
                    <p>Are you sure you want to proceed?</p>
                </WindowNormal>
            </section>

        </div>
    </>
);
