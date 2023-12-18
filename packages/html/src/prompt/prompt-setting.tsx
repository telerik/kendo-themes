import { classNames } from '../misc';

export const PROMPTSETTING_CLASSNAME = `k-prompt-setting`;

export const PromptSetting = (
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
                PROMPTSETTING_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
