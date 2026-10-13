import { classNames } from '../misc';
import { Icon } from '../icon';

export const IMAGEEDITORPLACEHOLDER_CLASSNAME = `k-imageeditor-placeholder`;

export type KendoImageEditorPlaceholderProps = {
    icon?: string;
    title?: string;
    text?: string;
};

export const ImageEditorPlaceholder = (
    props: KendoImageEditorPlaceholderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        icon,
        title,
        text,
        children,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                IMAGEEDITORPLACEHOLDER_CLASSNAME
            )}
        >
            {children ?? (
                <>
                    {icon &&
                        <Icon
                            icon={icon}
                            size="xxxlarge"
                            className={`${IMAGEEDITORPLACEHOLDER_CLASSNAME}-icon`}
                        />
                    }
                    {(title || text) &&
                        <div className={`${IMAGEEDITORPLACEHOLDER_CLASSNAME}-hint`}>
                            {title && <div className={`${IMAGEEDITORPLACEHOLDER_CLASSNAME}-title`}>{title}</div>}
                            {text && <div className={`${IMAGEEDITORPLACEHOLDER_CLASSNAME}-text`}>{text}</div>}
                        </div>
                    }
                </>
            )}
        </div>
    );
};
