import { Orgchart, OrgchartGroup, OrgchartNode } from "..";

export const OrgchartVertical = ({ justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                orientation="vertical"
                justifyContent={justifyContent}
            >
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" lineBottom></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" lineBottom></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
            </OrgchartGroup>
        }
        {...other}
    />
);
