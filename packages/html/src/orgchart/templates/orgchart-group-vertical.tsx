import { Orgchart, OrgchartNode, OrgchartGroup } from "..";

export const OrgchartGroupVertical = (props) => (
    <Orgchart
        children={[
            <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
            </OrgchartGroup>,
            <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
            </OrgchartGroup>
        ]}
        {...props}
    />
);
