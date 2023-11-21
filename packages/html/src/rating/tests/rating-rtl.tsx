import { Rating, RatingItem } from '..';


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
            <span>Continuous Selection RTL</span>
            <span>Single Selection RTL</span>

            <span>Full Precision</span>
            <section>
                <Rating dir="rtl">
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating dir="rtl">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>

            <span>Half Precision</span>
            <section>
                <Rating dir="rtl">
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="split" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating dir="rtl">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="split" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>

            <span>Full Precision Label</span>
            <section>
                <Rating dir="rtl" label="2 / 5">
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating dir="rtl" label="2 / 5">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>

            <span>Half Precision Label</span>
            <section>
                <Rating dir="rtl" label="2.5 / 5">
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="solid" selected/>
                    <RatingItem dir="rtl" iconFill="split" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating dir="rtl" label=" 1.5 / 5">
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="split" selected/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                    <RatingItem dir="rtl" iconFill="outline"/>
                </Rating>
            </section>

            <span>Nested</span>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <Rating dir="rtl">
                        <RatingItem dir="rtl" iconFill="solid" selected/>
                        <RatingItem dir="rtl" iconFill="solid" selected focus/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                    </Rating>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <Rating dir="rtl">
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="solid" selected focus/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                        <RatingItem dir="rtl" iconFill="outline"/>
                    </Rating>
                </div>
            </section>
        </div>
    </>
);
