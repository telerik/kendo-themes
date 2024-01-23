import { TaskBoardNormal } from '..';

const style = `
    #test-area { max-width: 1037px; }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-dgrid k-grid-cols-1">

            <span>Pane on Right(default):</span>
            <TaskBoardNormal pane/>

            <span>Pane on Left:</span>
            <TaskBoardNormal pane panePosition="start" />

        </div>
    </>
);
