import { IconButton } from "../../button/templates/icon-button";
import { IconTextButton } from "../../button/templates/icon-text-button";
import { Toolbar } from "../../toolbar/toolbar.spec";
import { Prompt } from "../prompt.spec";
import { PromptContent } from "../prompt-content";
import { PromptHeader } from "../prompt-header";
import { PromptView } from "../prompt-view";
import { PanelBarGroup } from "../../panelbar/panelbar-group";
import { PanelBarItem } from "../../panelbar/panelbar-item";
import { PanelBarNormal } from "../../panelbar/templates/panelbar-normal";

export const PromptMoreActions = (props) => (
    <Prompt
        {...props}
    >
        <PromptHeader>
            <Toolbar fillMode="flat">
                <IconTextButton fillMode="flat" themeColor="primary" icon="sparkles" rounded="full">Ask AI</IconTextButton>
                <IconTextButton fillMode="flat" themeColor="primary" icon="comment" rounded="full">Output</IconTextButton>
                <IconButton fillMode="flat" themeColor="primary" icon="more-horizontal" rounded="full" selected></IconButton>
            </Toolbar>
        </PromptHeader>
        <PromptContent>
            <PromptView>
                <PanelBarNormal>
                    <PanelBarItem header text="Command"/>
                    <PanelBarItem header expanded text="Command Expanded">
                        <PanelBarGroup>
                            <PanelBarItem level={1} expanded text="Child Expanded">
                                <PanelBarGroup>
                                    <PanelBarItem level={2} text="Child"/>
                                    <PanelBarItem level={2} text="Child"/>
                                    <PanelBarItem level={2} text="Child"/>
                                </PanelBarGroup>
                            </PanelBarItem>
                            <PanelBarItem level={1} text="Child"/>
                        </PanelBarGroup>
                    </PanelBarItem>
                    <PanelBarItem header text="Command"/>
                </PanelBarNormal>
            </PromptView>
        </PromptContent>
    </Prompt>
);
