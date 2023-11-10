import { Orgchart, OrgchartGroup, OrgchartNode } from '../../orgchart';


const styles = `
    #test-area {
        max-width: 1100px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            {[ "normal", ...OrgchartGroup.states ].map((state) => (
                <section>
                    <span>{state}</span>
                    <Orgchart width="100%" height="431px" justifyContent="around">
                        <OrgchartGroup title="Group Title" subtitle="Group SubTitle" orientation="vertical" { ...{ [state]: true } }>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                            <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                        </OrgchartGroup>
                    </Orgchart>
                </section>
            ))}
        </div>
    </>
);
