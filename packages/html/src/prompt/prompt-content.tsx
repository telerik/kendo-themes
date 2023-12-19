import { classNames } from '../misc';

export const PROMPTCONTENT_CLASSNAME = `k-prompt-content`;

export const PromptContent = (
    props: React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROMPTCONTENT_CLASSNAME,
            )}>
            <>{props.children}</>
        </div>
    );
};
