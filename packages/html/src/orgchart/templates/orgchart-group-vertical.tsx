import { Orgchart } from '../orgchart.spec';
import { OrgchartNode } from '../orgchart-node';
import { OrgchartGroup } from '../orgchart-group';
import { OrgchartNodeGroup } from '../orgchart-node-group';

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
