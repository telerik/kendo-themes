import { Orgchart, OrgchartGroup, OrgchartNode } from "..";

export const OrgchartImageAvatar = ({ details, justifyContent, ...other }: any) => (
    <Orgchart
        children={
            <OrgchartGroup
                level={1}
                justifyContent={justifyContent}
                nodes={
                    <>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="https://example.com/avatar.png" avatarType="image" avatarAlt="John Doe" color="#0275d8" ariaLevel={1} menuButton></OrgchartNode>
                        <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="https://example.com/avatar2.png" avatarType="image" avatarAlt="Jane Smith" color="#0275d8" ariaLevel={1} menuButton></OrgchartNode>
                    </>
                }
            />
        }
        {...other}
    />
);
