import { ToolbarScrollable } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Toolbar Buttons Around</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="around" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Buttons Start</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="start" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Buttons End</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="end" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar No Buttons Scroll Start</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="hidden" scrollingPosition="start"/>
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar No Buttons Scroll End</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="hidden" scrollingPosition="end" />
            </section>

            <span className="k-colspan-all k-col-span-full">RTL</span>
            <section className="k-colspan-all k-col-span-full" dir="rtl">
                <ToolbarScrollable />
            </section>

        </div>
    </>
);
