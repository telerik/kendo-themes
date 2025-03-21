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
                    <span className="k-colspan-all k-col-span-full">{fillMode}</span>
                    <section className="k-colspan-all k-col-span-full">
                      <ToolbarResizable fillMode={fillMode}>
                          <Button icon="arrow-rotate-ccw" fillMode={fillMode}></Button>
                          <Button icon="arrow-rotate-cw" fillMode={fillMode}></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button icon="cut" fillMode={fillMode}></Button>
                          <Button icon="copy" fillMode={fillMode}></Button>
                          <Button icon="clipboard" fillMode={fillMode}></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Combobox value="Font Name" fillMode={fillMode} />
                          <Combobox value="Font Size" fillMode={fillMode} />
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="font-grow" fillMode={fillMode}></Button>
                              <Button className="k-group-end" icon="font-shrink" fillMode={fillMode}></Button>
                          </ButtonGroup>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="bold" fillMode={fillMode}></Button>
                              <Button icon="italic" fillMode={fillMode}></Button>
                              <Button icon="underline" fillMode={fillMode}></Button>
                              <Button className="k-group-end" icon="strikethrough" fillMode={fillMode}></Button>
                          </ButtonGroup>
                          <ToolbarItem>
                              <ColorPicker value="red" valueIconName="foreground-color" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ToolbarItem>
                              <ColorPicker value="fuchsia" valueIconName="droplet" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="borders-all" showArrow></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="align-left" showArrow></MenuButton>
                          <MenuButton fillMode={fillMode} icon="align-middle" showArrow></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button fillMode={fillMode} icon="text-wrap"></Button>
                      </ToolbarResizable>
                    </section>
                    <span className="k-colspan-all k-col-span-full">{fillMode} with overlay</span>
                    <section className="k-colspan-all k-col-span-full">
                      <ToolbarScrollableButtonsHidden scrollingPosition="both" fillMode={fillMode}>
                          <Button icon="arrow-rotate-ccw" fillMode={fillMode}></Button>
                          <Button icon="arrow-rotate-cw" fillMode={fillMode}></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button icon="cut" fillMode={fillMode}></Button>
                          <Button icon="copy" fillMode={fillMode}></Button>
                          <Button icon="clipboard" fillMode={fillMode}></Button>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Combobox value="Font Name" fillMode={fillMode} />
                          <Combobox value="Font Size" fillMode={fillMode} />
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="font-grow" fillMode={fillMode}></Button>
                              <Button className="k-group-end" icon="font-shrink" fillMode={fillMode}></Button>
                          </ButtonGroup>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ButtonGroup fillMode={fillMode}>
                              <Button className="k-group-start" icon="bold" fillMode={fillMode}></Button>
                              <Button icon="italic" fillMode={fillMode}></Button>
                              <Button icon="underline" fillMode={fillMode}></Button>
                              <Button className="k-group-end" icon="strikethrough" fillMode={fillMode}></Button>
                          </ButtonGroup>
                          <ToolbarItem>
                              <ColorPicker value="red" valueIconName="foreground-color" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <ToolbarItem>
                              <ColorPicker value="fuchsia" valueIconName="droplet" fillMode={fillMode} />
                          </ToolbarItem>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="borders-all" showArrow></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <MenuButton fillMode={fillMode} icon="align-left" showArrow></MenuButton>
                          <MenuButton fillMode={fillMode} icon="align-middle" showArrow></MenuButton>
                          <ToolbarSeparator></ToolbarSeparator>
                          <Button fillMode={fillMode} icon="text-wrap"></Button>
                      </ToolbarScrollableButtonsHidden>
                    </section>
                </>
            ))}
        </div>
    </>
);
