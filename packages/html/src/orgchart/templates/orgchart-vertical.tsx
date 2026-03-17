import { Orgchart, OrgchartGroup, OrgchartNode } from "..";

export const OrgchartVertical = ({ details, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                level={1}
                orientation="vertical"
                justifyContent={justifyContent}
                nodes={
                    <>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" lineBottom ariaLevel={1} menuButton></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" lineBottom ariaLevel={1} menuButton></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" ariaLevel={1} menuButton></OrgchartNode>
                    </>
                }
            />
        }
        {...other}
    />
);
