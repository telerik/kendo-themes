import { Icon } from '../icon';
import { classNames, stateClassNames, States } from '../misc';

export const DROPZONE_CLASSNAME = `k-external-dropzone`;

const states = [
    States.disabled,
    States.hover,
];

const options = {};

export type KendoDropzoneProps = {
    icon?: string;
    hint?: string | boolean;
    note?: string;
};

export type KendoDropzoneState = { [K in (typeof states)[number]]?: boolean };

const defaultProps = {
    icon: "upload",
    hint: "Drag and drop files here to upload",
};

export const Dropzone = (
    props: KendoDropzoneProps &
        KendoDropzoneState &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        hover,
        disabled,
        icon = defaultProps.icon,
        hint = defaultProps.hint,
        note,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                DROPZONE_CLASSNAME,
                stateClassNames(DROPZONE_CLASSNAME, {
                    disabled,
                }), {
                    "k-external-dropzone-hover": hover
                }
            )}
        >
            <div className="k-dropzone-inner">
                {icon && <Icon icon={icon} className="k-dropzone-icon" size={"xxxlarge"} />}
                {hint && <span className="k-dropzone-hint">{hint}</span>}
                {note && <span className="k-dropzone-note">{note}</span>}
            </div>
        </div>
    );
};

Dropzone.states = states;
Dropzone.options = options;
Dropzone.className = DROPZONE_CLASSNAME;
Dropzone.defaultProps = defaultProps;

export default Dropzone;
