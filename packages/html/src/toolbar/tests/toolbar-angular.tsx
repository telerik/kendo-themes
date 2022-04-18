import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { SplitButton } from '../../split-button';
import { MenuButton } from '../../menu-button';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const toolbarStyle = {
    display: "inline-block",
    borderColor: "inherit"
};

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all">Angular specific rendering and spacing</span>
            <section className="k-colspan-all">
                <div className="k-widget k-toolbar">
                    <div style={toolbarStyle}>
                        <Button>Button</Button>
                    </div>
                    <div style={toolbarStyle}>
                        <div className="k-separator"></div>
                    </div>
                    <div style={toolbarStyle}>
                        <SplitButton>Split button</SplitButton>
                    </div>
                    <div style={toolbarStyle}>
                        <div className="k-separator"></div>
                    </div>
                    <div style={toolbarStyle}>
                        <MenuButton text="Menu button"></MenuButton>
                    </div>
                    <div style={toolbarStyle}>
                        <div className="k-separator"></div>
                    </div>
                    <div style={toolbarStyle}>
                        <div className="k-button-group">
                            <Button icon="align-left"></Button>
                            <Button icon="align-center"></Button>
                            <Button icon="align-right"></Button>
                            <Button icon="align-justify"></Button>
                        </div>
                    </div>
                </div>
            </section>


            <span>wrapped</span>
            <span>rtl</span>

            <section>
                <div className="k-widget k-toolbar">
                    <div style={toolbarStyle}>
                        <Button>Button</Button>
                    </div>
                    <div style={toolbarStyle}>
                        <SplitButton>Split button</SplitButton>
                    </div>
                    <div style={toolbarStyle}>
                        <MenuButton text="Menu button"></MenuButton>
                    </div>
                    <div style={toolbarStyle}>
                        <div className="k-button-group">
                            <Button icon="align-left">Left</Button>
                            <Button icon="align-center">Center</Button>
                            <Button icon="align-right">Right</Button>
                            <Button icon="align-justify">Justify</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section dir="rtl">
                <div className="k-widget k-toolbar">
                    <div style={toolbarStyle}>
                        <Button>Button</Button>
                    </div>
                    <div style={toolbarStyle}>
                        <SplitButton>Split button</SplitButton>
                    </div>
                    <div style={toolbarStyle}>
                        <MenuButton text="Menu button"></MenuButton>
                    </div>
                    <div style={toolbarStyle}>
                        <div className="k-button-group">
                            <Button icon="align-left">Left</Button>
                            <Button icon="align-center">Center</Button>
                            <Button icon="align-right">Right</Button>
                            <Button icon="align-justify">Justify</Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
