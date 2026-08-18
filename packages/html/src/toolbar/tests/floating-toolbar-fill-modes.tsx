import { FloatingToolbar } from '../floating-toolbar.spec';
import { ToolbarSeparator } from '../toolbar-separator';
import { Combobox } from '../../combobox/combobox.spec';
import { ColorPicker } from '../../colorpicker/colorpicker.spec';
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';

const styles = `
    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            {FloatingToolbar.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-colspan-all k-col-span-full">{`${fillMode}`}</span>
                    <section className="k-colspan-all k-col-span-full">
                        <FloatingToolbar fillMode={fillMode}>
                            <Combobox fillMode={fillMode} value="(inherited)" />
                            <Combobox fillMode={fillMode} value="16" />
                            <ToolbarSeparator />
                            <ColorPicker fillMode={fillMode} value="fuchsia" valueIconName="foreground-color" />
                            <ToolbarSeparator />
                            <ButtonGroup fillMode={fillMode}>
                                <Button fillMode={fillMode} className="k-group-start" icon="bold"></Button>
                                <Button fillMode={fillMode} icon="italic"></Button>
                                <Button fillMode={fillMode} className="k-group-end" icon="underline"></Button>
                            </ButtonGroup>
                            <ToolbarSeparator />
                            <ButtonGroup fillMode={fillMode}>
                                <Button fillMode={fillMode} className="k-group-start" icon="align-left"></Button>
                                <Button fillMode={fillMode} icon="align-center"></Button>
                                <Button fillMode={fillMode} className="k-group-end" icon="align-right"></Button>
                            </ButtonGroup>
                        </FloatingToolbar>
                    </section>
                </>
            ))}
        </div>
    </>
);
