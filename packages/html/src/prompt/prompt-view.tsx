import { IconTextButton } from '../button';
import { classNames } from '../misc';
import { Textarea } from '../textarea';

export const PROMPTVIEW_CLASSNAME = `k-prompt-view`;

export type KendoPromptViewProps = {
    showSearch?: boolean;
    suggestions?: React.JSX.Element;
    settings?: React.JSX.Element;
}

export const PromptView = (
    props: KendoPromptViewProps &
    React.HTMLAttributes<HTMLDivElement>
) => {
    const {
        showSearch,
        suggestions,
        settings,
        ...other
    } = props;

    return (
        <div
            {...other}
            className={classNames(
                props.className,
                PROMPTVIEW_CLASSNAME,
            )}>
            { showSearch && <Textarea rows={1} placeholder="Ask or generate content with AI"></Textarea> }
            { suggestions &&
                <div className="k-prompt-expander">
                    <IconTextButton fillMode={"flat"} icon="chevron-down">Prompt Suggestions</IconTextButton>
                    <div className="k-prompt-expander-content">
                        <>{suggestions}</>
                    </div>
                </div>
            }
            { settings &&
                <div className="k-prompt-expander">
                    <IconTextButton fillMode={"flat"} icon="chevron-down">Settings</IconTextButton>
                    <div className="k-prompt-expander-content">
                        {settings}
                    </div>
                </div>
            }
            {props.children}
        </div>
    );
};
