import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { ButtonGroup } from '../../button-group';
import { ToolbarItem, ToolbarSeparator, ToolbarResizable, Toolbar, ToolbarScrollableButtonsHidden } from '../../toolbar';
import { Combobox } from '../../combobox';
import { MenuButton } from '../../menu-button';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">
            { Toolbar.options.fillMode.map((fillMode) => (
                <>
                    <span className="k-colspan-all k-col-span-full">{`${fillMode}`}</span>
                    <section className="k-colspan-all k-col-span-full">
                      <ToolbarResizable fillMode={fillMode}>
                          <Button icon="arrow-rotate-ccw" fillMode={fillMode} title="Undo"></Button>
                          <Button icon="arrow-rotate-cw" fillMode={fillMode} title="Redo"></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button icon="cut" fillMode={fillMode} title="Cut"></Button>
                          <Button icon="copy" fillMode={fillMode} title="Copy"></Button>
                          <Button icon="clipboard" fillMode={fillMode} title="Paste"></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Combobox value="Font Name" fillMode={fillMode} />
                          <Combobox value="Font Size" fillMode={fillMode} />
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="font-grow" fillMode={fillMode} title="Increase font size"></Button>
                              <Button className="k-group-end" icon="font-shrink" fillMode={fillMode} title="Decrease font size"></Button>
                          </ButtonGroup>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="bold" fillMode={fillMode} title="Bold"></Button>
                              <Button icon="italic" fillMode={fillMode} title="Italic"></Button>
                              <Button icon="underline" fillMode={fillMode} title="Underline"></Button>
                              <Button className="k-group-end" icon="strikethrough" fillMode={fillMode} title="Strikethrough"></Button>
                          </ButtonGroup>
                          <ToolbarItem>
                              <ColorPicker value="red" valueIconName="foreground-color" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ToolbarItem>
                              <ColorPicker value="fuchsia" valueIconName="droplet" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="borders-all" showArrow title="Borders"></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="align-left" showArrow title="Align left"></MenuButton>
                          <MenuButton fillMode={fillMode} icon="align-middle" showArrow title="Align middle"></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button fillMode={fillMode} icon="text-wrap" title="Text wrap"></Button>
                      </ToolbarResizable>
                    </section>
                    <span className="k-colspan-all k-col-span-full">{`${fillMode}`} with overlay</span>
                    <section className="k-colspan-all k-col-span-full">
                      <ToolbarScrollableButtonsHidden scrollingPosition="both" fillMode={fillMode}>
                          <Button icon="arrow-rotate-ccw" fillMode={fillMode} title="Undo"></Button>
                          <Button icon="arrow-rotate-cw" fillMode={fillMode} title="Redo"></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button icon="cut" fillMode={fillMode} title="Cut"></Button>
                          <Button icon="copy" fillMode={fillMode} title="Copy"></Button>
                          <Button icon="clipboard" fillMode={fillMode} title="Paste"></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Combobox value="Font Name" fillMode={fillMode} />
                          <Combobox value="Font Size" fillMode={fillMode} />
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="font-grow" fillMode={fillMode} title="Increase font size"></Button>
                              <Button className="k-group-end" icon="font-shrink" fillMode={fillMode} title="Decrease font size"></Button>
                          </ButtonGroup>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="bold" fillMode={fillMode} title="Bold"></Button>
                              <Button icon="italic" fillMode={fillMode} title="Italic"></Button>
                              <Button icon="underline" fillMode={fillMode} title="Underline"></Button>
                              <Button className="k-group-end" icon="strikethrough" fillMode={fillMode} title="Strikethrough"></Button>
                          </ButtonGroup>
                          <ToolbarItem>
                              <ColorPicker value="red" valueIconName="foreground-color" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ToolbarItem>
                              <ColorPicker value="fuchsia" valueIconName="droplet" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="borders-all" showArrow title="Borders"></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="align-left" showArrow title="Align left"></MenuButton>
                          <MenuButton fillMode={fillMode} icon="align-middle" showArrow title="Align middle"></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button fillMode={fillMode} icon="text-wrap" title="Text wrap"></Button>
                      </ToolbarScrollableButtonsHidden>
                    </section>
                </>
            ))}
        </div>
    </>
);
