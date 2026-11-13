import { classNames } from '../misc';
import { Icon } from '../icon';
import { UploadNormal } from '../upload';

export const IMAGEEDITORPLACEHOLDER_CLASSNAME = `k-imageeditor-placeholder`;

export type KendoImageEditorPlaceholderProps = {
    icon?: string;
    title?: string;
    text?: string;
    buttonText?: string;
};

export const ImageEditorPlaceholder = (
    props: KendoImageEditorPlaceholderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        icon,
        title,
        text,
        buttonText,
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
                    {buttonText &&
                        <UploadNormal className={`${IMAGEEDITORPLACEHOLDER_CLASSNAME}-upload`} buttonText={buttonText} />
                    }
                </>
            )}
        </div>
    );
};
