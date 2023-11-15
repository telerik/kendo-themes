import { Orgchart, OrgchartNode, OrgchartGroup } from "..";

export const OrgchartGroupNormal = (props) => (
    <Orgchart
        children={[
            <OrgchartGroup title="Group Title" subtitle="Group SubTitle" line button>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
            </OrgchartGroup>,
            <OrgchartGroup title="Group Title" subtitle="Group SubTitle" line button buttonIcon="minus">
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
            </OrgchartGroup>
        ]}
        {...props}
    />
);
