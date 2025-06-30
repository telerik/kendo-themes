import { classNames } from '../misc';

export const PROMPTVIEW_CLASSNAME = `k-prompt-view`;

export type KendoPromptViewProps = {};

export const PromptView = (
    props: KendoPromptViewProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROMPTVIEW_CLASSNAME,
            )}>
            {props.children}
        </div>
    );
};
