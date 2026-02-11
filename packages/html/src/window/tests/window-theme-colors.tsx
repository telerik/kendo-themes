import { Window } from '../window.spec';
import { WindowNormal } from '../templates/window-normal';

const style = `
    .k-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            {Window.options.themeColor.map((themeColor) => (
                <section>
                    <WindowNormal themeColor={themeColor}>Window with {`${themeColor}`} theme color</WindowNormal>
                </section>
            ))}
        </div>
    </>
);
