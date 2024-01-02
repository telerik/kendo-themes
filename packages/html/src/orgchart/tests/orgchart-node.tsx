import { OrgchartVertical, OrgchartNormal } from '../../orgchart';


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
                <OrgchartNormal width="100%" height="260px" justifyContent="center"/>
            </section>

            <span>Vertical</span>
            <section>
                <OrgchartVertical width="100%" height="366px" justifyContent="center"/>
            </section>

        </div>
    </>
);
