import { IconTextButton, IconButton } from "../../button";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptContent, PromptHeader, PromptView } from "..";
import { PanelBar, PanelBarGroup, PanelBarItem } from "../../panelbar";

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
                <PanelBar>
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
                </PanelBar>
            </PromptView>
        </PromptContent>
    </Prompt>
);
