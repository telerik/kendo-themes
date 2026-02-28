import { IconTextButton } from '../button';
import { classNames, nextId } from '../misc';

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

    const contentId = nextId('prompt-expander-content');

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
                aria-expanded={expanded ? 'true' : 'false'}
                aria-controls={expanded ? contentId : undefined}
            >
                {title}
            </IconTextButton>
            {expanded && (
                <div className="k-prompt-expander-content" id={contentId}>
                    {children}
                </div>
            )}
        </div>
    );
};
