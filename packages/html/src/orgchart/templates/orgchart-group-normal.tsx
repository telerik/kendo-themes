import { Orgchart } from '../orgchart.spec';
import { OrgchartNode } from '../orgchart-node';
import { OrgchartGroup } from '../orgchart-group';
import { OrgchartNodeGroup } from '../orgchart-node-group';

export const OrgchartGroupNormal = ({ details, orientation, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                orientation={orientation}
                justifyContent={justifyContent}
            >
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" lineBottom button>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                </OrgchartNodeGroup>
                <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" lineBottom button>
                    <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8"></OrgchartNode>
                </OrgchartNodeGroup>
            </OrgchartGroup>
        }
        {...other}
    />
);
