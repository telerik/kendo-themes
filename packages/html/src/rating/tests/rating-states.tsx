import { Rating, RatingNormal } from '..';


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
                        <RatingNormal { ...{ [state]: true }} />
                    </section>
                </>
            ))}
        </div>
    </>
);
