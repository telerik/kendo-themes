import { Appbar, AppbarSection } from '../../appbar';
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
            <span>Appbar Sticky and Inherit ThemeColor</span>
            <section>
                <div style={{ background: "#1976d2", color: "#fff" }}>
                    <Appbar positionMode={'sticky'} themeColor={'inherit'}>
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
                    </Appbar>
                </div>
            </section>

            <span>Appbar Light ThemeColor</span>
            <section>
                <Appbar themeColor={'light'}>
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
                </Appbar>
            </section>

            <span>Appbar Dark ThemeColor</span>
            <section>
                <Appbar themeColor={'dark'}>
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
                </Appbar>
            </section>

            <span>Appbar Primary ThemeColor</span>
            <section>
                <Appbar themeColor={'primary'}>
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
                </Appbar>
            </section>

            <span>Appbar Secondary ThemeColor</span>
            <section>
                <Appbar themeColor={'secondary'}>
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
                </Appbar>
            </section>

            <span>Appbar Tertiary ThemeColor</span>
            <section>
                <Appbar themeColor={'tertiary'}>
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
                </Appbar>
            </section>

            <span>Appbar Info ThemeColor</span>
            <section>
                <Appbar themeColor={'info'}>
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
                </Appbar>
            </section>

            <span>Appbar Success ThemeColor</span>
            <section>
                <Appbar themeColor={'success'}>
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
                </Appbar>
            </section>

            <span>Appbar Warning ThemeColor</span>
            <section>
                <Appbar themeColor={'warning'}>
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
                </Appbar>
            </section>

            <span>Appbar Error ThemeColor</span>
            <section>
                <Appbar themeColor={'error'}>
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
                </Appbar>
            </section>

            <span>Appbar Inverse ThemeColor</span>
            <section>
                <Appbar themeColor={'inverse'}>
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
                </Appbar>
            </section>

            <span>Sticky AppBar</span>
            <section>
                <Appbar themeColor={'light'} positionMode={'sticky'}>
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
                </Appbar>
            </section>

            <span>RTL AppBar</span>
            <section>
                <Appbar themeColor={'light'} dir="rtl">
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
                </Appbar>
            </section>

        </div>
    </>
);
