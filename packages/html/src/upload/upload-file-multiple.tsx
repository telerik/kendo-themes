import { Button } from '../button';
import { Icon } from '../icon';
import { ProgressBar } from '../progressbar';
import { classNames } from '../misc';

export const UPLOADFILEMULTIPLE_CLASSNAME = `k-file`;

export type KendoUploadFileMultipleProps = {
    status?: 'error' | 'progress' | 'success';
    progress?: string;
    state?: 'uploaded' | 'uploading';
    validationMsg?: string;
    fileSummary?: string;
};

export const UploadFileMultiple = (
    props: KendoUploadFileMultipleProps &
        React.HTMLAttributes<HTMLLIElement>
) => {
    const {
        status,
        progress,
        validationMsg,
        fileSummary,
        ...other
    } = props;

    return (
        <li
            {...other}
            className={classNames(
                props.className,
                UPLOADFILEMULTIPLE_CLASSNAME,
                {
                    [`k-file-${status}`]: status,
                },
            )}
            role="listitem"
            tabIndex={0}
        >
            <div className="k-file-multiple">
                <ProgressBar className={classNames(
                    {
                        'k-hidden': status !== 'progress',
                    }
                )} value={progress} label={false} />
                <span className="k-file-icon-wrapper">
                    <Icon className="k-file-icon" icon="copy" size="xxlarge"></Icon>
                </span>
                <div className="k-multiple-files-wrapper">
                    {props.children}
                    {fileSummary && <span className={classNames(
                        'k-file-summary',
                        {
                            'k-hidden': status !== 'progress',
                        },
                    )}
                    >{fileSummary}</span>}
                    {validationMsg && <span className="k-file-validation-message" aria-live="polite">{validationMsg}</span>}
                </div>
                <div className="k-upload-actions">
                    { status === 'progress'
                        ?
                        <>
                            <span className="k-upload-pct">{progress}%</span>
                            <Button icon="pause-sm" fillMode="flat" className="k-upload-action" aria-label="Pause upload" tabIndex={-1}></Button>
                            <Button icon="cancel" fillMode="flat" className="k-upload-action" aria-label="Cancel upload" tabIndex={-1}></Button>
                        </>
                        : <Button icon="x" fillMode="flat" className="k-upload-action" aria-label="Remove file" tabIndex={-1}></Button>
                    }
                </div>
            </div>
        </li>
    );
};
