import { TaskBoard, TaskBoardCard, TaskBoardColumn } from "..";
import { CardHeader, CardBody } from "../../card";

export const TaskBoardNormal = (props) =>
    <TaskBoard children={
        <>
            <TaskBoardColumn>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
            </TaskBoardColumn>
            <TaskBoardColumn>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
            </TaskBoardColumn>
            <TaskBoardColumn>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
            </TaskBoardColumn>
        </>
    }
    {...props} />
;
