import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { ColorPicker } from '../../colorpicker';
import { Switch } from '../../switch';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Toolbar</span>
            <section className="k-colspan-all k-col-span-full">
                <div className="k-widget k-toolbar k-toolbar-resizable">
                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                    <Button icon="bold"></Button>
                    <Button>Button</Button>
                    <Button className="k-toggle-button">Toggle</Button>
                    <div className="k-separator"></div>
                    <div className="k-button-group">
                        <Button icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                    </div>
                    <div className="k-separator"></div>
                    <Button themeColor="primary">Primary</Button>
                    <div className="k-separator"></div>
                    <div className="k-toolbar-template">
                        <label>Label:</label>
                        <ColorPicker />
                    </div>
                    <Switch checked />
                </div>
            </section>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <section className="k-colspan-all k-col-span-full" dir="rtl">
                <div className="k-widget k-toolbar k-toolbar-resizable">
                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null}></Button>
                    <Button icon="bold"></Button>
                    <Button>Button</Button>
                    <Button className="k-toggle-button">Toggle</Button>
                    <div className="k-separator"></div>
                    <div className="k-button-group">
                        <Button icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                    </div>
                    <div className="k-separator"></div>
                    <Button themeColor="primary">Primary</Button>
                    <div className="k-separator"></div>
                    <div className="k-toolbar-template">
                        <label>Label:</label>
                        <ColorPicker />
                    </div>
                    <Switch checked />
                </div>
            </section>


            <span className="k-colspan-all k-col-span-full">Button states</span>
            <section className="k-colspan-all k-col-span-full">
                <div className="k-widget k-toolbar k-toolbar-resizable">
                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null} hover></Button>
                    <Button>Normal</Button>
                    <Button hover>Hover</Button>
                    <Button focus>Focus</Button>
                    <Button active>Active</Button>
                    <Button selected>Selected</Button>
                    <Button disabled>Disabled</Button>
                    <div className="k-separator"></div>
                    <Button icon="bold"></Button>
                    <Button icon="bold" hover></Button>
                    <Button icon="bold" focus></Button>
                    <Button icon="bold" active></Button>
                    <Button icon="bold" selected></Button>
                    <Button icon="bold" disabled></Button>
                </div>
            </section>
            <section className="k-colspan-all k-col-span-full">
                <div className="k-widget k-toolbar k-toolbar-resizable">
                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null} focus></Button>
                    <Button icon="align-left" className="k-toggle-button">Normal</Button>
                    <Button icon="align-left" className="k-toggle-button" hover>Hover</Button>
                    <Button icon="align-left" className="k-toggle-button" focus>Focus</Button>
                    <Button icon="align-left" className="k-toggle-button" active>Active</Button>
                    <Button icon="align-left" className="k-toggle-button" selected>Selected</Button>
                    <Button icon="align-left" className="k-toggle-button" disabled>Disabled</Button>
                </div>
            </section>
            <section className="k-colspan-all k-col-span-full">
                <div className="k-widget k-toolbar k-toolbar-resizable">
                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null} active></Button>
                    <Button themeColor="primary" icon="align-left">Normal</Button>
                    <Button themeColor="primary" icon="align-left" hover>Hover</Button>
                    <Button themeColor="primary" icon="align-left" focus>Focus</Button>
                    <Button themeColor="primary" icon="align-left" active>Active</Button>
                    <Button themeColor="primary" icon="align-left" selected>Selected</Button>
                    <Button themeColor="primary" icon="align-left" disabled>Disabled</Button>
                </div>
            </section>

            <span className="k-colspan-all k-col-span-full">Disabled focus state of buttons</span>
            <section className="k-colspan-all k-col-span-full">
                <div className="k-widget k-toolbar k-toolbar-resizable">
                    <Button icon="more-vertical" className="k-overflow-anchor" fillMode="flat" rounded={null} disabled focus></Button>
                    <Button disabled focus>Button</Button>
                    <MenuButton disabled focus text="Menu button"></MenuButton>
                    <SplitButton disabled focus>Split button</SplitButton>
                    <div className="k-button-group">
                        <Button icon="align-left" disabled focus>Button 1</Button>
                        <Button icon="align-center" disabled>Button 2</Button>
                    </div>
                </div>
            </section>

            <span>wrapped</span>
            <span>wrapped rtl</span>
            <section>
                <div className="k-widget k-toolbar">
                    <Button>Button</Button>
                    <MenuButton text="Menu button"></MenuButton>
                    <SplitButton>Split button</SplitButton>
                    <div className="k-button-group">
                        <Button icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                        <Button icon="align-justify">Justify</Button>
                    </div>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-widget k-toolbar">
                    <Button>Button</Button>
                    <SplitButton>Split button</SplitButton>
                    <MenuButton text="Menu button"></MenuButton>
                    <div className="k-button-group">
                        <Button icon="align-left">Left</Button>
                        <Button icon="align-center">Center</Button>
                        <Button icon="align-right">Right</Button>
                        <Button icon="align-justify">Justify</Button>
                    </div>
                </div>
            </section>

        </div>
    </>
);
