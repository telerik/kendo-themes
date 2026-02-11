import { Orgchart } from '../orgchart.spec';
import { OrgchartGroup } from '../orgchart-group';
import { OrgchartNode } from '../orgchart-node';

export const OrgchartNormal = ({ details, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                justifyContent={justifyContent}
                nodes={
                    <>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button></OrgchartNode>
                    </>
                }
            />
        }
        {...other}
    />
);
