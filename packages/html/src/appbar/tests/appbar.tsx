import { Appbar, AppbarNormal, AppbarSection } from '../../appbar';
import { Icon } from '../../icon';
import { Textbox } from '../../textbox';


const styles = `
    #test-area {
        background-color: #f3f5f7;
    }
    .title {
        font-size: 19px;
        margin: 0;
    }
    .k-icon {
        margin-inline: 7px;
        text-align: center;
    }
    ul {
        font-size: 12px;
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
    }

    li {
        margin: 0 12px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>Appbar sticky and inherit color</span>
            <section>
                <div style={{ background: "#1976d2", color: "#fff" }}>
                    <AppbarNormal positionMode={'sticky'}>
                        <AppbarSection>
                            <Icon icon="menu" />
                        </AppbarSection>
                        <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                        <AppbarSection>
                            <h1 className="title">Page Title</h1>
                        </AppbarSection>
                        <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                        <AppbarSection>
                            <ul>
                                <li>Menu Item</li>
                                <li>Menu Item</li>
                                <li>Menu Item</li>
                            </ul>
                        </AppbarSection>

                        <span className="k-spacer"></span>

                        <AppbarSection>
                            <Textbox placeholder="Search..." />
                        </AppbarSection>

                        <AppbarSection>
                            <Icon icon="sliders" />
                            <Icon icon="bell" />
                            <span className="k-appbar-separator"></span>
                            <Icon icon="user" />
                        </AppbarSection>
                    </AppbarNormal>
                </div>
            </section>

            {[ ...Appbar.options.themeColor ].map((themeColor) => (
                <>
                    <span>Appbar {themeColor} theme color</span>
                    <section>
                        <AppbarNormal fillMode="solid" themeColor={themeColor}>
                            <AppbarSection>
                                <Icon icon="menu" />
                            </AppbarSection>
                            <span className="k-spacer k-spacer-sized" style={{ width: "8px" }}></span>
                            <AppbarSection>
                                <h1 className="title">Page Title</h1>
                            </AppbarSection>
                            <span className="k-spacer k-spacer-sized" style={{ width: "32px" }}></span>
                            <AppbarSection>
                                <ul>
                                    <li>Menu Item</li>
                                    <li>Menu Item</li>
                                    <li>Menu Item</li>
                                </ul>
                            </AppbarSection>

                            <span className="k-spacer"></span>

                            <AppbarSection>
                                <Textbox placeholder="Search..." />
                            </AppbarSection>

                            <AppbarSection>
                                <Icon icon="sliders" />
                                <Icon icon="bell" />
                                <span className="k-appbar-separator"></span>
                                <Icon icon="user" />
                            </AppbarSection>
                        </AppbarNormal>
                    </section>
                </>
            ))}
        </div>
    </>
);
