import { Orgchart, OrgchartNode, OrgchartGroup, OrgchartNodeGroup } from "..";

export const OrgchartGroupNormal = ({ orientation, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                orientation={orientation}
                justifyContent={justifyContent}
            >
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" lineBottom button>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                </OrgchartNodeGroup>
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" lineBottom button>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                </OrgchartNodeGroup>
            </OrgchartGroup>
        }
        {...other}
    />
);
