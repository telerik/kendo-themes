import { ContextMenuNormal } from "../../context-menu";
import { MenuListItem } from "../../menu";
import { Popup } from "../../popup";
import { PromptInline } from "../templates/prompt-inline";

const styles = `
    #test-area > section {
        height: 300px;
    }

    .k-animation-container:first-child {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>AI Powered Editor Inline Prompt</span>
            <span>Inline Prompt Opened Menu</span>

            <section>
                <Popup className="k-prompt-popup" animationStyle={{width: "420px"}}>
                    <PromptInline text="Suggested response content from external service may be presented here so it could update or inserted after a selection, or just discarded." />
                </Popup>
            </section>

            <section>
                <>
                    <Popup className="k-prompt-popup" animationStyle={{width: "420px"}}>
                        <PromptInline text="Suggested response content from external service may be presented here so it could update or inserted after a selection, or just discarded." />
                    </Popup>
                    <>
                        <Popup className="k-menu-popup">
                            <ContextMenuNormal>
                                <MenuListItem first icon="arrow-rotate-cw" text="Rewrite"></MenuListItem>
                                <MenuListItem icon="spell-checker" text="Fix mistakes"></MenuListItem>
                                <MenuListItem icon="tell-a-friend" text="Change tone" showArrow hover></MenuListItem>
                                <MenuListItem icon="spell-checker" text="Polish formatting"></MenuListItem>
                                <MenuListItem icon="col-resize" text="Adjust length" showArrow></MenuListItem>
                                <MenuListItem last icon="edit-tools" text="Translate" showArrow></MenuListItem>
                            </ContextMenuNormal>
                        </Popup>

                        <Popup className="k-menu-popup" offset={{ left: "689px", top: "353px"}}>
                            <ContextMenuNormal>
                                <MenuListItem first text="Neutral" hover></MenuListItem>
                                <MenuListItem text="Friendly"></MenuListItem>
                                <MenuListItem text="Casual"></MenuListItem>
                                <MenuListItem last text="Formal"></MenuListItem>
                            </ContextMenuNormal>
                        </Popup>
                    </>
                </>
            </section>

            <span>Inline Prompt Long Text</span>
            <span></span>

            <section>
                <>
                    <Popup className="k-prompt-popup" animationStyle={{width: "420px"}}>
                        <PromptInline text=
                            "Lorem ipsum odor amet, consectetuer adipiscing elit. Aliquet orci gravida taciti vestibulum litora justo volutpat cursus. Sed lectus quisque nibh maximus mattis vivamus non venenatis congue. Vulputate tristique urna molestie natoque rutrum aliquam aptent. Accumsan ex quisque mollis suspendisse duis amet id. Metus suscipit tincidunt neque neque torquent justo litora nisi nostra. Vivamus porttitor fermentum class sollicitudin; litora fermentum per.Accumsan ornare quisque conubia montes hac interdum. Potenti mauris pharetra iaculis nam a. Elit scelerisque rhoncus accumsan inceptos malesuada habitant pulvinar condimentum curabitur. Sit potenti massa praesent id sodales cras duis. Erat augue litora interdum convallis, rhoncus blandit. Maecenas elementum quisque lacinia erat maximus sem tincidunt dis. Convallis potenti class turpis curabitur taciti diam vehicula."
                        />
                    </Popup>
                </>
            </section>

        </div>
    </>
);
