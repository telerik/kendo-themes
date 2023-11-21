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
            <span>Continuous Selection</span>
            <span>Single Selection</span>

            <span>Full Precision</span>
            <section>
                <Rating>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>

            <span>Half Precision</span>
            <section>
                <Rating>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="split" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="split" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>

            <span>Full Precision Label</span>
            <section>
                <Rating label="2 / 5">
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating label="2 / 5">
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>

            <span>Half Precision Label</span>
            <section>
                <Rating label="2.5 / 5">
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="split" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>
            <section>
                <Rating label=" 1.5 / 5">
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="split" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </Rating>
            </section>

            <span>Nested</span>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <Rating>
                        <RatingItem iconFill="solid" selected/>
                        <RatingItem iconFill="solid" selected focus/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                    </Rating>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <Rating>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="solid" selected focus/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                    </Rating>
                </div>
            </section>
        </div>
    </>
);
