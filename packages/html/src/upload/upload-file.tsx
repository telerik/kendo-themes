import { Button } from '../button';
import { Icon } from '../icon';
import { ProgressBar } from '../progressbar';
import { classNames } from '../utils';
import { UploadFileInfo } from './upload-file-info';

export const UPLOADFILE_CLASSNAME = `k-file`;

export type KendoUploadFileProps = {
    status?: 'error' | 'progress' | 'success';
    progress?: string;
    name?: string;
    icon?: string;
    size?: string;
    state?: 'uploaded' | 'uploading';
    validationMsg?: string;
};

export const UploadFile = (
    props: KendoUploadFileProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        status,
        progress,
        name,
        icon,
        size,
        state,
        validationMsg,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                UPLOADFILE_CLASSNAME,
                {
                    [`k-file-${status}`]: status,
                }
            )}
        >
            <div className="k-file-single">
                <ProgressBar className={classNames(
                    {
                        'k-hidden': status !== 'progress',
                    }
                )} value={progress} label={false} />
                <span className="k-file-icon-wrapper">
                    <Icon className="k-file-icon" name={icon}></Icon>
                    {state && <span className="k-file-state">{state}</span>}
                </span>
                <UploadFileInfo name={name} size={size} validationMsg={validationMsg}></UploadFileInfo>
                <div className="k-upload-actions">
                    { status === 'progress'
                        ?
                        <>
                            <span className="k-upload-pct">{progress}%</span>
                            <Button icon="pause-sm" fillMode="flat" className="k-upload-action"></Button>
                            <Button icon="cancel" fillMode="flat" className="k-upload-action"></Button>
                        </>
                        : <Button icon="close" fillMode="flat" className="k-upload-action"></Button>
                    }
                </div>
            </div>
        </li>
    );
};
