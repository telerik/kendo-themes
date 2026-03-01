import { Orgchart, OrgchartGroup, OrgchartNode } from "..";
import { nextId } from "../../misc";

export const OrgchartNormal = ({ details, justifyContent, ...other }: any) => {
    const childGroupId = nextId('orgchart-group');
    return (
        <Orgchart
            children={
                <OrgchartGroup
                    level={1}
                    justifyContent={justifyContent}
                    nodes={
                        <>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ariaLevel={1} menuButton focus ariaExpanded ariaOwns={childGroupId}></OrgchartNode>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ariaLevel={1} menuButton></OrgchartNode>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details={details} avatar="DK" avatarType="text" color="#0275d8" lineBottom button ariaLevel={1} menuButton></OrgchartNode>
                        </>
                    }
                >
                    <OrgchartGroup id={childGroupId} nodes={
                        <OrgchartNode title="Child Node" subtitle="Child Subtitle" details={details} avatar="DK" avatarType="text" color="#5bc0de" ariaLevel={2} menuButton></OrgchartNode>
                    } />
                </OrgchartGroup>
            }
            {...other}
        />
    );
};
