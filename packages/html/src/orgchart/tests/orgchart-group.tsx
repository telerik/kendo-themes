import { OrgchartGroupNormal, OrgchartGroupVertical } from '../../orgchart';


const styles = `
    #test-area {
        max-width: 1100px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Horizontal</span>
            <section>
                <OrgchartGroupNormal width="100%" height="285px" justifyContent="around"/>
            </section>

            <span>Vertical</span>
            <section>
                <OrgchartGroupVertical width="100%" height="435px" justifyContent="around" />
            </section>

        </div>
    </>
);
