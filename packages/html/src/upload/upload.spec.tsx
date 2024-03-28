import ActionButtons from '../action-buttons/action-buttons.spec';
import { Button } from '../button';
import { classNames, stateClassNames, States } from '../misc';
import { UploadDropzone } from './upload-dropzone';

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

const defaultProps = {
    actionsLayout: 'end'
} as const;

export type KendoUploadState = { [K in (typeof states)[number]]?: boolean };

export const Upload = (
    props: KendoUploadProps &
        KendoUploadState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        async,
        empty,
        actions,
        actionsLayout = defaultProps.actionsLayout,
        hover,
        status,
        disabled,
        ...other
    } = props;

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
            <UploadDropzone status={status} hover={hover}></UploadDropzone>
            {props.children &&
                <ul className="k-upload-files">
                    {props.children}
                </ul>
            }
            { actions && props.children &&
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
Upload.defaultProps = defaultProps;

export default Upload;
