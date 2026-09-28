import { Button } from '../../button';
import { Combobox } from '../../combobox';
import { ToolbarSeparator } from '../../toolbar/toolbar-separator';
import ToolbarPopup from '../../toolbar/toolbar-popup.spec';
import { MenuList, MenuListItem, MenuSeparator } from '../../menu';
import { FloatingToolbar } from '../floating-toolbar.spec';

const styles = `
    .k-animation-container {
        width: max-content;
        position: relative;
        overflow: visible;
    }

    .k-animation-container:has(.k-menu-popup) {
        margin-inline-start: auto;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Overflow: menu</span>

            <section>
                <FloatingToolbar resizable children={[
                    <Combobox key="style" value="(inherited)" />,
                    <Combobox key="size" value="16" />,
                    <ToolbarSeparator key="sep" className="k-toolbar-button-separator" />,
                    <Button key="overflow-btn"
                        icon="more-vertical"
                        className="k-toolbar-overflow-button"
                        fillMode="flat"
                        aria-label="More options"
                        aria-haspopup="menu"
                        aria-expanded="false"
                    ></Button>
                ]}>
                </FloatingToolbar>
            </section>

            <section>
                <FloatingToolbar resizable children={[
                    <Combobox key="style" value="(inherited)" />,
                    <Combobox key="size" value="16" />,
                    <ToolbarSeparator key="sep" className="k-toolbar-button-separator" />,
                    <Button key="overflow-btn"
                        icon="more-vertical"
                        className="k-toolbar-overflow-button"
                        fillMode="flat"
                        id="floating-toolbar-overflow-btn"
                        aria-label="More options"
                        aria-haspopup="menu"
                        aria-expanded="true"
                        aria-controls="floating-toolbar-overflow-menu"
                    ></Button>
                ]}>
                </FloatingToolbar>
                <ToolbarPopup className="k-menu-popup">
                    <MenuList id="floating-toolbar-overflow-menu" aria-labelledby="floating-toolbar-overflow-btn">
                        <MenuListItem icon="foreground-color" text="Text Color" showArrow />
                        <MenuListItem icon="bold" text="Bold" />
                        <MenuListItem icon="italic" text="Italic" />
                        <MenuListItem icon="underline" text="Underline" />
                        <MenuSeparator />
                        <MenuListItem icon="align-left" text="Align Left" />
                        <MenuListItem icon="align-center" text="Align Center" />
                        <MenuListItem icon="align-right" text="Align Right" />
                    </MenuList>
                </ToolbarPopup>
            </section>
        </div>
    </>
);
