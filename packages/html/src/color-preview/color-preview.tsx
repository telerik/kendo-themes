import { classNames, Size, optionClassNames } from '../misc';
import { Icon } from '../icon';

export const COLORPREVIEW_CLASSNAME = `k-color-preview`;

const states = [];

const options = {
    size: [ Size.small, Size.medium, Size.large ]
};

export type KendoColorPreviewOptions = {
    size?: (typeof options.size)[number] | null;
};

export type KendoColorPreviewProps = KendoColorPreviewOptions & {
    color?: string;
    iconName?: string;
};

const defaultOptions = {
    size: Size.medium
}

export const ColorPreview = (
    props: KendoColorPreviewProps &
        React.HTMLAttributes<HTMLSpanElement>
) => {
    const {
        size = defaultOptions.size,
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
                },
                optionClassNames(COLORPREVIEW_CLASSNAME, {size})
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
ColorPreview.defaultOptions = defaultOptions;

export default ColorPreview;
