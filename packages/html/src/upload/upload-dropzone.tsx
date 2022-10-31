import * as React from 'react';
import { classNames } from '../utils';
import { Button } from '../button';
import { Icon } from '../icon';

export interface UploadDropzoneProps {
    className?: string;
    status?: 'upload' | 'uploading' | 'done' | 'failed';
    hover?: boolean;
}

export class UploadDropzone extends React.Component<UploadDropzoneProps> {

    render() {
        const {
            className,
            status,
            hover
        } = this.props;

        let statusMsg = <></>;

        switch (status) {
            case 'uploading':
                statusMsg = <><Icon name="upload"></Icon>Uploading...</>;
                break;
            case 'done':
                statusMsg = <><Icon name="check"></Icon>Done</>;
                break;
            case 'failed':
                statusMsg = <><Icon name="warning"></Icon>Done</>;
                break;
            default:
                statusMsg = <></>;
                break;
        }

        return (
            <div
                className={classNames(
                    className,
                    'k-dropzone',
                    'k-upload-dropzone',
                    {
                        'k-hover': hover
                    }
                )}
            >
                <div className="k-upload-button-wrap">
                    <Button className="k-upload-button">
                        Select files...
                    </Button>
                    <input id="upload-input" />
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
    }
}
