import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Searchbox } from '../../searchbox';
import { SplitButton } from '../../split-button';
import { Switch } from '../../switch';
import { Toolbar } from '../../toolbar';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-1">

            <span>Full toolbar</span>
            <div className="k-widget k-filemanager">
                {/* Header */}
                <div className="k-filemanager-header">
                    <Toolbar className="k-filemanager-toolbar">
                        <Button>New Folder</Button>
                        <Button>Upload</Button>
                        <ButtonGroup>
                            <Button icon="sort-asc-small"></Button>
                            <Button icon="sort-desc-small"></Button>
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
                    </Toolbar>
                </div>
            </div>

        </div>
    </>
);
