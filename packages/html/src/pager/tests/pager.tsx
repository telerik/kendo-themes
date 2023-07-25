import { Pager, PagerNormal, PagerInput } from "../../pager";


export default () =>(
    <>
        <div id="test-area" className="k-d-grid">

            <span>LTR</span>
            {[ 'normal', ...Pager.states ].map((state, index) => (
                index % 2 === 0 ?
                    <section>
                        <PagerNormal { ...{ [state]: true }} />
                    </section>
                    :
                    <section>
                        <PagerInput { ...{ [state]: true }} />
                    </section>
            ))}


            <span>RTL</span>
            {[ 'normal', ...Pager.states ].map((state, index) => (
                index % 2 === 0 ?
                    <section>
                        <PagerNormal dir="rtl" { ...{ [state]: true }} />
                    </section>
                    :
                    <section>
                        <PagerInput dir="rtl" { ...{ [state]: true }} />
                    </section>
            ))}

        </div>
    </>
);
