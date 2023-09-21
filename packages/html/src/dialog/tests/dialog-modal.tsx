import { Button } from '../../button';
import { DialogModal } from '../../dialog';


const styles = `
    #test-area {
        width: 500px;
        height: 400px;
        transform: translate( 0, 0 );
    }
    .k-dialog {
        width: 300px;
        height: 200px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-grid-cols-1">
            <DialogModal title="Title" actions={[ 'x' ]} actionButtonsAlign="end" actionButtons={
                <>
                    <Button>Action</Button>
                    <Button themeColor="primary">Primary</Button>
                </>
            }>
                Dialog content template
            </DialogModal>
        </div>
    </>
);
