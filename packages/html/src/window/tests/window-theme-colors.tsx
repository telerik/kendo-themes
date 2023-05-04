import { Window } from '..';



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
                <Window title="Window" actions={[ 'window-minimize', 'window', 'x' ]}>Window with default theme color</Window>
            </section>

            <section>
                <Window themeColor="primary" title="Window" actions={[ 'window-minimize', 'window', 'x' ]}>Window with primary theme color</Window>
            </section>

            <section>
                <Window themeColor="dark" title="Window" actions={[ 'window-minimize', 'window', 'x' ]}>Window with dark theme color</Window>
            </section>

            <section>
                <Window themeColor="light" title="Window" actions={[ 'window-minimize', 'window', 'x' ]}>Window with light theme color</Window>
            </section>

        </div>
    </>
);
