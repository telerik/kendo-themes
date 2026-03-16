import { Orgchart, OrgchartGroup, OrgchartNode } from "..";

export const OrgchartNormal = ({ details, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                level={1}
                justifyContent={justifyContent}
                nodes={
                    <>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ariaLevel={1} menuButton></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ariaLevel={1} menuButton></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ariaLevel={1} menuButton></OrgchartNode>
                    </>
                }
            />
        }
        {...other}
    />
);
