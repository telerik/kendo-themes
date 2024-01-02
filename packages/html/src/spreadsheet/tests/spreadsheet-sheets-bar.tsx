import { Button } from "../../button";
import { MenuList, MenuItem, MenuSeparator } from "../../menu";
import { MenuButton } from "../../menu-button";
import { WindowNormal } from "../../window";
import { Popup } from "../../popup";
import { FormNormal, FormField } from "../../form";
import { Textbox } from "../../textbox";

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
                <div style={{ width: '100%', height: 'auto' }} className="k-spreadsheet">
                    <div className="k-spreadsheet-sheets-bar">
                        <Button className="k-spreadsheet-sheet-add" fillMode="flat" icon="plus" />
                        <Button className="k-spreadsheet-sheets-menu" fillMode="flat" icon="menu" />
                        <div className="k-spreadsheet-sheets k-tabstrip k-tabstrip-bottom k-tabstrip-scrollable">
                            <div className="k-tabstrip-items-wrapper k-vstack">
                                <ul className="k-reset k-tabstrip-items">
                                    <li className="k-item k-first">
                                        <span className="k-link">Sheet 1</span>
                                        <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                    </li>
                                    <li className="k-item">
                                        <span className="k-link">Sheet 2</span>
                                        <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                    </li>
                                    <li className="k-item k-active">
                                        <span className="k-link">Sheet 3</span>
                                        <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                    </li>
                                    <li className="k-item k-focus">
                                        <span className="k-link">Sheet 4</span>
                                        <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                    </li>
                                    <li className="k-item">
                                        <span className="k-link">Sheet 5</span>
                                        <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                    </li>
                                    <li className="k-item k-last k-disabled">
                                        <span className="k-link">Sheet 6</span>
                                        <MenuButton size="medium" showArrow={false} icon="caret-alt-down" fillMode="flat" />
                                    </li>
                                </ul>
                                <Button className="k-tabstrip-prev" fillMode="flat" icon="caret-alt-left" rounded={null} size={null} />
                                <Button className="k-tabstrip-next" fillMode="flat" icon="caret-alt-right" rounded={null} size={null} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <span>Sheets Bar ContextMenu</span>
            <section>
                <Popup id="spreadsheet-context-menu-sheets" className="k-menu-popup k-context-menu-popup">
                    <MenuList className="k-context-menu">
                        <MenuItem text="Delete" icon="trash"></MenuItem>
                        <MenuItem text="Duplicate" icon="copy"></MenuItem>
                        <MenuItem text="Rename" icon="pencil"></MenuItem>
                        <MenuItem text="Hide" icon="eye-slash"></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Move Right" icon="arrow-right"></MenuItem>
                        <MenuItem text="Move Left" icon="arrow-left"></MenuItem>
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
                        <FormField label="Rename sheet" editor={ <Textbox placeholder="Sheet name"/> }></FormField>
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
