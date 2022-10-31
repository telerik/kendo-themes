import * as React from 'react';

export interface UploadFileInfoProps {
    name?: string;
    size?: string;
    validationMsg?: string;
}

export class UploadFileInfo extends React.Component<UploadFileInfoProps> {

    render() {
        const {
            name,
            size,
            validationMsg,
        } = this.props;

        return (
            <div className="k-file-info">
                {name && <span className="k-file-name">{name}</span>}
                {size && <span className="k-file-size">{size}</span>}
                {validationMsg && <span className="k-file-validation-message">{validationMsg}</span>}
            </div>
        );
    }
}
