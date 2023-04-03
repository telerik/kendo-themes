import ReactDOM from 'react-dom/client';
import { Window } from '../../window';
import { Textarea } from '../../textarea';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <Window className="k-editor-window" title="View HTML" actions={[ 'close' ]} actionButtonsAlign="end" actionButtons={
                    <>
                        <Button>Cancel</Button>
                        <Button themeColor="primary">Update</Button>
                    </>
                }>
                    <Textarea className="k-editor-textarea"></Textarea>
                </Window>
            </section>
        </div>
    </>
);
