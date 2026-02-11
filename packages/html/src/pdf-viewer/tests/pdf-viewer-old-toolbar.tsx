import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { Combobox } from '../../combobox/combobox.spec';
import { PagerInput } from "../../pager/templates/pager-input";
import { PDFViewerNormal } from '../../pdf-viewer/templates/pdf-viewer-normal';
import { Toolbar } from '../../toolbar/toolbar.spec';

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
                        <PagerInput pageSizes={false} refresh={false} info={false} />
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
