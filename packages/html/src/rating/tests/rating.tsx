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
                <RatingNormal>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </RatingNormal>
            </section>
            <section>
                <RatingNormal>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </RatingNormal>
            </section>

            <span>Half Precision</span>
            <section>
                <RatingNormal />
            </section>
            <section>
                <RatingNormal>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="split" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </RatingNormal>
            </section>

            <span>Full Precision Label</span>
            <section>
                <RatingWithLabel label="2 / 5">
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </RatingWithLabel>
            </section>
            <section>
                <RatingWithLabel label="2 / 5">
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="solid" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </RatingWithLabel>
            </section>

            <span>Half Precision Label</span>
            <section>
                <RatingWithLabel />
            </section>
            <section>
                <RatingWithLabel label=" 1.5 / 5">
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="split" selected/>
                    <RatingItem iconFill="outline"/>
                    <RatingItem iconFill="outline"/>
                </RatingWithLabel>
            </section>

            <span>Nested</span>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <RatingNormal>
                        <RatingItem iconFill="solid" selected/>
                        <RatingItem iconFill="solid" selected focus/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                    </RatingNormal>
                </div>
            </section>
            <section>
                <div style={{ backgroundColor: "silver" }}>
                    <RatingNormal>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="solid" selected focus/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                        <RatingItem iconFill="outline"/>
                    </RatingNormal>
                </div>
            </section>
        </div>
    </>
);
