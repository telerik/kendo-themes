import { classNames } from '../misc';

export const PROMPTSUGGESTION_CLASSNAME = `k-prompt-suggestion`;

export const PromptSuggestion = (
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
                PROMPTSUGGESTION_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
