import { Button } from '../../button';
import { CardBody, CardHeader } from '../../card';
import TaskBoardCard from '../taskboard-card.spec';
import TaskBoardColumn from '../taskboard-column.spec';
import TaskBoard from '../taskboard.spec';

const style = `
    #test-area {
        max-width: 1030px;
        padding: 5px;
    }

    #test-area > span {
        padding: 20px 20px 0;
    }

    .drag-section {
        position: relative;
    }

    .drag-section > .k-taskboard-column {
        position: absolute;
        top: 70px;
        left: 60px;
        z-index: 10;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Default, edit, and new column</span>
            <section>
                <TaskBoard>
                    <TaskBoardColumn>
                        <TaskBoardCard>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">Card Title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card Body</p>
                            </CardBody>
                        </TaskBoardCard>
                    </TaskBoardColumn>
                    <TaskBoardColumn edit title="Column Title">
                        <TaskBoardCard disabled>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">Card Title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" disabled />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card Body</p>
                            </CardBody>
                        </TaskBoardCard>
                    </TaskBoardColumn>
                    <TaskBoardColumn edit title="">
                    </TaskBoardColumn>
                </TaskBoard>
            </section>
            <span>Focused and long title column</span>
            <section>
                <TaskBoard>
                    <TaskBoardColumn className="k-focus">
                        <TaskBoardCard>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">Card Title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card Body</p>
                            </CardBody>
                        </TaskBoardCard>
                    </TaskBoardColumn>
                    <TaskBoardColumn title="Column with a very very very very very very very very long title">
                        <TaskBoardCard>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">Card Title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card Body</p>
                            </CardBody>
                        </TaskBoardCard>
                    </TaskBoardColumn>
                </TaskBoard>
            </section>
            <span>Dragging a column: drop placeholder and dragged column</span>
            <section className="drag-section">
                <TaskBoard>
                    <div className="k-taskboard-column k-taskboard-drag-placeholder"></div>
                    <TaskBoardColumn>
                        <TaskBoardCard>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">Card Title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card Body</p>
                            </CardBody>
                        </TaskBoardCard>
                    </TaskBoardColumn>
                </TaskBoard>
                <div className="k-taskboard-column" aria-hidden="true">
                    <div className="k-taskboard-column-header">
                        <div className="k-taskboard-column-header-text k-text-ellipsis">Dragged Column</div>
                        <span className="k-spacer"></span>
                        <div className="k-taskboard-column-header-actions">
                            <Button fillMode="flat" icon="pencil" tabIndex={-1}></Button>
                            <Button fillMode="flat" icon="plus" tabIndex={-1}></Button>
                            <Button fillMode="flat" icon="x" tabIndex={-1}></Button>
                        </div>
                    </div>
                    <div className="k-taskboard-column-cards-container">
                        <div className="k-taskboard-column-cards">
                            <div className="k-taskboard-card k-card">
                                <div className="k-hbox k-card-header">
                                    <span className="k-card-title k-link">Card Title</span>
                                </div>
                                <div className="k-card-body">
                                    <p>Card Body</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    </>
);
