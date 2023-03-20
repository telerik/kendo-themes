import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { Card, CardBody, CardHeader } from '../../card';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>TaskBoard Column</span>
                <div className="k-widget k-taskboard">
                    <div className="k-taskboard-header k-hidden"></div>
                    <div className="k-taskboard-content">
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-taskboard-pane k-taskboard-edit-pane k-hidden"></div>
                </div>
            </section>

            <section>
                <span>TaskBoard Column Focused</span>
                <div className="k-widget k-taskboard">
                    <div className="k-taskboard-header k-hidden"></div>
                    <div className="k-taskboard-content">
                        <div className="k-taskboard-columns-container">
                            <div className="k-taskboard-column k-focus">
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
                    <div className="k-taskboard-pane k-taskboard-edit-pane k-hidden"></div>
                </div>
            </section>

            <section>
                <span>TaskBoard Column Edit</span>
                <div className="k-widget k-taskboard">
                    <div className="k-taskboard-header k-hidden"></div>
                    <div className="k-taskboard-content">
                        <div className="k-taskboard-columns-container">
                            <div className="k-taskboard-column k-taskboard-column-edit">
                                <div className="k-taskboard-column-header">
                                    <div className="k-taskboard-column-header-text k-text-ellipsis">
                                        <Textbox placeholder="New column..." />
                                    </div>
                                    <span className="k-spacer"></span>
                                    <div className="k-taskboard-column-header-actions">
                                        <Button fillMode="flat" icon="edit"></Button>
                                        <Button fillMode="flat" icon="close"></Button>
                                        <Button fillMode="flat" icon="add"></Button>
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
            </section>

            <section>
                <span>TaskBoard Column New</span>
                <div className="k-widget k-taskboard">
                    <div className="k-taskboard-header k-hidden"></div>
                    <div className="k-taskboard-content">
                        <div className="k-taskboard-columns-container">
                            <div className="k-taskboard-column k-taskboard-column-new">
                                <div className="k-taskboard-column-header">
                                    <div className="k-taskboard-column-header-text k-text-ellipsis">
                                        <Textbox placeholder="New column..." />
                                    </div>
                                    <span className="k-spacer"></span>
                                    <div className="k-taskboard-column-header-actions">
                                        <Button fillMode="flat" icon="edit"></Button>
                                        <Button fillMode="flat" icon="close"></Button>
                                        <Button fillMode="flat" icon="add"></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="k-taskboard-pane k-taskboard-edit-pane k-hidden"></div>
                </div>
            </section>

            <section>
                <span>TaskBoard Column Title Overflow</span>
                <div className="k-widget k-taskboard">
                    <div className="k-taskboard-header k-hidden"></div>
                    <div className="k-taskboard-content">
                        <div className="k-taskboard-columns-container">
                            <div className="k-taskboard-column k-focus">
                                <div className="k-taskboard-column-header">
                                    <div className="k-taskboard-column-header-text k-text-ellipsis">Column with a very very very very very very very very long title</div>
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
                    <div className="k-taskboard-pane k-taskboard-edit-pane k-hidden"></div>
                </div>
            </section>

        </div>
    </>
);
