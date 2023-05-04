import { Orgchart, OrgchartGroup, OrgchartNode } from '../../orgchart';


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
                <Orgchart width="100%" height="285px" orientation="horizontal" justifyContent="around">
                    <OrgchartGroup title="Group Title" subtitle="Group SubTitle" line plus orientation="horizontal">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                    </OrgchartGroup>
                    <OrgchartGroup title="Group Title" subtitle="Group SubTitle" line plus orientation="horizontal">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                    </OrgchartGroup>
                </Orgchart>
            </section>

            <span>Vertical</span>
            <section>
                <Orgchart width="100%" height="435px" orientation="horizontal" justifyContent="around">
                    <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    </OrgchartGroup>
                    <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    </OrgchartGroup>
                </Orgchart>
            </section>

        </div>
    </>
);
