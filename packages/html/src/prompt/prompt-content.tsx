import { IconTextButton } from '../button';
import { classNames } from '../misc';
import { Textarea } from '../textarea';

export const PROMPTCONTENT_CLASSNAME = `k-prompt-content`;

export type KendoPromptContentProps = {
    showSearch?: boolean;
    suggestions?: JSX.Element;
    settings?: JSX.Element;
}

export const PromptContent = (
    props: KendoPromptContentProps &
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
                PROMPTCONTENT_CLASSNAME,
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
            <>{props.children}</>
        </div>
    );
};
