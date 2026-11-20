import { Button } from '../../button';
import { Card, CardBody, CardHeader } from '../../card';
import TaskBoardCard from '../taskboard-card.spec';
import TaskBoardColumn from '../taskboard-column.spec';
import TaskBoard from '../taskboard.spec';


const style = `
    .drag-section {
        position: relative;
    }

    .drag-section > .k-taskboard-card {
        position: absolute;
        top: 840px;
        left: 120px;
        width: 300px;
        z-index: 10;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area">

            <span>TaskBoard Cards</span>
            <section className="drag-section">
                <TaskBoard style={{ width: "692px" }}>
                    <TaskBoardColumn>
                        {[ "normal", ...Card.states ].map((state) => (
                            <TaskBoardCard {...{ [state]: true }}>
                                <CardHeader className="k-hbox">
                                    <a className="k-card-title k-link">{state} card</a>
                                    <span className="k-spacer"></span>
                                    <span className="k-card-header-actions">
                                        <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" disabled={state === "disabled"} />
                                    </span>
                                </CardHeader>
                                <CardBody>
                                    <p>{state} card body</p>
                                </CardBody>
                            </TaskBoardCard>
                        ))
                        }
                        <div className="k-taskboard-drag-placeholder" style={{ height: "109px" }}></div>
                    </TaskBoardColumn>
                    <TaskBoardColumn>
                        <TaskBoardCard>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">normal card title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card body</p>
                            </CardBody>
                        </TaskBoardCard>
                        <TaskBoardCard hover>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link k-hover">hovered card title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card body</p>
                            </CardBody>
                        </TaskBoardCard>
                        <TaskBoardCard focus>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link k-focus">focused card title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card body</p>
                            </CardBody>
                        </TaskBoardCard>
                        <TaskBoardCard selected>
                            <CardHeader className="k-hbox">
                                <a className="k-card-title k-link">this is a very very very very very very very very very very very very very very very long card title</a>
                                <span className="k-spacer"></span>
                                <span className="k-card-header-actions">
                                    <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" aria-haspopup="menu" aria-expanded="false" />
                                </span>
                            </CardHeader>
                            <CardBody>
                                <p>Card body</p>
                            </CardBody>
                        </TaskBoardCard>
                    </TaskBoardColumn>
                </TaskBoard>
                <div className="k-taskboard-card k-card" aria-hidden="true">
                    <div className="k-hbox k-card-header">
                        <span className="k-card-title k-link">Dragged Card</span>
                    </div>
                    <div className="k-card-body">
                        <p>Card body</p>
                    </div>
                </div>
            </section>

        </div>
    </>
);
