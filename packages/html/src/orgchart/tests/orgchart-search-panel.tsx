import { Button } from '../../button';
import { Textbox } from '../../textbox';
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
        margin-top: calc(-1.4285714286em + -44px);
        border-width: 1px;
        border-style: solid;
        border-radius: 0;
        z-index: 10;
        cursor: default;
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
            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar}>
                <div className="k-search-panel k-pos-sticky k-top-center">
                    <Button fillMode="flat" icon="handle-drag" className="k-search-dialog-draghandle"></Button>
                    <Textbox
                        suffix={
                            <Button fillMode="flat" className="k-match-case-button" icon="convert-lowercase"></Button>
                        }
                    />
                    <span className="k-search-matches">
                        <span>0</span> of <span>1</span>
                    </span>
                    <Button fillMode="flat" icon="arrow-up"></Button>
                    <Button fillMode="flat" icon="arrow-down"></Button>
                    <Button fillMode="flat" icon="x"></Button>
                </div>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>
        </div>
    </>
);
