import { classNames } from '../misc';
import { Icon } from '../icon';

export const COLORPREVIEW_CLASSNAME = `k-color-preview`;

const states = [];

const options = {};

export type KendoColorPreviewProps = {
    color?: string;
    iconName?: string;
};

export const ColorPreview = (
    props: KendoColorPreviewProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        color,
        iconName,
        ...other
    } = props;


    return (
        <span
            {...other}
            className={classNames(
                props.className,
                COLORPREVIEW_CLASSNAME,
                {
                    'k-icon-color-preview': iconName,
                    'k-no-color': !color
                }
            )}
        >
            {iconName && (
                <Icon icon={iconName} className="k-color-preview-icon" />
            )}
            <span
                className="k-color-preview-mask"
                style={{ backgroundColor: color }}>
            </span>
        </span>
    );
};

ColorPreview.states = states;
ColorPreview.options = options;
ColorPreview.className = COLORPREVIEW_CLASSNAME;

export default ColorPreview;
