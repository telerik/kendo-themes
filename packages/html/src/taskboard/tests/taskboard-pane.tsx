import React from 'react';
import ReactDOM from 'react-dom/client';
import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Card, CardBody, CardHeader } from '../../card';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);


const style = `
    #test-area { max-width: 1037px; }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-dgrid k-grid-cols-1">

            <span>Pane on Right(default):</span>
            <div className="k-widget k-taskboard">
                <div className="k-taskboard-header">
                    <div className="k-taskboard-header">
                        <div className="k-taskboard-toolbar k-toolbar">
                            <Button icon="add">Add Column</Button>
                            <span className="k-spacer"></span>
                            <Searchbox placeholder="Search..." />
                        </div>
                    </div>
                </div>
                <div className="k-taskboard-content" style={{ marginRight: "304px" }}>
                    <div className="k-taskboard-columns-container">
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="edit"></Button>
                                    <Button fillMode="flat" icon="add"></Button>
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                            <div className="k-taskboard-column-cards-container">
                                <div className="k-taskboard-column-cards">
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="edit"></Button>
                                    <Button fillMode="flat" icon="add"></Button>
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                            <div className="k-taskboard-column-cards-container">
                                <div className="k-taskboard-column-cards">
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="edit"></Button>
                                    <Button fillMode="flat" icon="add"></Button>
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                            <div className="k-taskboard-column-cards-container">
                                <div className="k-taskboard-column-cards">
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="k-taskboard-pane k-taskboard-edit-pane">
                    <div className="k-taskboard-pane-header">
                        <div className="k-taskboard-pane-header-text">Card X</div>
                        <span className="k-spacer"></span>
                        <div className="k-taskboard-pane-header-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-taskboard-pane-content">
                        <form className="k-form k-form-vertical">
                            <div className="k-form-field">
                                <label className="k-label">Textbox:</label>
                                <div>
                                    <Textbox />
                                </div>
                            </div>
                        </form>
                    </div>
                    <ActionButtons alignment="end" className="k-taskboard-pane-actions">
                        <Button icon="trash">Delete</Button>
                        <Button themeColor="primary" icon="edit">Edit</Button>
                    </ActionButtons>
                </div>
            </div>

            <span>Pane on Left:</span>
            <div className="k-widget k-taskboard">
                <div className="k-taskboard-header">
                    <div className="k-taskboard-header">
                        <div className="k-taskboard-toolbar k-toolbar">
                            <Button icon="add">Add Column</Button>
                            <span className="k-spacer"></span>
                            <Searchbox placeholder="Search..." />
                        </div>
                    </div>
                </div>
                <div className="k-taskboard-content" style={{ marginLeft: "304px" }}>
                    <div className="k-taskboard-columns-container">
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="edit"></Button>
                                    <Button fillMode="flat" icon="add"></Button>
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                            <div className="k-taskboard-column-cards-container">
                                <div className="k-taskboard-column-cards">
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="edit"></Button>
                                    <Button fillMode="flat" icon="add"></Button>
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                            <div className="k-taskboard-column-cards-container">
                                <div className="k-taskboard-column-cards">
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="edit"></Button>
                                    <Button fillMode="flat" icon="add"></Button>
                                    <Button fillMode="flat" icon="close"></Button>
                                </div>
                            </div>
                            <div className="k-taskboard-column-cards-container">
                                <div className="k-taskboard-column-cards">
                                    <Card className="k-taskboard-card">
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card Body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="k-taskboard-pane k-taskboard-pane-start k-taskboard-edit-pane">
                    <div className="k-taskboard-pane-header">
                        <div className="k-taskboard-pane-header-text">Card X</div>
                        <span className="k-spacer"></span>
                        <div className="k-taskboard-pane-header-actions">
                            <Button fillMode="flat" icon="close"></Button>
                        </div>
                    </div>
                    <div className="k-taskboard-pane-content">
                        <form className="k-form k-form-vertical">
                            <div className="k-form-field">
                                <label className="k-label">Textbox:</label>
                                <div>
                                    <Textbox />
                                </div>
                            </div>
                        </form>
                    </div>
                    <ActionButtons alignment="end" className="k-taskboard-pane-actions">
                        <Button icon="trash">Delete</Button>
                        <Button themeColor="primary" icon="edit">Edit</Button>
                    </ActionButtons>
                </div>
            </div>

        </div>
    </>
);
