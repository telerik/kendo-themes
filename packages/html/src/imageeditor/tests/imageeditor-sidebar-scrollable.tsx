import { ImageEditor } from '..';
import { Button } from '../../button';

const sidebarItems = [
    <Button fillMode="flat" key="sidebar-button-1" icon="image-resize" aria-label="Resize" />,
    <Button fillMode="flat" key="sidebar-button-2" icon="crop" aria-label="Crop" />,
    <Button fillMode="flat" key="sidebar-button-3" icon="rotate" aria-label="Rotate" />,
    <div className="k-separator" key="sidebar-separator-1" />,
    <Button fillMode="flat" key="sidebar-button-4" icon="free-text" aria-label="Text" />,
    <Button fillMode="flat" key="sidebar-button-5" icon="shapes" aria-label="Shapes" />,
    <Button fillMode="flat" key="sidebar-button-6" icon="drop-half-pixelated" aria-label="Blur" />,
    <Button fillMode="flat" key="sidebar-button-7" icon="sliders-horizontal" aria-label="Adjustments" />,
    <Button fillMode="flat" key="sidebar-button-8" icon="circles-three-intersecting" aria-label="Filters" />,
    <div className="k-separator" key="sidebar-separator-2" />,
    <Button fillMode="flat" key="sidebar-button-9" icon="frame-corners" aria-label="Frame" />,
    <Button fillMode="flat" key="sidebar-button-10" icon="circle-half-tilted" aria-label="Shadow" />,
    <Button fillMode="flat" key="sidebar-button-11" icon="image-resize" aria-label="Resize 2" />,
    <Button fillMode="flat" key="sidebar-button-12" icon="crop" aria-label="Crop 2" />,
    <Button fillMode="flat" key="sidebar-button-13" icon="rotate" aria-label="Rotate 2" />,
];

const styles = `
    .k-imageeditor {
        width: 500px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1" style={{ gap: '40px' }}>

            <div>
                <h3>Vertical Scrollable Sidebar (Scroll Start)</h3>
                <ImageEditor
                    sidebarItems={sidebarItems}
                    sidebarScrollable
                    sidebarScrollingPosition="start"
                    contentHeight="300px"
                />
            </div>

            <div>
                <h3>Vertical Scrollable Sidebar (Scroll End)</h3>
                <ImageEditor
                    sidebarItems={sidebarItems}
                    sidebarScrollable
                    sidebarScrollingPosition="end"
                    contentHeight="300px"
                />
            </div>

            <div>
                <h3>Vertical Scrollable Sidebar (Scroll Both)</h3>
                <ImageEditor
                    sidebarItems={sidebarItems}
                    sidebarScrollable
                    sidebarScrollingPosition="both"
                    contentHeight="300px"
                />
            </div>

            <div>
                <h3>Horizontal Scrollable Sidebar - Adaptive (Scroll Start)</h3>
                <ImageEditor
                    adaptive
                    sidebarItems={sidebarItems}
                    sidebarScrollable
                    sidebarScrollingPosition="start"
                    contentHeight="300px"
                />
            </div>

            <div>
                <h3>Horizontal Scrollable Sidebar - Adaptive (Scroll End)</h3>
                <ImageEditor
                    adaptive
                    sidebarItems={sidebarItems}
                    sidebarScrollable
                    sidebarScrollingPosition="end"
                    contentHeight="300px"
                />
            </div>

            <div>
                <h3>Horizontal Scrollable Sidebar - Adaptive (Scroll Both)</h3>
                <ImageEditor
                    adaptive
                    sidebarItems={sidebarItems}
                    sidebarScrollable
                    sidebarScrollingPosition="both"
                    contentHeight="300px"
                />
            </div>
        </div>
    </>
);
