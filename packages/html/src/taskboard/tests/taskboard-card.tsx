import { Card, CardBody, CardHeader } from '../../card';
import TaskBoardCard from '../taskboard-card';
import TaskBoardColumn from '../taskboard-column';
import TaskBoard from '../taskboard.spec';


export default () =>(
    <>
        <div id="test-area">

            <span>TaskBoard Cards</span>
            <TaskBoard style={{ width: "692px" }}>
                <TaskBoardColumn>
                    {[ "normal", ...Card.states ].map((state) => (
                        <TaskBoardCard {...{ [state]: true }}>
                            <CardHeader className="k-hbox" details>
                                <a className="k-card-title k-link">{state} card</a>
                                <span className="k-spacer"></span>
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
                        <CardHeader className="k-hbox" details>
                            <a className="k-card-title k-link">normal card title</a>
                            <span className="k-spacer"></span>
                        </CardHeader>
                        <CardBody>
                            <p>Card body</p>
                        </CardBody>
                    </TaskBoardCard>
                    <TaskBoardCard hover>
                        <CardHeader className="k-hbox" details>
                            <a className="k-card-title k-link k-hover">hovered card title</a>
                            <span className="k-spacer"></span>
                        </CardHeader>
                        <CardBody>
                            <p>Card body</p>
                        </CardBody>
                    </TaskBoardCard>
                    <TaskBoardCard focus>
                        <CardHeader className="k-hbox" details>
                            <a className="k-card-title k-link k-focus">focused card title</a>
                            <span className="k-spacer"></span>
                        </CardHeader>
                        <CardBody>
                            <p>Card body</p>
                        </CardBody>
                    </TaskBoardCard>
                    <TaskBoardCard selected>
                        <CardHeader className="k-hbox" details>
                            <a className="k-card-title k-link">this is a very very very very very very very very very very very very very very very long card title</a>
                            <span className="k-spacer"></span>
                        </CardHeader>
                        <CardBody>
                            <p>Card body</p>
                        </CardBody>
                    </TaskBoardCard>
                </TaskBoardColumn>
            </TaskBoard>

        </div>
    </>
);
