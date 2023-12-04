import { Orgchart, OrgchartGroup, OrgchartNode } from "..";

export const OrgchartNormal = ({ justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                justifyContent={justifyContent}
            >
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" lineBottom button></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" lineBottom button ></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" lineBottom button></OrgchartNode>
            </OrgchartGroup>
        }
        {...other}
    />
);
