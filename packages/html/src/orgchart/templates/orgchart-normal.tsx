import { Orgchart, OrgchartNode } from "..";

export const OrgchartNormal = (props) => (
    <Orgchart
        children={[
            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line button></OrgchartNode>,
            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line button buttonIcon="minus"></OrgchartNode>,
            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line button></OrgchartNode>
        ]}
        {...props}
    />
);
