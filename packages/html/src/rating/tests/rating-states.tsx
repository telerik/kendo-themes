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
            <span>Rating states</span>

            {[ "normal", ...Rating.states ].map((state)=>(
                <>
                    <div>{state}</div>
                    <section>
                        <Rating { ...{ [state]: true }}>
                            <RatingItem iconFill="solid"/>
                            <RatingItem iconFill="solid"/>
                            <RatingItem iconFill="split"/>
                            <RatingItem iconFill="outline"/>
                            <RatingItem iconFill="outline"/>
                        </Rating>
                    </section>
                </>
            ))}
        </div>
    </>
);
