import { IconTextButton } from '../button';
import { classNames } from '../misc';

export const PROMPTEXPANDER_CLASSNAME = `k-prompt-expander`;

export type KendoPromptExpanderProps = {
    title: string;
    children?: React.ReactNode;
    expanded?: boolean;
};

export const PromptExpander = (
    props: KendoPromptExpanderProps &
        React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        title,
        children,
        expanded,
        ...other
    } = props;
    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROMPTEXPANDER_CLASSNAME,
            )}>
            <IconTextButton
                fillMode="flat"
                icon={expanded ? "chevron-up" : "chevron-down"}
            >
                {title}
            </IconTextButton>
            {expanded && (
                <div className="k-prompt-expander-content">
                    {children}
                </div>
            )}
        </div>
    );
};
