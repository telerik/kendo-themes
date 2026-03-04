import { TaskBoard, TaskBoardCard, TaskBoardColumn } from "..";
import { CardHeader, CardBody } from "../../card";

export const TaskBoardWithPane = (props) =>
    <TaskBoard pane children={
        <>
            <TaskBoardColumn>
                <TaskBoardCard menuButton>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link">Card Title</a>
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
