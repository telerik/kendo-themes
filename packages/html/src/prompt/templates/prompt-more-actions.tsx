import { IconTextButton, IconButton } from "../../button";
import { Toolbar } from "../../toolbar";
import { Prompt, PromptContent, PromptHeader, PromptView } from "..";

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
                <ul className="k-panelbar">
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Command</span>
                        </span>
                    </li>
                    <li className="k-panelbar-header k-item k-expanded k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Command Expanded</span>
                            <span className="k-panelbar-toggle k-panelbar-collapse k-icon k-svg-icon k-svg-i-chevron-up">
                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="m129.941 353.941 126.06-126.06 126.061 126.06L416 320 256.001 160 96 320z"></path>
                                </svg>
                            </span>
                        </span>
                        <ul className="k-panelbar-group k-panel k-group">
                            <li className="k-panelbar-item k-item k-expanded k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child Expanded</span>
                                    <span className="k-panelbar-toggle k-panelbar-collapse k-icon k-svg-icon k-svg-i-chevron-up">
                                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="m129.941 353.941 126.06-126.06 126.061 126.06L416 320 256.001 160 96 320z"></path>
                                        </svg>
                                    </span>
                                </span>
                                <ul className="k-panelbar-group k-panel k-group">
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                    <li className="k-panelbar-item k-item k-level-2">
                                        <span className="k-link">
                                            <span className="k-panelbar-item-text">Child</span>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="k-panelbar-item k-item k-level-1">
                                <span className="k-link">
                                    <span className="k-panelbar-item-text">Child</span>
                                </span>
                            </li>
                        </ul>
                    </li>
                    <li className="k-panelbar-header k-item k-level-0">
                        <span className="k-link">
                            <span className="k-panelbar-item-text">Command</span>
                        </span>
                    </li>
                </ul>
            </PromptView>
        </PromptContent>
    </Prompt>
);
