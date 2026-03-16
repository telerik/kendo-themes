import { TaskBoard, TaskBoardCard, TaskBoardColumn } from "..";
import { Button } from "../../button";
import { CardHeader, CardBody } from "../../card";

export const TaskBoardWithPane = (props) =>
    <TaskBoard pane children={
        <>
            <TaskBoardColumn>
                <TaskBoardCard>
                    <CardHeader className="k-hbox">
                        <a className="k-card-title k-link">Card Title</a>
                        <span className="k-spacer"></span>
                        <span className="k-card-header-actions">
                            <Button className="k-taskboard-card-menu-button" icon="more-vertical" fillMode="flat" aria-label="Card menu" title="Card menu" />
                        </span>
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
