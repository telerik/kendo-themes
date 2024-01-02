import { classNames } from '../misc';

export const PROMPTHEADER_CLASSNAME = `k-prompt-header`;

export const PromptHeader = (
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
                PROMPTHEADER_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
