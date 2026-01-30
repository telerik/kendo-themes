import { classNames } from '../misc';

export const CARDMEDIA_CLASSNAME = `k-card-media`;

export type KendoCardMediaProps = {
    src?: string;
    alt?: string;
};

export const CardMedia = (
    props: KendoCardMediaProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        src,
        alt,
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
                            CARDMEDIA_CLASSNAME,
                        )}
                        src={src}
                        alt={alt || ''}
                    />
                    : <span
                        {...other}
                        className={classNames(
                            props.className,
                            CARDMEDIA_CLASSNAME,
                        )}
                    ><>{props.children}</></span>
            }
        </>

    );
};
