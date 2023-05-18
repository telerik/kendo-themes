import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../utils';

export const DROPZONE_CLASSNAME = `k-external-dropzone`;

const states = [
    States.hover,
];

export type KendoDropzoneProps = {
    icon?: string;
    note?: string | boolean;
};

export type KendoDropzoneState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    icon: "upload",
    note: "Only JPEG, PNG and SVG files are allowed."
};

export const Dropzone = (
    props: KendoDropzoneProps &
        KendoDropzoneState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hover,
        icon = defaultProps.icon,
        note = defaultProps.note,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DROPZONE_CLASSNAME,
                stateClassNames(DROPZONE_CLASSNAME, {
                }), {
                    "k-external-dropzone-hover": hover
                }
            )}
        >
            <div className="k-dropzone-inner">
                {icon && <Icon icon={icon} className="k-dropzone-icon" size={"xxxlarge"} />}
                <span className="k-dropzone-hint">Drag and drop files here to upload</span>
                {note && <span className="k-dropzone-note"> {note} </span>}
            </div>
        </div>
    );
};
