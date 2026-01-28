import { Window } from '..';
import { Button } from '../../button';

const style = `
    .k-window {
        position: relative;
    }
    .k-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10000;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Modal Window" actions={[ "x" ]} modal={true}>
                    <p>This is a modal window with overlay.</p>
                </Window>
            </section>

            <section>
                <Window
                    title="Confirm Action"
                    actions={[ "x" ]}
                    modal={true}
                    actionButtons={
                        <>
                            <Button>Cancel</Button>
                            <Button themeColor="primary">OK</Button>
                        </>
                    }
                    actionButtonsAlign="end"
                >
                    <p>Are you sure you want to proceed?</p>
                </Window>
            </section>
        </div>
    </>
);
