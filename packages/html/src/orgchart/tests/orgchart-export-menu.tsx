import { Orgchart, OrgchartNode, OrgchartToolbar } from '../../orgchart';
import { IconMenuButton } from '../../menu-button';
import { MenuList, MenuItem } from '../../menu';
import { Popup } from '../../popup';
import { Button } from '../../button';

const styles = `
    #test-area {
        max-width: 1100px;
    }
    
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
        top: -310px;
        left: 25px;
    }
`;

function MyCustomToolbar(props) {
    return (
        <OrgchartToolbar {...props}>
            <IconMenuButton showArrow={false} icon="download" fillMode="flat" focus></IconMenuButton>
            <Button icon="search" fillMode="flat"></Button>
        </OrgchartToolbar>
    );
}

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <Orgchart width="100%" height="260px" orientation="horizontal" justifyContent="center" showToolbar={true} Toolbar={MyCustomToolbar}>
                <OrgchartNode title="Card Title" subtitle="Card, Subtitle" details avatar="DK" avatarType="text" color="#0275d8" line plus></OrgchartNode>
            </Orgchart>

            <Popup className="k-orgchart-popup k-menu-popup">
                <MenuList>
                    <MenuItem text="Export as PNG"></MenuItem>
                    <MenuItem text="Export as SVG"></MenuItem>
                    <MenuItem text="Export as JPEG"></MenuItem>
                    <MenuItem text="Export as PDF"></MenuItem>
                </MenuList>
            </Popup>
        </div>
    </>
);
