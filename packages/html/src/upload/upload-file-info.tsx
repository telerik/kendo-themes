import { classNames } from "../utils";

export const UPLOADFILEINFO_CLASSNAME = `k-file-info`;

export type KendoUploadFileInfoProps = {
    name?: string;
    size?: string;
    validationMsg?: string;
};

export const UploadFileInfo = (
    props: KendoUploadFileInfoProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        name,
        size,
        validationMsg,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                UPLOADFILEINFO_CLASSNAME,
            )}>
            {name && <span className="k-file-name">{name}</span>}
            {size && <span className="k-file-size">{size}</span>}
            {validationMsg && <span className="k-file-validation-message">{validationMsg}</span>}
        </div>
    );
};
