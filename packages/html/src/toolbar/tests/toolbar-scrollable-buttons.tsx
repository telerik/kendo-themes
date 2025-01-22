import { ToolbarScrollable } from '..';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span className="k-colspan-all k-col-span-full">Toolbar Buttons Around</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Buttons Start</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="start" />
            </section>

            <span className="k-colspan-all k-col-span-full">Toolbar Buttons End</span>
            <section className="k-colspan-all k-col-span-full">
                <ToolbarScrollable scrollButtons="end" />
            </section>
        </div>
    </>
);
