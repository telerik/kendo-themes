import { TaskBoardNormal } from '..';
import { Button } from '../../button';
import { CardBody, CardHeader } from '../../card';
import { Searchbox } from '../../searchbox';
import TaskBoardCard from '../taskboard-card.spec';
import TaskBoardColumn from '../taskboard-column.spec';
import { TaskBoardToolbar } from '../taskboard-toolbar';
import TaskBoard from '../taskboard.spec';


const style = `
    #test-area {
        max-width: 1030px;
        padding: 5px;
    }

    #test-area > span {
        padding: 20px 20px 0;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>TaskBoard</span>
            <TaskBoardNormal />

            <span>Empty board</span>
            <TaskBoard style={{ height: "300px" }}>
                <TaskBoardColumn title="To Do" />
                <TaskBoardColumn title="In Progress" />
                <TaskBoardColumn title="Done" />
            </TaskBoard>

            <span>Search with matching cards</span>
            <TaskBoard toolbar={
                <TaskBoardToolbar>
                    <Button icon="plus">Add Column</Button>
                    <span className="k-spacer"></span>
                    <Searchbox placeholder="Search..." aria-label="Search" value="Card" focus />
                </TaskBoardToolbar>
            }>
                <TaskBoardColumn title="To Do">
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
                <TaskBoardColumn title="In Progress" />
                <TaskBoardColumn title="Done" />
            </TaskBoard>

            <span>Search with no results</span>
            <TaskBoard style={{ height: "300px" }} toolbar={
                <TaskBoardToolbar>
                    <Button icon="plus">Add Column</Button>
                    <span className="k-spacer"></span>
                    <Searchbox placeholder="Search..." aria-label="Search" value="November" focus />
                </TaskBoardToolbar>
            }>
                <TaskBoardColumn title="To Do" />
                <TaskBoardColumn title="In Progress" />
                <TaskBoardColumn title="Done" />
            </TaskBoard>

        </div>
    </>
);
