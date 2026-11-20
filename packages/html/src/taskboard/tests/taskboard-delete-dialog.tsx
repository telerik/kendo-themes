import { TaskBoardNormal } from '..';
import { Button } from '../../button';
import { Dialog } from '../../dialog';

const style = `
    #test-area {
        max-width: 1030px;
        padding: 5px;
    }

    #test-area > span {
        padding: 20px 20px 0;
    }

    section {
        position: relative;
        transform: translate( 0, 0 );
    }

    .k-dialog {
        width: 320px;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Delete card confirmation</span>
            <section>
                <TaskBoardNormal />
                <Dialog title="Delete Card" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Delete</Button>
                    </>
                }>
                    Are you sure you want to delete this card?
                </Dialog>
            </section>

            <span>Delete column confirmation</span>
            <section>
                <TaskBoardNormal />
                <Dialog title="Delete Column" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Delete</Button>
                    </>
                }>
                    Are you sure you want to delete this column?
                </Dialog>
            </section>

        </div>
    </>
);
