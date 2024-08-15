import { PDFViewer } from "..";
import { ButtonGroup, Combobox, Pager, Toolbar } from "../..";
import { Button } from "../../button";

export const PDFViewerBlank = (props) => (
    <PDFViewer blank
        toolbar={
            <Toolbar resizable>
                <Pager disabled type="input" currentPage={1} maxPages={1} pageSizes={false} refresh={false} info={false} />
                <span className="k-spacer"></span>
                <ButtonGroup>
                    <Button disabled fillMode="flat" className="k-group-start" icon="zoom-out"></Button>
                    <Button disabled fillMode="flat" className="k-group-end" icon="zoom-in"></Button>
                </ButtonGroup>
                <Combobox disabled value="Automatic Width"></Combobox>
                <ButtonGroup>
                    <Button disabled fillMode="flat" className="k-group-start" icon="pointer"></Button>
                    <Button disabled fillMode="flat" className="k-group-end" icon="hand"></Button>
                </ButtonGroup>
                <span className="k-spacer"></span>
                <Button disabled fillMode="flat" icon="search"></Button>
                <Button fillMode="flat" icon="folder-open"></Button>
                <Button disabled fillMode="flat" icon="download"></Button>
                <Button disabled fillMode="flat" icon="print"></Button>
            </Toolbar>
        }
        {...props}
    />
);
