import { classNames } from '../misc';
import { PDF_FOLDER_NAME, PDF_MODULE_NAME } from './constants';

export const PDF_EXPORT_SHADOW_CLASSNAME = `k-pdf-export-shadow`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPdfExportShadowOptions = {};

export type KendoPdfExportShadowProps = KendoPdfExportShadowOptions & {};

export const PdfExportShadow = (
    props: KendoPdfExportShadowProps & React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PDF_EXPORT_SHADOW_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};

PdfExportShadow.states = states;
PdfExportShadow.options = options;
PdfExportShadow.className = PDF_EXPORT_SHADOW_CLASSNAME;
PdfExportShadow.defaultOptions = defaultOptions;
PdfExportShadow.moduleName = PDF_MODULE_NAME;
PdfExportShadow.folderName = PDF_FOLDER_NAME;

export default PdfExportShadow;
