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

/**
 * @aria {aria-disabled} Announces the disabled state of the upload button.
 * @aria {aria-controls} Creates the relationship between the button and the list of selected files when the list is present.
 * @aria {tabindex="-1"} Assures that the input element inside the upload is not focusable.
 * @aria {aria-hidden="true"} The input needs to be hidden from screen readers.
 * @aria {role="list"} Explicitly sets the UL role to list.
 * @aria {id} Unique and deterministic id linked to the button aria-controls attribute.
 * @aria {role="listitem"} Explicitly sets the LI role to listitem.
 * @aria {aria-live="polite"} Announces the change in the upload status of the file.
 * @aria {aria-label} Provides accessible names for the file action buttons.
 * @aria {tabindex="-1"} The list file action buttons are not focusable elements.
 * @ux {Drop zone} Files can be dragged and dropped onto the component to start the upload.
 * @ux {Browse} A button opens the system file dialog to select files.
 * @ux {Progress} Per-file progress bars show upload completion.
 * @ux {Cancel} Individual file uploads can be cancelled while in progress.
 * @ux {Validation} File type and size restrictions are enforced and violation messages are shown.
 */
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

/**
 * @keyboard {Tab} Switches focus between the Select File Button, the list of selected files, and the action buttons (Cancel, Upload) after the file list.
 * @keyboard {Space or Enter} Opens the Select file dialog if the Select files button is focused.
 * @keyboard {ArrowDown} Highlights the next file in the file list (if such exists) when a file list item is focused.
 * @keyboard {ArrowUp} Highlights the previous file in the file list (if such exists) when a file list item is focused.
 * @keyboard {Enter} Retries the upload of the failed file when the focus is on a file list item or starts the file upload for a valid file.
 * @keyboard {Escape} Cancels the upload of the highlighted file when the focus is on a file list item
 * @keyboard {Space} When Chunk upload is enabled Start or Pause the highlighted file upload
 * @keyboard {Delete} Removes the highlighted file when the focus is on a file list item. Focus is moved to the next file (if present), previous file (if there is no next and there is previous), or is returned to the Select Files button if the last file from the list is deleted.
 *
 * @see https://www.w3.org/WAI/ARIA/apg/ WAI-ARIA Practices
 */

export default Upload;
