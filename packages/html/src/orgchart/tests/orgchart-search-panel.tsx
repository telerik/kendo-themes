import { Button } from '../../button';
import { Orgchart, OrgchartNode, OrgchartToolbar } from '../../orgchart';

const styles = ``;

function MyCustomToolbar(props) {
    return (
        <OrgchartToolbar {...props}>
            <Button icon="search" fillMode="flat" selected></Button>
        </OrgchartToolbar>
    );
}

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <Orgchart orientation="vertical" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar} orgChartSearchPanel={true}>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>

            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar} orgChartSearchPanel={true}>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de" line></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#5bc0de"></OrgchartNode>
            </Orgchart>
        </div>
    </>
);
