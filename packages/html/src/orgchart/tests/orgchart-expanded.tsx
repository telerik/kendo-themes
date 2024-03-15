import { OrgchartVertical, OrgchartNode, OrgchartGroupVertical, OrgchartGroup, OrgchartNodeGroup } from '..';


const styles = `
    #test-area {
        max-width: 1100px;
    }

    .k-orgchart {
        height: 700px;
    }

    .k-orgchart-group {
        position: unset;
    }

`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>normal</span>
            <span>group</span>

            <section>
                <OrgchartVertical width="100%" height="366px">
                    <OrgchartGroup orientation="vertical" justifyContent="center">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de" lineBottom button buttonIcon="minus"></OrgchartNode>
                    </OrgchartGroup>
                    <OrgchartGroup orientation="vertical" justifyContent="around">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de" lineTop lineBottom button buttonIcon="minus"></OrgchartNode>
                    </OrgchartGroup>
                    <OrgchartGroup orientation="vertical" justifyContent="around">
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de" lineTop lineBottom button></OrgchartNode>
                    </OrgchartGroup>
                </OrgchartVertical>
            </section>

            <section>
                <OrgchartGroupVertical width="100%">
                    <OrgchartGroup justifyContent="center">
                        <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical" lineBottom button buttonIcon="minus">
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        </OrgchartNodeGroup>
                    </OrgchartGroup>
                    <OrgchartGroup justifyContent="around">
                        <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical" lineTop lineBottom button>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        </OrgchartNodeGroup>
                    </OrgchartGroup>
                </OrgchartGroupVertical>
            </section>

        </div>
    </>
);
