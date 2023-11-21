import { Rating, RatingItem } from '..';


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

            {[ "normal", ...RatingItem.states ].map((state)=>(
                <>
                    <div>{state}</div>
                    <section>
                        <Rating>
                            <RatingItem { ...{ [state]: true }} iconFill="solid"/>
                            <RatingItem { ...{ [state]: true }} iconFill="split"/>
                            <RatingItem { ...{ [state]: true }} iconFill="outline"/>
                        </Rating>
                    </section>
                </>
            ))}

            <div>hover selected</div>
            <section>
                <Rating>
                    <RatingItem hover selected iconFill="solid"/>
                    <RatingItem hover selected iconFill="split"/>
                    <RatingItem hover selected iconFill="outline"/>
                </Rating>
            </section>
        </div>
    </>
);
