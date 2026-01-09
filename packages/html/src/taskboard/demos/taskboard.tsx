import { TaskBoard, KendoTaskBoardProps } from '../taskboard.spec';
import { TaskBoardCard } from '../taskboard-card';
import { TaskBoardColumn } from '../taskboard-column';
import { TaskBoardNormal } from '../templates/taskboard-normal';
import { CardBody, CardHeader } from '../../card';

const options = TaskBoard.options;
const states = TaskBoard.states;
const defaults = {
  ...TaskBoard.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'pane-end',
        title: 'Pane End',
    },
    {
        name: 'pane-start',
        title: 'Pane Start',
    },
];
const modifiers = [];

export const TaskboardDemo = (props: KendoTaskBoardProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = { ...defaults, ...props };

    return (
        <TaskBoardNormal style={{ width: "568px" }} {...other}
            pane={variant === "pane-end" || variant === "pane-start" ? true : false}
            panePosition={variant === "pane-end" ? "end" : "start"}
        >
            <TaskBoardColumn style={{ width: "260px" }}>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Template Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    </CardBody>
                </TaskBoardCard>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Template Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    </CardBody>
                </TaskBoardCard>
            </TaskBoardColumn>
            <TaskBoardColumn style={{ width: "260px" }}>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Template Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    </CardBody>
                </TaskBoardCard>
                <TaskBoardCard>
                    <CardHeader className="k-hbox" details>
                        <a className="k-card-title k-link" href="#">Template Title</a>
                        <span className="k-spacer"></span>
                    </CardHeader>
                    <CardBody>
                        <p>Some quick example text to build on the card title and make up the bulk of the card content.</p>
                    </CardBody>
                </TaskBoardCard>
            </TaskBoardColumn>
        </TaskBoardNormal>
    );
}


TaskboardDemo.options = options;
TaskboardDemo.states = states;
TaskboardDemo.variants = variants;
TaskboardDemo.defaultOptions = defaults;
TaskboardDemo.modifiers = modifiers;

export default TaskboardDemo;

