import { Orgchart, OrgchartGroup, OrgchartNode } from "..";

export const OrgchartVertical = ({ details, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                orientation="vertical"
                justifyContent={justifyContent}
            >
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" lineBottom></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" lineBottom></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
            </OrgchartGroup>
        }
        {...other}
    />
);

export default OrgchartVertical;
