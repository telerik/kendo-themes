import { Window, WindowNormal } from '..';

const style = `
    .k-window {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            {[ undefined ,...Window.options.themeColor ].map((color) => (
                <section>
                    <WindowNormal themeColor={color}>Window with {color ? color : "no"} theme color</WindowNormal>
                </section>
            ))}
        </div>
    </>
);
