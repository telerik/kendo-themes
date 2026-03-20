import { PDFViewer, KendoPDFViewerProps } from '../pdf-viewer.spec';
import { PDFViewerPage } from '../pdf-viewer-page';
import { PDFViewerNormal } from '../templates/pdf-viewer-normal';
import { Button } from '../../button';
import { ButtonGroup } from '../../button-group';
import { Combobox } from '../../combobox';
import { Pager } from '../../pager';
import { Toolbar } from '../../toolbar';

const options = PDFViewer.options;
const states = PDFViewer.states;
const defaults = {
    ...PDFViewer.defaultOptions,
    variant: 'default',
};


const variants = [
    {
        name: 'default',
        title: 'Default',
    },
    {
        name: 'blank',
        title: 'Blank',
    },
];

const modifiers = [];

export const PdfViewerDemo = (
    props: KendoPDFViewerProps &
    { variant?: (typeof variants)[number]['name'] }
) => {
    const { variant, ...other } = props;

    let additionalProps: any = {};

    switch (variant) {
        case 'blank':
            additionalProps.blank = true;
            break;
    }

    return (
        <PDFViewerNormal style={{ width: "auto", height: "375px" }} {...other} {...additionalProps}
            toolbar={
                <Toolbar>
                    <Pager type="input" pageSizes={false} refresh={false} info={false} />
                    <span className="k-spacer"></span>
                    <ButtonGroup>
                        <Button fillMode="flat" className="k-group-start" icon="zoom-out"></Button>
                        <Button fillMode="flat" className="k-group-end" icon="zoom-in"></Button>
                    </ButtonGroup>
                    <Combobox value="Automatic Width"></Combobox>
                    <ButtonGroup>
                        <Button fillMode="flat" className="k-group-start" icon="pointer"></Button>
                        <Button fillMode="flat" className="k-group-end" icon="hand"></Button>
                    </ButtonGroup>
                    <span className="k-spacer"></span>
                    <Button fillMode="flat" icon="search"></Button>
                    <Button fillMode="flat" icon="folder-open"></Button>
                    <Button fillMode="flat" icon="download"></Button>
                    <Button fillMode="flat" icon="print"></Button>
                </Toolbar>
            }
        >
            <PDFViewerPage width="80%" height="600px" />
            <PDFViewerPage width="80%" height="600px" />
            <PDFViewerPage width="80%" height="600px" />
        </PDFViewerNormal>
    );
}


PdfViewerDemo.options = options;
PdfViewerDemo.states = states;
PdfViewerDemo.variants = variants;
PdfViewerDemo.defaultOptions = defaults;
PdfViewerDemo.modifiers = modifiers;
PdfViewerDemo.className = PDFViewer.className;

export default PdfViewerDemo;

