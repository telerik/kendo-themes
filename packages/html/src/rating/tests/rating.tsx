import { RatingNormal, RatingWithLabel } from '..';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(2, 1fr);
        alignItems: "center"
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>LTR</span>
            <span>RTL</span>

            <span>Full Precision</span>
            <section>
                <RatingNormal value={2} />
            </section>
            <section>
                <RatingNormal dir="rtl" value={2} />
            </section>

            <span>Half Precision</span>
            <section>
                <RatingNormal />
            </section>
            <section>
                <RatingNormal dir="rtl" />
            </section>

            <span>Full Precision Label</span>
            <section>
                <RatingWithLabel value={2} />
            </section>
            <section>
                <RatingWithLabel dir="rtl" value={2} />
            </section>

            <span>Half Precision Label</span>
            <section>
                <RatingWithLabel/>
            </section>
            <section>
                <RatingWithLabel dir="rtl"/>
            </section>

            <span>Custom max items</span>
            <section>
                <RatingWithLabel value={3.5} max={7} />
            </section>
            <section>
                <RatingWithLabel dir="rtl" value={3.5} max={7} />
            </section>

            <span>Nested</span>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <RatingNormal />
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <RatingNormal dir="rtl" />
                </div>
            </section>
        </div>
    </>
);
