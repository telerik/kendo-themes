import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ColorPicker } from '../../colorpicker';
import { Switch } from '../../switch';
import { ButtonGroup } from '../../button-group';
import { Toolbar, ToolbarItem, ToolbarSeparator } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid">

            <span className="k-colspan-all k-col-span-full">Small</span>
            <section className="k-colspan-all k-col-span-full">
                <Toolbar size="small" resizable>
                    <Button size="small" icon="bold"></Button>
                    <Button size="small">Button</Button>
                    <Button size="small" className="k-toggle-button">Toggle</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ButtonGroup>
                        <Button size="small" icon="align-left">Left</Button>
                        <Button size="small" icon="align-center">Center</Button>
                        <Button size="small" icon="align-right">Right</Button>
                    </ButtonGroup>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button size="small" themeColor="primary">Primary</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ToolbarItem>
                        <label>Label:</label>
                        <ColorPicker size="small" />
                    </ToolbarItem>
                    <Switch size="small" checked />
                    <Button size="small" icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                </Toolbar>
            </section>

            <span className="k-colspan-all k-col-span-full">Medium</span>
            <section className="k-colspan-all k-col-span-full">
                <Toolbar size="medium" resizable>
                    <Button size="medium" icon="bold"></Button>
                    <Button size="medium">Button</Button>
                    <Button size="medium" className="k-toggle-button">Toggle</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ButtonGroup>
                        <Button size="medium" icon="align-left">Left</Button>
                        <Button size="medium" icon="align-center">Center</Button>
                        <Button size="medium" icon="align-right">Right</Button>
                    </ButtonGroup>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button size="medium" themeColor="primary">Primary</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ToolbarItem>
                        <label>Label:</label>
                        <ColorPicker size="medium" />
                    </ToolbarItem>
                    <Switch size="medium" checked />
                    <Button size="medium" icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                </Toolbar>
            </section>

            <span className="k-colspan-all k-col-span-full">Large</span>
            <section className="k-colspan-all k-col-span-full">
                <Toolbar size="large" resizable>
                    <Button size="large" icon="bold"></Button>
                    <Button size="large">Button</Button>
                    <Button size="large" className="k-toggle-button">Toggle</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ButtonGroup>
                        <Button size="large" icon="align-left">Left</Button>
                        <Button size="large" icon="align-center">Center</Button>
                        <Button size="large" icon="align-right">Right</Button>
                    </ButtonGroup>
                    <ToolbarSeparator></ToolbarSeparator>
                    <Button size="large" themeColor="primary">Primary</Button>
                    <ToolbarSeparator></ToolbarSeparator>
                    <ToolbarItem>
                        <label>Label:</label>
                        <ColorPicker size="large" />
                    </ToolbarItem>
                    <Switch size="large" checked />
                    <Button size="large" icon="more-vertical" className="k-toolbar-overflow-button" fillMode="flat" rounded={null}></Button>
                </Toolbar>
            </section>

        </div>
    </>
);
