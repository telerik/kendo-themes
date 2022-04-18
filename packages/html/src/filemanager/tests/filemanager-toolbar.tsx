import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Searchbox } from '../../searchbox';
import { SplitButton } from '../../split-button';
import { Switch } from '../../switch';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Full toolbar</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <div className="k-filemanager-toolbar k-toolbar k-widget">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                        <ButtonGroup>
                            <Button icon="sort-asc-sm"></Button>
                            <Button icon="sort-desc-sm"></Button>
                        </ButtonGroup>
                        <SplitButton text="Sort By" />
                        <ButtonGroup>
                            <Button icon="grid-layout"></Button>
                            <Button icon="grid"></Button>
                        </ButtonGroup>
                        <div className="k-spacer"></div>
                        <div className="k-filemanager-details-toggle">
                            <label>View Details</label>
                            <Switch checked />
                        </div>
                        <Searchbox className="k-filemanager-search-tool" placeholder="Search..." />
                    </div>
                </div>
            </div>

        </div>
    </>
);
