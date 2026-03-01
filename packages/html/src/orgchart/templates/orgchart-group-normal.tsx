import { Orgchart, OrgchartNode, OrgchartGroup, OrgchartNodeGroup } from "..";

export const OrgchartGroupNormal = ({ details, orientation, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                level={1}
                orientation={orientation}
                justifyContent={justifyContent}
            >
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" lineBottom button>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" ariaLevel={1} menuButton></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" ariaLevel={1} menuButton></OrgchartNode>
                </OrgchartNodeGroup>
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" lineBottom button>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" ariaLevel={1} menuButton></OrgchartNode>
                </OrgchartNodeGroup>
            </OrgchartGroup>
        }
        {...other}
    />
);
