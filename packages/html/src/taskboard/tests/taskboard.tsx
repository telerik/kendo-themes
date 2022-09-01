import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Card, CardBody, CardHeader } from '../../card';
import { Searchbox } from '../../searchbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    #test-area {
        max-width: 1030px;
        padding: 5px;
    }

    #test-area > span {
        padding: 20px 20px 0;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>TaskBoard</span>
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
                <div className="k-taskboard-content">
                    <div className="k-taskboard-columns-container">
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
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
                <div className="k-taskboard-pane k-taskboard-edit-pane k-hidden"></div>
            </div>

        </div>
    </>
);
