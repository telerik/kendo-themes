import { Button } from '../../button';
import { CardBody, CardHeader } from '../../card';
import TaskBoardCard from '../taskboard-card.spec';
import TaskBoardColumn from '../taskboard-column.spec';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>TaskBoard Resources</span>
            <TaskBoardColumn>
                <TaskBoardCard category style={{ borderLeftColor: "orange" }}>
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
                <TaskBoardCard category style={{ borderLeftColor: "teal" }}>
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
        </div>
    </>
);
