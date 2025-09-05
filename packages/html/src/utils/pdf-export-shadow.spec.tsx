import { classNames } from '../misc';

import { KendoComponent } from '../_types/component';

export const PDF_EXPORT_SHADOW_CLASSNAME = `k-pdf-export-shadow`;

const states = [];

const options = {};

const defaultOptions = {};

export type KendoPdfExportShadowOptions = {};

export type KendoPdfExportShadowProps = KendoPdfExportShadowOptions & {};

export const PdfExportShadow: KendoComponent<KendoPdfExportShadowProps & React.HTMLAttributes<HTMLDivElement>> = (
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
PdfExportShadow.moduleName = "grid";
PdfExportShadow.folderName = PdfExportShadow.moduleName;

export default PdfExportShadow;
