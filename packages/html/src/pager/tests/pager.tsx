import { Pager } from "../../pager/pager.spec";
import { PagerNormal } from "../../pager/templates/pager-normal";
import { PagerInput } from "../../pager/templates/pager-input";


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>LTR</span>
            {[ "normal", ...Pager.states ].map((state) => (
                <>
                    <section>
                        <PagerNormal { ...{ [state]: true }} />
                    </section>
                    <section>
                        <PagerInput { ...{ [state]: true }} />
                    </section>
                </>
            ))}


            <span>RTL</span>
            {[ "normal", ...Pager.states ].map((state) => (
                <>
                    <section>
                        <PagerNormal dir="rtl" { ...{ [state]: true }} />
                    </section>
                    <section>
                        <PagerInput dir="rtl" { ...{ [state]: true }} />
                    </section>
                </>
            ))}

        </div>
    </>
);
