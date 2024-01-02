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

            {[ "normal", ...RatingItem.states ].map((state)=>(
                <>
                    <div>{state}</div>
                    <section>
                        <RatingItem { ...{ [state]: true }} iconType="solid"/>
                    </section>
                </>
            ))}

            <div>hover selected</div>
            <section>
                <RatingItem hover selected iconType="solid"/>
            </section>
        </div>
    </>
);
