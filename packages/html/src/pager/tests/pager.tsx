import { Pager } from '../../pager';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>LTR</span>
            <section>
                <Pager />
            </section>
            <section>
                <Pager type="input" focus />
            </section>
            <section>
                <Pager disabled />
            </section>


            <span>RTL</span>
            <section>
                <Pager dir="rtl" />
            </section>
            <section>
                <Pager type="input" focus dir="rtl" />
            </section>
            <section>
                <Pager disabled dir="rtl" />
            </section>

        </div>
    </>
);
