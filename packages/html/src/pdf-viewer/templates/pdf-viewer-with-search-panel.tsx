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
        <Button aria-label="Drag handle" className="k-search-dialog-draghandle" fillMode="flat" icon="handle-drag-dots"/>
        <ToolbarSeparator />
        <Textbox fillMode="flat" placeholder="Search" suffix={<Button aria-label="Match case" className="k-match-case-button" fillMode="flat" icon="convert-lowercase" />}  />
        <div className="k-search-matches">
           <span>0</span> of <span>0</span>
        </div>
        <ToolbarSeparator />
        <Button aria-label="Previous match" fillMode="flat" icon="arrow-up" />
        <Button aria-label="Next match" fillMode="flat" icon="arrow-down" />
        <ToolbarSeparator />
        <Button aria-label="Close search panel" fillMode="flat" icon="x" />
    </FloatingToolbar>
    </>

);
