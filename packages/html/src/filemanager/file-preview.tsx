import * as React from 'react';
import { Size, classNames } from '../misc';
import { Icon } from '../icon';

const FILEPREVIEW_CLASSNAME = 'k-file-preview';

const states = [];

const options = {
    size: [ Size.xsmall, Size.small, Size.medium, Size.large, Size.xlarge, Size.xxlarge, Size.xxxlarge ],
};

export type KendoFilePreviewOptions = {
    size?: (typeof options.size)[number];
};

export type KendoFilePreviewProps = KendoFilePreviewOptions & {
    name?: string;
    icon?: string;
};

const defaultOptions = {};

export const FilePreview = (
    props:
        KendoFilePreviewProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size,
        icon,
        name,
        ...other
    } = props;

    return (
        <>
            <span
                {...other}
                className={classNames(
                    FILEPREVIEW_CLASSNAME,
                )}>
                <Icon className="k-file-icon"
                    icon={icon}
                    size={size}
                />
            </span>
            <span className={classNames(
                props.className,
                'k-file-name',
            )}>{name}</span>
        </>
    );
};

FilePreview.states = states;
FilePreview.options = options;
FilePreview.className = FILEPREVIEW_CLASSNAME;
FilePreview.defaultOptions = defaultOptions;

export default FilePreview;
