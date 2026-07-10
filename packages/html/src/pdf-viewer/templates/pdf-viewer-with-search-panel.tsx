import { PDFViewer, PDFViewerPage } from "..";
import { FloatingToolbar } from "../../toolbar/floating-toolbar.spec";
import { ToolbarSeparator } from "../../toolbar/toolbar-separator";
import { Textbox } from "../../textbox/textbox.spec";
import { Button } from "../../button/button.spec";

export const PDFViewerWithSearchPanel = (props) => (
    <>
    <PDFViewer
        children={
            <>
                <PDFViewerPage />
                <PDFViewerPage />
            </>
        }
        {...props}
    />
    <FloatingToolbar fillMode="flat">
        <Button className="k-search-dialog-draghandle" fillMode="flat" icon="handle-drag"/>
        <ToolbarSeparator />
        <Textbox fillMode="flat" placeholder="Search" suffix={<Button className="k-match-case-button" fillMode="flat" icon="convert-lowercase" />}  />
        <div className="k-search-matches">
            of <span>0</span>
        </div>
        <ToolbarSeparator />
        <Button fillMode="flat" icon="arrow-up" />
        <Button fillMode="flat" icon="arrow-down" />
        <ToolbarSeparator />
        <Button fillMode="flat" icon="x" />
    </FloatingToolbar>
    </>

);
