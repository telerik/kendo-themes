import { TaskBoardCard, TaskBoardColumn } from '../..';
import { CardBody, CardHeader } from '../../card';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>TaskBoard Resources</span>
            <TaskBoardColumn>
                <TaskBoardCard category style={{ borderLeftColor: "orange" }}>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
                <TaskBoardCard category style={{ borderLeftColor: "teal" }}>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Card Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Card Body</p>
                    </CardBody>
                </TaskBoardCard>
            </TaskBoardColumn>
        </div>
    </>
);
