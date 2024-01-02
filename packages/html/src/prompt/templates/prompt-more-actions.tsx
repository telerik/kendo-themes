import { IconTextButton, IconButton } from "../../button";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptContent, PromptHeader, PromptView } from "..";
import { Icon } from "../../icon";

export const PromptMoreActions = (props) => (
    <Prompt
        {...props}
    >
        <PromptHeader>
            <Toolbar className="k-toolbar-flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full" selected></IconButton>
            </Toolbar>
        </PromptHeader>
        <PromptContent>
            <PromptView>
                <div className="k-column-menu k-flex-col k-flex-1">
                    <div className="k-columnmenu-item-wrapper">
                        <div className="k-columnmenu-item">
                            <Icon icon="sort-asc-small" />
                        Command
                        </div>
                        <div className="k-columnmenu-item">
                            <Icon icon="sort-desc-small" />
                        Command
                        </div>
                    </div>
                </div>
            </PromptView>
        </PromptContent>
    </Prompt>
);
