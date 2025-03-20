import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Combobox } from '../../combobox';
import { Pager } from '../../pager';
import { PDFViewerNormal } from '../../pdf-viewer';
import { Toolbar } from '../../toolbar';

const styles = `
    #test-area .k-pdf-viewer {
        height: 600px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <PDFViewerNormal
                toolbar={
                    <Toolbar resizable>
                        <Pager type="input" pageSizes={false} refresh={false} info={false} />
                        <span className="k-spacer"></span>
                        <ButtonGroup fillMode="flat">
                            <Button fillMode="flat" className="k-group-start" icon="zoom-out" />
                            <Button fillMode="flat" className="k-group-end" icon="zoom-in" />
                        </ButtonGroup>
                        <Combobox value="Automatic Width" />
                        <ButtonGroup fillMode="flat">
                            <Button fillMode="flat" className="k-group-start" icon="pointer" />
                            <Button fillMode="flat" className="k-group-end" icon="hand" />
                        </ButtonGroup>
                        <span className="k-spacer"></span>
                        <Button fillMode="flat" icon="search" />
                        <Button fillMode="flat" icon="folder-open" />
                        <Button fillMode="flat" icon="download" />
                        <Button fillMode="flat" icon="print" />
                    </Toolbar>
                }
            />
        </div>
    </>
);
