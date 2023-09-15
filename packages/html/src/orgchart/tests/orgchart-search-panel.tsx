import { Button } from '../../button';
import { Orgchart, OrgchartNode, OrgchartToolbar } from '../../orgchart';

const styles = `
    .k-orgchart-pages {
        border: 1px solid red;
    }

    .k-search-panel {
        border-color: rgba(0, 0, 0, 0.08);
        color: #424242;
        background-color: #ffffff;
        box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.06);

        width: max-content;
        margin-top: calc(-1.4285714286em);
        border-width: 1px;
        border-style: solid;
        border-radius: 0;
        z-index: 10;
        cursor: default;

        padding-block: 16px;
        padding-inline: 8px;
        display: flex;
        gap: 8px;
        flex-flow: row nowrap;
        flex: 0 0 auto;
        justify-content: flex-start;
        align-items: center;
        
    }
    }
`;

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
            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar} orgChartSearchPanel={true}>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>

            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar}>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>
        </div>
    </>
);
