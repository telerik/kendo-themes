import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { DropdownList } from '../../dropdownlist';
import { Toolbar, ToolbarSeparator } from '../../toolbar';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <h4>Image Editor</h4>
            <div className="k-widget k-imageeditor">

                {/* Header */}
                <div className="k-imageeditor-header">
                    <Toolbar className="k-imageeditor-toolbar">
                        <Button icon="upload"></Button>
                        <Button icon="download"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="undo"></Button>
                        <Button icon="redo"></Button>
                        <ToolbarSeparator></ToolbarSeparator>
                        <Button icon="crop"></Button>
                        <Button icon="image-resize"></Button>
                        <Button icon="zoom-in"></Button>
                        <Button icon="zoom-out"></Button>
                        <div>
                            <DropdownList value="Zoom options" />
                        </div>
                    </Toolbar>
                </div>

                {/* Content */}
                <div className="k-imageeditor-content" style={{ height: "250px" }}>
                    <div className="k-imageeditor-canvas-container">
                        <div className="k-imageeditor-canvas"></div>
                    </div>
                    <div className="k-imageeditor-action-pane" hidden></div>
                </div>
            </div>
        </div>
    </>
);
