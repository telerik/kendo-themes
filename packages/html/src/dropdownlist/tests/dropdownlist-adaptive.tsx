import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { List, ListItem } from '../../list';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-actionsheet-container {
        width: 100%;
        height: 600px;
        position: relative;
        transform: translateZ(0);
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>partial</span>
            <span>full screen</span>

            <section>
                <div className="k-actionsheet-container">
                    <div className="k-overlay"></div>

                    <div className="k-actionsheet k-actionsheet-bottom k-adaptive-actionsheet">
                        <div className="k-actionsheet-titlebar">
                            <div className="k-actionsheet-title k-text-center">
                                <div>Dropdownlist label</div>
                            </div>
                            <div className="k-actionsheet-actions">
                                <Button icon="x" fillMode="flat"></Button>
                            </div>
                        </div>
                        <div className="k-actionsheet-content">
                            <List size="large">
                                <ListItem>List item</ListItem>
                                <ListItem hover>Hover</ListItem>
                                <ListItem focus>Focus</ListItem>
                                <ListItem selected>Selected</ListItem>
                                <ListItem hover selected>Hover selected</ListItem>
                                <ListItem disabled>Disabled</ListItem>
                                <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                                <ListItem showCheckbox>Checkbox</ListItem>
                                <ListItem showIcon iconName="cog">Icon</ListItem>
                                <ListItem showCheckbox showIcon iconName="cog">Checkbox icon</ListItem>
                            </List>
                        </div>
                        <div className="k-actionsheet-footer k-actions k-actions-stretched">
                            <Button size="large" themeColor="primary">Select date</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-actionsheet-container">
                    <div className="k-overlay"></div>

                    <div className="k-actionsheet k-actionsheet-bottom k-actionsheet-fullscreen k-adaptive-actionsheet">
                        <div className="k-actionsheet-titlebar">
                            <div className="k-actionsheet-title k-text-center">
                                <div>Dropdownlist label</div>
                            </div>
                            <div className="k-actionsheet-actions">
                                <Button icon="x" fillMode="flat"></Button>
                            </div>
                        </div>
                        <div className="k-actionsheet-content">
                            <List size="large">
                                <ListItem>List item</ListItem>
                                <ListItem hover>Hover</ListItem>
                                <ListItem focus>Focus</ListItem>
                                <ListItem selected>Selected</ListItem>
                                <ListItem hover selected>Hover selected</ListItem>
                                <ListItem disabled>Disabled</ListItem>
                                <ListItem>List item with very long text, that spans on multiple lines</ListItem>
                                <ListItem showCheckbox>Checkbox</ListItem>
                                <ListItem showIcon iconName="cog">Icon</ListItem>
                                <ListItem showCheckbox showIcon iconName="cog">Checkbox icon</ListItem>
                            </List>
                        </div>
                        <div className="k-actionsheet-footer k-actions k-actions-stretched">
                            <Button size="large" themeColor="primary">Select date</Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </>
);
