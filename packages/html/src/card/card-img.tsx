import { classNames } from '../utils-new';

export const CARDIMAGE_CLASSNAME = `k-card-image`;

export type KendoCardImageProps = {
    src?: string;
};

export const CardImage = (
    props: KendoCardImageProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        src,
        ...other
    } = props;

    return (
        <>
            {
                src
                    ? <img
                        {...other}
                        className={classNames(
                            props.className,
                            CARDIMAGE_CLASSNAME,
                        )}
                        src={src}
                    />
                    : <span
                        {...other}
                        className={classNames(
                            props.className,
                            CARDIMAGE_CLASSNAME,
                        )}
                    ><>{props.children}</></span>
            }
        </>

    );
};
