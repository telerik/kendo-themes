import { TaskBoardNormal, TaskBoardPane } from '..';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { FormField, FormNormal } from '../../form';
import { Textbox } from '../../textbox';

const style = `
    #test-area { max-width: 1037px; }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-dgrid k-grid-cols-1">

            <span>Create pane:</span>
            <TaskBoardNormal pane={
                <TaskBoardPane title="Create new card" paneHeaderId="create-header" actions={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Create</Button>
                    </>
                }>
                    <FormNormal tag="div" formButtons={null} role="form" aria-labelledby="create-header">
                        <FormField label="Title" editorId="create-title" editor={<Textbox id="create-title" value="Card Title" showClearButton={false} />} />
                        <FormField label="Description" editorId="create-description" editor={<Textbox id="create-description" value="Card Description" showClearButton={false} />} />
                        <FormField label="Priority" editorId="create-priority" editor={<DropdownList id="create-priority" value="Low Priority" aria-labelledby="create-priority-label" />} />
                    </FormNormal>
                </TaskBoardPane>
            } />

            <span>Edit pane (start position):</span>
            <TaskBoardNormal panePosition="start" pane={
                <TaskBoardPane className="k-taskboard-pane-start" title="Edit Card Title" paneHeaderId="edit-header" actions={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Save changes</Button>
                    </>
                }>
                    <FormNormal tag="div" formButtons={null} role="form" aria-labelledby="edit-header">
                        <FormField label="Title" editorId="edit-title" editor={<Textbox id="edit-title" value="Card Title" showClearButton={false} />} />
                        <FormField label="Description" editorId="edit-description" editor={<Textbox id="edit-description" value="Card Description" showClearButton={false} />} />
                        <FormField label="Priority" editorId="edit-priority" editor={<DropdownList id="edit-priority" value="Low Priority" aria-labelledby="edit-priority-label" />} />
                    </FormNormal>
                </TaskBoardPane>
            } />

        </div>
    </>
);
