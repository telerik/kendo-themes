import { Orgchart, OrgchartNode, OrgchartGroup, OrgchartNodeGroup } from "..";

export const OrgchartGroupVertical = ({ details, orientation, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                orientation={orientation}
                justifyContent={justifyContent}
            >
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                </OrgchartNodeGroup>
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical">
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                </OrgchartNodeGroup>
            </OrgchartGroup>
        }
        {...other}
    />
);

export default OrgchartGroupVertical;
