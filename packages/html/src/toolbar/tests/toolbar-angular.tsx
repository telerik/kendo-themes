import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';
import { Toolbar } from '../toolbar';
import { ButtonGroup } from '../../button-group';
import { ToolbarSeparator } from '../toolbar-separator';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Angular specific rendering and spacing</span>
            <section className="k-colspan-all k-col-span-full">
                <Toolbar>
                    <div className="k-toolbar-renderer">
                        <Button>Button</Button>
                    </div>
                    <div className="k-toolbar-renderer">
                        <ToolbarSeparator></ToolbarSeparator>
                    </div>
                    <div className="k-toolbar-renderer">
                        <SplitButton>Split button</SplitButton>
                    </div>
                    <div className="k-toolbar-renderer">
                        <ToolbarSeparator></ToolbarSeparator>
                    </div>
                    <div className="k-toolbar-renderer">
                        <MenuButton text="Menu button"></MenuButton>
                    </div>
                    <div className="k-toolbar-renderer">
                        <ToolbarSeparator></ToolbarSeparator>
                    </div>
                    <div className="k-toolbar-renderer">
                        <ButtonGroup>
                            <Button icon="align-left"></Button>
                            <Button icon="align-center"></Button>
                            <Button icon="align-right"></Button>
                            <Button icon="align-justify"></Button>
                        </ButtonGroup>
                    </div>
                </Toolbar>
            </section>


            <span>wrapped</span>
            <span>rtl</span>

            <section>
                <Toolbar>
                    <div className="k-toolbar-renderer">
                        <Button>Button</Button>
                    </div>
                    <div className="k-toolbar-renderer">
                        <SplitButton>Split button</SplitButton>
                    </div>
                    <div className="k-toolbar-renderer">
                        <MenuButton text="Menu button"></MenuButton>
                    </div>
                    <div className="k-toolbar-renderer">
                        <ButtonGroup>
                            <Button icon="align-left">Left</Button>
                            <Button icon="align-center">Center</Button>
                            <Button icon="align-right">Right</Button>
                            <Button icon="align-justify">Justify</Button>
                        </ButtonGroup>
                    </div>
                </Toolbar>
            </section>
            <section dir="rtl">
                <Toolbar>
                    <div className="k-toolbar-renderer">
                        <Button>Button</Button>
                    </div>
                    <div className="k-toolbar-renderer">
                        <SplitButton>Split button</SplitButton>
                    </div>
                    <div className="k-toolbar-renderer">
                        <MenuButton text="Menu button"></MenuButton>
                    </div>
                    <div className="k-toolbar-renderer">
                        <ButtonGroup>
                            <Button icon="align-left">Left</Button>
                            <Button icon="align-center">Center</Button>
                            <Button icon="align-right">Right</Button>
                            <Button icon="align-justify">Justify</Button>
                        </ButtonGroup>
                    </div>
                </Toolbar>
            </section>

        </div>
    </>
);
