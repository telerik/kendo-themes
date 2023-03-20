import ReactDOM from 'react-dom/client';
import { Window } from '..';


const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-window {
        position: relative;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Window" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>Window with default theme color</Window>
            </section>

            <section>
                <Window themeColor="primary" title="Window" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>Window with primary theme color</Window>
            </section>

            <section>
                <Window themeColor="dark" title="Window" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>Window with dark theme color</Window>
            </section>

            <section>
                <Window themeColor="light" title="Window" actions={[ 'window-minimize', 'window-maximize', 'close' ]}>Window with light theme color</Window>
            </section>

        </div>
    </>
);
