import { classNames } from '../misc';

export const PROMPTFOOTER_CLASSNAME = `k-prompt-footer`;

export const PromptFooter = (
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
                PROMPTFOOTER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
