import { classNames } from '../misc';

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

export default PdfExportShadow;
