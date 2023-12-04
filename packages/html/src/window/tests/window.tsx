import { WindowNormal } from '..';

const style = `
    .k-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <WindowNormal>Window content</WindowNormal>
            </section>

            <section>
                <WindowNormal title="">Window with no title specified</WindowNormal>
            </section>

            <section>
                <WindowNormal title="" actions={undefined}>Window with empty title and no actions</WindowNormal>
            </section>

            <section>
                <WindowNormal title={undefined} actions={undefined}>Window without a title</WindowNormal>
            </section>

            <section>
                <WindowNormal title="Window minimized" minimized>Window content</WindowNormal>
            </section>
        </div>
    </>
);
