import { PDFViewer, KendoPDFViewerProps } from '../pdf-viewer.spec';
import { PDFViewerPage } from '../pdf-viewer-page';
import { PDFViewerNormal } from '../templates/pdf-viewer-normal';
import { Button } from '../../button/button.spec';
import { ButtonGroup } from '../../button-group/button-group.spec';
import { Combobox } from '../../combobox/combobox.spec';
import { Pager } from '../../pager/pager.spec';
import { Toolbar } from '../../toolbar/toolbar.spec';

const options = PDFViewer.options;
const states = PDFViewer.states;
const defaults = PDFViewer.defaultOptions;


const modifiers = [
    {
        name: 'blank',
        title: 'Blank',
    },
];
const variants = [];

export const PdfViewerDemo = (
    props: KendoPDFViewerProps & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { modifiers: mods, ...other } = props;

    let additionalProps: any = {};

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'blank':
                additionalProps.blank = mods?.[modifier] ? true : false;
                break;
        }
    });

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

export default PdfViewerDemo;

