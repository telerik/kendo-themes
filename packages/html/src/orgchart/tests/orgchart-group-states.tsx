import { Orgchart, OrgchartGroup, OrgchartNode } from '../../orgchart';


const styles = `
    #test-area {
        max-width: 1100px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Default</span>
            <span>Focus</span>

            <section>
                <Orgchart width="100%" height="431px" justifyContent="around">
                    <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    </OrgchartGroup>
                </Orgchart>
            </section>

            <section>
                <Orgchart width="100%" height="431px" justifyContent="around">
                    <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical" focus>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    </OrgchartGroup>
                </Orgchart>
            </section>
        </div>
    </>
);
