import { RatingItem, RatingNormal, RatingWithLabel } from '..';


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
            <span>Continuous Selection</span>
            <span>Single Selection</span>

            <span>Full Precision</span>
            <section>
                <RatingNormal dir="rtl">
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </RatingNormal>
            </section>
            <section>
                <RatingNormal dir="rtl">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </RatingNormal>
            </section>

            <span>Half Precision</span>
            <section>
                <RatingNormal dir="rtl" />
            </section>
            <section>
                <RatingNormal dir="rtl">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="split" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </RatingNormal>
            </section>

            <span>Full Precision Label</span>
            <section>
                <RatingWithLabel dir="rtl" label="2 / 5">
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </RatingWithLabel>
            </section>
            <section>
                <RatingWithLabel dir="rtl" label="2 / 5">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </RatingWithLabel>
            </section>

            <span>Half Precision Label</span>
            <section>
                <RatingWithLabel dir="rtl" />
            </section>
            <section>
                <RatingWithLabel dir="rtl" label=" 1.5 / 5">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="split" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </RatingWithLabel>
            </section>

            <span>Nested</span>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <RatingNormal dir="rtl">
                        <RatingItem dir="rtl" iconFill="solid" selected/>
                        <RatingItem dir="rtl" iconFill="solid" selected focus/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                    </RatingNormal>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <RatingNormal dir="rtl">
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="solid" selected focus/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                    </RatingNormal>
                </div>
            </section>
        </div>
    </>
);
