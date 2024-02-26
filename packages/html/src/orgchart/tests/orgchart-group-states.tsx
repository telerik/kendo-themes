import { OrgchartGroup, OrgchartGroupVertical, OrgchartNode, OrgchartNodeGroup } from '../../orgchart';


const styles = `
    #test-area {
        max-width: 1100px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            {[ "normal", ...OrgchartNodeGroup.states ].map((state) => (
                <section>
                    <span>{state}</span>
                    <OrgchartGroupVertical width="100%" height="431px">
                        <OrgchartGroup justifyContent="around">
                            <OrgchartNodeGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical" { ...{ [state]: true } }>
                                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                            </OrgchartNodeGroup>
                        </OrgchartGroup>
                    </OrgchartGroupVertical>
                </section>
            ))}
        </div>
    </>
);
