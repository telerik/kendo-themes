import * as React from 'react';
import { Button } from '../button';
import { Icon } from '../icon';
import { ProgressBar } from '../progressbar';
import { classNames } from '../utils';

export interface UploadFileMultipleProps {
    children?: React.ReactNode;
    className?: string;
    status?: 'error' | 'progress' | 'success';
    progress?: string;
    state?: 'uploaded' | 'uploading';
    validationMsg?: string;
    fileSummary?: string;
}

export class UploadFileMultiple extends React.Component<UploadFileMultipleProps> {

    render() {
        const {
            children,
            className,
            status,
            progress,
            validationMsg,
            fileSummary,
            ...htmlAttributes
        } = this.props;

        return (
            <li
                {...htmlAttributes}
                className={classNames(
                    className,
                    'k-file',
                    'k-file-multiple',
                    {
                        [`k-file-${status}`]: status,
                    },
                )}
            >
                <ProgressBar className={classNames(
                    {
                        'k-hidden': status !== 'progress',
                    }
                )} value={progress} label={false} />
                <span className="k-file-icon-wrapper">
                    <Icon className="k-file-icon" name="copy"></Icon>
                </span>
                <div className="k-multiple-files-wrapper">
                    {children}
                    {fileSummary && <span className={classNames(
                        'k-file-summary',
                        {
                            'k-hidden': status !== 'progress',
                        },
                    )}
                    >{fileSummary}</span>}
                    {validationMsg && <span className="k-file-validation-message">{validationMsg}</span>}
                </div>
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
            </li>
        );
    }
}
