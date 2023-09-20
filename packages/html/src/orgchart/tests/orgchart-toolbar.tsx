import { Orgchart, OrgchartNode, OrgchartToolbar } from '../../orgchart';
import { Button } from '../../button';
import { IconMenuButton } from '../../menu-button';

const styles = `
    #test-area {
        max-width: 1100px;
    }
`;

function MyCustomToolbar(props) {
    return (
        <OrgchartToolbar {...props}>
            <IconMenuButton showArrow={false} icon="download" fillMode="flat"></IconMenuButton>
            <Button icon="search" fillMode="flat"></Button>
        </OrgchartToolbar>
    );
}


export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1" >
            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar}>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>

            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center">
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>
        </div>
    </>
);
