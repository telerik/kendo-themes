import { Button } from '../../button';
import { CardBody, CardHeader } from '../../card';
import { Textbox } from '../../textbox';
import TaskBoardCard from '../taskboard-card';
import TaskBoardColumn from '../taskboard-column';
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

            <section>
                <TaskBoard>
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
                    <TaskBoardColumn edit header={
                        <>
                            <div className="k-taskboard-column-header-text k-text-ellipsis">
                                <Textbox placeholder="Edit column name..." />
                            </div>
                            <span className="k-spacer"></span>
                            <div className="k-taskboard-column-header-actions">
                                <Button fillMode="flat" icon="pencil"></Button>
                                <Button fillMode="flat" icon="x"></Button>
                                <Button fillMode="flat" icon="plus"></Button>
                            </div>
                        </>
                    }>
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
                    <TaskBoardColumn header={
                        <>
                            <div className="k-taskboard-column-header-text k-text-ellipsis">
                                <Textbox placeholder="New column..." />
                            </div>
                            <span className="k-spacer"></span>
                            <div className="k-taskboard-column-header-actions">
                                <Button fillMode="flat" icon="pencil"></Button>
                                <Button fillMode="flat" icon="x"></Button>
                                <Button fillMode="flat" icon="plus"></Button>
                            </div>
                        </>
                    }>
                    </TaskBoardColumn>
                </TaskBoard>
            </section>
            <section>
                <TaskBoard>
                    <TaskBoardColumn className="k-focus">
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
                    <TaskBoardColumn header={
                        <>
                            <div className="k-taskboard-column-header-text k-text-ellipsis">Column with a very very very very very very very very long title</div>
                            <span className="k-spacer"></span>
                            <div className="k-taskboard-column-header-actions">
                                <Button fillMode="flat" icon="pencil"></Button>
                                <Button fillMode="flat" icon="plus"></Button>
                                <Button fillMode="flat" icon="x"></Button>
                            </div>
                        </>
                    }>
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
                </TaskBoard>
            </section>

        </div>
    </>
);
