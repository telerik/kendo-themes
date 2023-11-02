import { WindowNormal } from '../../window';
import { Textarea } from '../../textarea';
import { Button } from '../../button';


const styles = `
    #test-area {
        width: 500px;
    }

    .k-window {
        width: 100%;
        height: 400px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <WindowNormal className="k-editor-window" title="View HTML" actions={[ 'x' ]} actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Update</Button>
                        <Button>Cancel</Button>
                    </>
                }>
                    <Textarea className="k-editor-textarea"></Textarea>
                </WindowNormal>
            </section>
        </div>
    </>
);
