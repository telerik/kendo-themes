import { ActionButtons } from '../../action-buttons';
import { Button } from '../../button';
import { Card, CardBody, CardHeader } from '../../card';
import { Searchbox } from '../../searchbox';
import { Textbox } from '../../textbox';
import { Toolbar } from '../../toolbar';
import { FormNormal , FormField } from '../../form';

const style = `
    #test-area { max-width: 1037px; }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-dgrid k-grid-cols-1">

            <span>Pane on Right(default):</span>
            <div className="k-widget k-taskboard">
                <div className="k-taskboard-header">
                    <div className="k-taskboard-header">
                        <Toolbar className="k-taskboard-toolbar">
                            <Button icon="plus">Add Column</Button>
                            <span className="k-spacer"></span>
                            <Searchbox placeholder="Search..." />
                        </Toolbar>
                    </div>
                </div>
                <div className="k-taskboard-content" style={{ marginRight: "304px" }}>
                    <div className="k-taskboard-columns-container">
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="pencil"></Button>
                                    <Button fillMode="flat" icon="plus"></Button>
                                    <Button fillMode="flat" icon="x"></Button>
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
                                    <Button fillMode="flat" icon="pencil"></Button>
                                    <Button fillMode="flat" icon="plus"></Button>
                                    <Button fillMode="flat" icon="x"></Button>
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
                                    <Button fillMode="flat" icon="pencil"></Button>
                                    <Button fillMode="flat" icon="plus"></Button>
                                    <Button fillMode="flat" icon="x"></Button>
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
                            <Button fillMode="flat" icon="x"></Button>
                        </div>
                    </div>
                    <div className="k-taskboard-pane-content">
                        <FormNormal formButtons={null}>
                            <FormField label="Textbox:" editor={ <Textbox /> } ></FormField>
                        </FormNormal>
                    </div>
                    <ActionButtons alignment="end" className="k-taskboard-pane-actions">
                        <Button icon="trash">Delete</Button>
                        <Button themeColor="primary" icon="pencil">Edit</Button>
                    </ActionButtons>
                </div>
            </div>

            <span>Pane on Left:</span>
            <div className="k-widget k-taskboard">
                <div className="k-taskboard-header">
                    <div className="k-taskboard-header">
                        <Toolbar className="k-taskboard-toolbar">
                            <Button icon="plus">Add Column</Button>
                            <span className="k-spacer"></span>
                            <Searchbox placeholder="Search..." />
                        </Toolbar>
                    </div>
                </div>
                <div className="k-taskboard-content" style={{ marginLeft: "304px" }}>
                    <div className="k-taskboard-columns-container">
                        <div className="k-taskboard-column">
                            <div className="k-taskboard-column-header">
                                <div className="k-taskboard-column-header-text k-text-ellipsis">Column Header</div>
                                <span className="k-spacer"></span>
                                <div className="k-taskboard-column-header-actions">
                                    <Button fillMode="flat" icon="pencil"></Button>
                                    <Button fillMode="flat" icon="plus"></Button>
                                    <Button fillMode="flat" icon="x"></Button>
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
                                    <Button fillMode="flat" icon="pencil"></Button>
                                    <Button fillMode="flat" icon="plus"></Button>
                                    <Button fillMode="flat" icon="x"></Button>
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
                                    <Button fillMode="flat" icon="pencil"></Button>
                                    <Button fillMode="flat" icon="plus"></Button>
                                    <Button fillMode="flat" icon="x"></Button>
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
                            <Button fillMode="flat" icon="x"></Button>
                        </div>
                    </div>
                    <div className="k-taskboard-pane-content">
                        <FormNormal formButtons={null}>
                            <FormField label="Textbox:" editor={ <Textbox /> } ></FormField>
                        </FormNormal>
                    </div>
                    <ActionButtons alignment="end" className="k-taskboard-pane-actions">
                        <Button icon="trash">Delete</Button>
                        <Button themeColor="primary" icon="pencil">Edit</Button>
                    </ActionButtons>
                </div>
            </div>

        </div>
    </>
);
