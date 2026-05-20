import ActionButtons from '../action-buttons/action-buttons.spec';
import { Button } from '../button';
import { classNames, stateClassNames, States } from '../misc';
import { UploadDropzone } from './upload-dropzone';

import { KendoComponent } from '../_types/component';
import { UPLOAD_FOLDER_NAME, UPLOAD_MODULE_NAME } from './constants';
import a11ySpec from './behavior/accessibility.json';
export const UPLOAD_CLASSNAME = `k-upload`;

const states = [
    States.hover,
    States.disabled
];

const options = {};

export type KendoUploadProps = {
    async?: boolean;
    empty?: boolean;
    actions?: boolean;
    actionsLayout?: 'start' | 'center' | 'end' | 'stretched';
    status?: 'upload' | 'uploading' | 'done' | 'failed';
};

const defaultOptions = {
    actionsLayout: 'end'
} as const;

export type KendoUploadState = { [K in (typeof states)[number]]?: boolean };

const uploadFilesId = 'upload-files-list';

export const Upload: KendoComponent<KendoUploadProps & KendoUploadState & React.HTMLAttributes<HTMLDivElement>> = (
    props: KendoUploadProps &
        KendoUploadState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        async,
        empty,
        actions,
        actionsLayout = defaultOptions.actionsLayout,
        hover,
        status,
        disabled,
        ...other
    } = props;

    const hasFiles = !!props.children;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                UPLOAD_CLASSNAME,
                stateClassNames(UPLOAD_CLASSNAME, {
                    disabled,
                }),
                {
                    'k-upload-async': async,
                    'k-upload-empty': empty,
                }
            )}>
            <UploadDropzone
                status={status}
                hover={hover}
                disabled={disabled}
                hasFiles={hasFiles}
                filesId={uploadFilesId}
            />
            {hasFiles &&
                <ul className="k-upload-files" role="list" id={uploadFilesId}>
                    {props.children}
                </ul>
            }
            { actions && hasFiles &&
                <ActionButtons alignment={actionsLayout} orientation="horizontal">
                    <Button className="k-clear-selected">Clear</Button>
                    <Button themeColor="primary" className="k-upload-selected">Upload</Button>
                </ActionButtons>
            }
        </div>
    );
};

Upload.states = states;
Upload.options = options;
Upload.className = UPLOAD_CLASSNAME;
Upload.defaultOptions = defaultOptions;
Upload.moduleName = UPLOAD_MODULE_NAME;
Upload.folderName = UPLOAD_FOLDER_NAME;

Upload.ariaSpec = a11ySpec.ariaSpec;

export default Upload;
