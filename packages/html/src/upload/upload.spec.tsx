import ActionButtons from '../action-buttons/action-buttons.spec';
import { Button } from '../button';
import { classNames, stateClassNames, States } from '../misc';
import { UploadDropzone } from './upload-dropzone';

import { KendoComponent } from '../_types/component';
import { UPLOAD_FOLDER_NAME, UPLOAD_MODULE_NAME } from './constants';
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

Upload.ariaSpec = {
    selector: '.k-upload',
    rules: [
        { selector: '.k-upload .k-upload-button', attribute: 'aria-disabled', usage: 'Announces the disabled state of the upload button.' },
        { selector: '.k-upload .k-upload-button[aria-controls]', attribute: 'aria-controls', usage: 'Creates the relationship between the button and the list of selected files when the list is present.' },
        { selector: '.k-upload input', attribute: 'tabindex=-1', usage: 'Assures that the input element inside the upload is not focusable.' },
        { selector: '.k-upload input', attribute: 'aria-hidden=true', usage: 'The input needs to be hidden from screen readers.' },
        { selector: '.k-upload-files', attribute: 'role=list', usage: 'Explicitly sets the UL role to list.' },
        { selector: '.k-upload-files', attribute: 'id', usage: 'Unique and deterministic id linked to the button aria-controls attribute.' },
        { selector: '.k-upload-files .k-file', attribute: 'role=listitem', usage: 'Explicitly sets the LI role to listitem.' },
        { selector: '.k-upload .k-file .k-file-validation-message', attribute: 'aria-live=polite', usage: 'Announces the change in the upload status of the file.' },
        { selector: '.k-upload .k-upload-actions .k-upload-action', attribute: 'aria-label', usage: 'Provides accessible names for the file action buttons.' },
        { selector: '.k-upload .k-upload-actions .k-upload-action', attribute: 'tabindex=-1', usage: 'The list file action buttons are not focusable elements.' },
    ]
};

export default Upload;
