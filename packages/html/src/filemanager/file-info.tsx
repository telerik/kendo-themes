import * as React from 'react';
import { classNames } from '../misc';
import { FilePreview } from '.';

const FILEINFO_CLASSNAME = 'k-file-info';

const states = [];

const options = {};

export type KendoFileInfoProps = {
    selection: "single" | "multiple" | "none";
    name?: string;
    icon?: string;
    fileType?: string;
    fileSize?: string;
    fileDateCreated?: string;
    fileDateModified?: string;
};

const defaultOptions = {
    name: "No File Selected",
    icon: "file",
};

export const FileInfo = (
    props:
        KendoFileInfoProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        selection,
        name = defaultOptions.name,
        icon = defaultOptions.icon,
        fileType,
        fileSize,
        fileDateCreated,
        fileDateModified,
    } = props;

    return (
        <div className={classNames(
            props.className,
            FILEINFO_CLASSNAME,
        )}>

            <FilePreview
                className={classNames(
                    {
                        ["k-single-file-selected"]: selection === "single",
                        ["k-multiple-files-selected"]: selection === "multiple",
                        ["k-no-file-selected"]: selection === "none",
                    }
                )}
                icon={ selection === "none" ? "none" : icon }
                name={name}
                size="xxxlarge"
            />

            {selection === "single" &&
                <>
                    <dl className="k-file-meta">
                        {fileType &&
                        <>
                            <dt className="k-file-meta-label">Type: </dt>
                            <dd className="k-file-meta-value k-file-type">{fileType}</dd>
                            <dd className="k-line-break"></dd>
                        </>
                        }
                        {fileSize &&
                        <>
                            <dt className="k-file-meta-label">Size: </dt>
                            <dd className="k-file-meta-value k-file-size">{fileSize}</dd>
                            <dd className="k-line-break"></dd>
                        </>
                        }
                        {fileDateCreated &&
                        <>
                            <dt className="k-file-meta-label">Date Created: </dt>
                            <dd className="k-file-meta-value k-file-created">{fileDateCreated}</dd>
                            <dd className="k-line-break"></dd>
                        </>
                        }
                        {fileDateModified &&
                        <>
                            <dt className="k-file-meta-label">Date Modified: </dt>
                            <dd className="k-file-meta-value k-file-modified">{fileDateModified}</dd>
                            <dd className="k-line-break"></dd>
                        </>
                        }
                    </dl>
                </>
            }
        </div>
    );
};

FileInfo.states = states;
FileInfo.options = options;
FileInfo.className = FILEINFO_CLASSNAME;
FileInfo.defaultOptions = defaultOptions;

export default FileInfo;
