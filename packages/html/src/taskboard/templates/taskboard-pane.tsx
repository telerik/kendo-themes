import { TaskBoard, TaskBoardCard, TaskBoardColumn, TaskBoardPane } from "..";
import { Button } from "../../button";
import { CardHeader, CardBody } from "../../card";
import { DropdownList } from "../../dropdownlist";
import { FormField, FormNormal } from "../../form";
import { Textbox } from "../../textbox";

export const TaskBoardWithPane = (props) =>
    <TaskBoard pane={
        <TaskBoardPane title="Create new card" paneHeaderId="taskboard-pane-header" actions={
            <>
                <Button>Cancel</Button>
                <Button themeColor="primary">Create</Button>
            </>
        }>
            <FormNormal tag="div" formButtons={null} role="form" aria-labelledby="taskboard-pane-header">
                <FormField label="Title" editorId="taskboard-pane-title" editor={<Textbox id="taskboard-pane-title" value="Card Title" showClearButton={false} />} />
                <FormField label="Description" editorId="taskboard-pane-description" editor={<Textbox id="taskboard-pane-description" value="Card Description" showClearButton={false} />} />
                <FormField label="Priority" editorId="taskboard-pane-priority" editor={<DropdownList id="taskboard-pane-priority" value="Low Priority" aria-labelledby="taskboard-pane-priority-label" />} />
            </FormNormal>
        </TaskBoardPane>
    } children={
        <>
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
        </>
    }
    {...props} />
;
