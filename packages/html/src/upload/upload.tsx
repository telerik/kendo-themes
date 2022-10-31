import * as React from 'react';
import { ActionButtons } from '../action-buttons';
import { Button } from '../button';
import { classNames } from '../utils';
import { UploadDropzone } from './upload-dropzone';

export interface UploadProps {
    children?: React.ReactNode;
    className?: string;
    async?: boolean;
    empty?: boolean;
    actions?: boolean;
    hover?: boolean;
    status?: 'upload' | 'uploading' | 'done' | 'failed';
    disabled?: boolean;
}

export class Upload extends React.Component<UploadProps> {

    render() {
        const {
            children,
            className,
            async,
            empty,
            actions,
            hover,
            status,
            disabled
        } = this.props;

        return (
            <div
                className={classNames(
                    className,
                    'k-upload',
                    {
                        'k-upload-async': async,
                        'k-upload-empty': empty,
                        'k-disabled': disabled,
                    }
                )}
            >
                <UploadDropzone status={status} hover={hover}></UploadDropzone>
                {children &&
                    <ul className="k-upload-files">
                        {children}
                    </ul>
                }
                { actions &&
                    <ActionButtons alignment="end" orientation="horizontal">
                        <Button className="k-clear-selected">Clear</Button>
                        <Button themeColor="primary" className="k-upload-selected">Update</Button>
                    </ActionButtons>
                }
            </div>
        );
    }
}
