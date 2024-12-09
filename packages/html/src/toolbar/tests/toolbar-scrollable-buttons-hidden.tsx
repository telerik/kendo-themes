import { ToolbarScrollableButtonsHidden } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll Start</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollableButtonsHidden />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll End</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollableButtonsHidden scrollingPosition="end" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll Middle</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollableButtonsHidden scrollingPosition={null} />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll Middle RTL</span>
            <section className="k-colspan-all k-col-span-full" dir="rtl">
                <ToolbarScrollableButtonsHidden scrollingPosition={null} />
            </section>

        </div>
    </>
);
