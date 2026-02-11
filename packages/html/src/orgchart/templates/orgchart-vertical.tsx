import { Orgchart } from '../orgchart.spec';
import { OrgchartGroup } from '../orgchart-group';
import { OrgchartNode } from '../orgchart-node';

export const OrgchartVertical = ({ details, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                orientation="vertical"
                justifyContent={justifyContent}
                nodes={
                    <>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" lineBottom></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" lineBottom></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                    </>
                }
            />
        }
        {...other}
    />
);
