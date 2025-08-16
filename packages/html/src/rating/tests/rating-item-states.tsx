import { RatingItem } from '..';


const styles = `
    #test-area {
        grid-template-columns: 120px 1fr;
        max-width: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Rating item states</span>

            <div>normal</div>
            <section>
                <RatingItem iconType="outline"/>
            </section>
            <div>hover</div>
            <section>
                <RatingItem hover iconType="solid"/>
            </section>
            <div>focus</div>
            <section>
                <RatingItem focus iconType="outline"/>
            </section>
            <div>selected</div>
            <section>
                <RatingItem selected iconType="solid"/>
            </section>
            <div>hover selected</div>
            <section>
                <RatingItem hover selected iconType="solid"/>
            </section>
            <div>focus selected</div>
            <section>
                <RatingItem focus selected iconType="solid"/>
            </section>
        </div>
    </>
);
