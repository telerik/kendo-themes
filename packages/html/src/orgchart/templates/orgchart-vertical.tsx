import { Orgchart, OrgchartNode } from "..";

export const OrgchartVertical = (props) => (
    <Orgchart
        orientation="vertical"
        children={[
            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>,
            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>,
            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
        ]}
        {...props}>
    </Orgchart>
);
