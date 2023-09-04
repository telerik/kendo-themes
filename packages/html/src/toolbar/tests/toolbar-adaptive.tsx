import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { ActionSheet, ActionSheetHeader } from '../../action-sheet';
import { MenuItem, MenuSeparator, MenuList } from '../../menu';
import { ToolbarResizable } from '..';

const styles = `
    #test-area {
        --kendo-actionsheet-height: 300px;
        --kendo-actionsheet-max-height: 300px;

        width: 500px;
    }

    #test-area > section {
        height: 600px;
        transform: translateZ(0);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span className="k-colspan-all k-col-span-full">Screen width &lt;= 500px</span>
            <section className="k-colspan-all k-col-span-full">

                <ToolbarResizable size="large" >
                    <ButtonGroup>
                        <Button size="large" icon="align-left">Left</Button>
                        <Button size="large" icon="align-center">Center</Button>
                        <Button size="large" icon="align-right">Right</Button>
                    </ButtonGroup>
                    <Button size="large" icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                </ToolbarResizable>
                <ActionSheet adaptive={true} overlay={false}>
                    <ActionSheetHeader title="Toolbar title" className="k-text-center" />
                    <MenuList size="large">
                        <MenuItem text="Left" icon="align-left"></MenuItem>
                        <MenuItem text="Center" icon="align-center"></MenuItem>
                        <MenuItem text="Right" icon="align-right"></MenuItem>
                        <MenuItem text="Justify" icon="align-justify"></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Font color"></MenuItem>
                        <MenuSeparator></MenuSeparator>
                        <MenuItem text="Cut" icon="cut"></MenuItem>
                        <MenuItem text="Copy" icon="copy"></MenuItem>
                        <MenuItem text="Paste" icon="paste"></MenuItem>
                    </MenuList>
                </ActionSheet>
            </section>

        </div>
    </>
);
