import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Card, CardBody, CardHeader } from '../../card';
import { Searchbox } from '../../searchbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">

            <span>TaskBoard Cards</span>
            <div className="k-widget k-taskboard" style={{ width: "692px" }}>
                <div className="k-taskboard-header">
                    <div className="k-taskboard-header">
                        <div className="k-taskboard-toolbar k-toolbar">
                            <Button icon="add">Add Column</Button>
                            <span className="k-spacer"></span>
                            <Searchbox placeholder="Search..." />
                        </div>
                    </div>
                </div>
                <div className="k-taskboard-content">
                    <div className="k-taskboard-columns-container">
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Card States</div>
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
                                            <a className="k-card-title k-link" href="#">Normal Card</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Normal card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" hover>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Hovered Card</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Hovered card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" focus>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Focused Card</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Focused card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" selected>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Selected Card</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Selected card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" disabled>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">Disabled Card</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Disabled card body</p>
                                        </CardBody>
                                    </Card>
                                    <div className="k-taskboard-drag-placeholder" style={{ height: "109px" }}></div>
                                </div>
                            </div>
                        </div>
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Card Title States</div>
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
                                            <a className="k-card-title k-link" href="#">Normal Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" hover>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link k-state-hover" href="#">Hovered Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" focus>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link k-state-focus" href="#">Focused Card Title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card body</p>
                                        </CardBody>
                                    </Card>
                                    <Card className="k-taskboard-card" selected>
                                        <CardHeader className="k-hbox" details>
                                            <a className="k-card-title k-link" href="#">This is a very very very very very very very very very very very very very very very long card title</a>
                                            <span className="k-spacer"></span>
                                        </CardHeader>
                                        <CardBody>
                                            <p>Card body</p>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="k-taskboard-pane k-taskboard-edit-pane k-hidden"></div>
            </div>

        </div>
    </>
);
