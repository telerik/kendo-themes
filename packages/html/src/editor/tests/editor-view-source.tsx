import { WindowNormal } from '../../window/templates/window-normal';
import { Textarea } from '../../textarea/textarea.spec';
import { Button } from '../../button/button.spec';


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
                    <Textarea flow="horizontal" resize="none" className="k-editor-textarea"></Textarea>
                </WindowNormal>
            </section>
        </div>
    </>
);
