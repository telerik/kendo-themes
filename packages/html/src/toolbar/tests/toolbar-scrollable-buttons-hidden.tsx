import { ToolbarScrollable } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll Start</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="hidden" scrollingPosition="start"/>
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll End</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="hidden" scrollingPosition="end" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll Middle</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="hidden" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Hidden Buttons Scroll Middle RTL</span>
            <section className="k-colspan-all k-col-span-full" dir="rtl">
                <ToolbarScrollable scrollButtons="hidden" />
            </section>

        </div>
    </>
);
