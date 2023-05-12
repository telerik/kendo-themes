import { Orgchart, OrgchartNode } from '../../orgchart';


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
                <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center">
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                </Orgchart>
            </section>

            <span>Vertical</span>
            <section>
                <Orgchart width="100%" height="366px" orientation="vertical" justifyContent="center">
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                </Orgchart>
            </section>

        </div>
    </>
);
