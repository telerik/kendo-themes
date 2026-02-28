import { Button } from '../button';
import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

export const UPLOADDROPZONE_CLASSNAME = `k-upload-dropzone`;

const states = [
    States.hover
];

export type KendoUploadDropzoneProps = {
    status?: 'upload' | 'uploading' | 'done' | 'failed';
    disabled?: boolean;
    hasFiles?: boolean;
    filesId?: string;
};

export type KendoUploadDropzoneState = { [K in (typeof states)[number]]?: boolean };

export const UploadDropzone = (
    props: KendoUploadDropzoneProps &
        KendoUploadDropzoneState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hover,
        status,
        disabled,
        hasFiles,
        filesId,
        ...other
    } = props;

    let statusMsg;

    switch (status) {
        case 'uploading':
            statusMsg = <><Icon icon="upload"></Icon>Uploading...</>;
            break;
        case 'done':
            statusMsg = <><Icon icon="check"></Icon>Done</>;
            break;
        case 'failed':
            statusMsg = <><Icon icon="exclamation-circle"></Icon>Done</>;
            break;
        default:
            statusMsg = <></>;
            break;
    }

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                UPLOADDROPZONE_CLASSNAME,
                'k-dropzone',
                stateClassNames(UPLOADDROPZONE_CLASSNAME, {
                    hover,
                })
            )}
        >
            <div className="k-upload-button-wrap">
                <Button
                    className="k-upload-button"
                    aria-disabled={disabled ? 'true' : 'false'}
                    {...(hasFiles && filesId ? { 'aria-controls': filesId } : {})}
                >
                    Select files...
                </Button>
                <input id="upload-input" className="k-hidden" tabIndex={-1} aria-hidden="true" />
            </div>
            <span className={classNames(
                'k-dropzone-hint',
                {
                    'k-hidden': status !== "upload"
                }
            )}
            >
            Drop files here to upload</span>
            {status !== "upload" &&
                <span className="k-upload-status">
                    {statusMsg}
                </span>
            }
        </div>
    );
};

UploadDropzone.states = states;
UploadDropzone.className = UPLOADDROPZONE_CLASSNAME;

export default UploadDropzone;
