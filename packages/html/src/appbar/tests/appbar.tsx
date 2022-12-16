import React from 'react';
import ReactDOM from 'react-dom/client';
import { Appbar } from '../appbar';
import { AppbarSection } from '../appbar-section';
import { Icon } from '../../icon';
import { Textbox } from '../../textbox';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        background-color: #f3f5f7;
    }
    .title {
        font-size: 19px;
        margin: 0;
    }
    .k-icon {
        width: 30px;
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

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <section>
                <h4>Appbar Sticky and Inherit ThemeColor</h4>
                <div style={{ background: "#1976d2", color: "#fff" }}>
                    <Appbar positionMode={'sticky'} themeColor={'inherit'}>
                        <AppbarSection>
                            <Icon name="menu" />
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
                            <Icon name="sliders" />
                            <Icon name="bell" />
                            <span className="k-appbar-separator"></span>
                            <Icon name="user" />
                        </AppbarSection>
                    </Appbar>
                </div>
            </section>


            <section>
                <h4>Appbar Light ThemeColor</h4>
                <Appbar themeColor={'light'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>


            <section>
                <h4>Appbar Dark ThemeColor</h4>
                <Appbar themeColor={'dark'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Primary ThemeColor</h4>
                <Appbar themeColor={'primary'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Secondary ThemeColor</h4>
                <Appbar themeColor={'secondary'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Tertiary ThemeColor</h4>
                <Appbar themeColor={'tertiary'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Info ThemeColor</h4>
                <Appbar themeColor={'info'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Success ThemeColor</h4>
                <Appbar themeColor={'success'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Warning ThemeColor</h4>
                <Appbar themeColor={'warning'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Error ThemeColor</h4>
                <Appbar themeColor={'error'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Appbar Inverse ThemeColor</h4>
                <Appbar themeColor={'inverse'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>Sticky AppBar</h4>
                <Appbar themeColor={'light'} positionMode={'sticky'}>
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

            <section>
                <h4>RTL AppBar</h4>
                <Appbar themeColor={'light'} dir="rtl">
                    <AppbarSection>
                        <Icon name="menu" />
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
                        <Icon name="sliders" />
                        <Icon name="bell" />
                        <span className="k-appbar-separator"></span>
                        <Icon name="user" />
                    </AppbarSection>
                </Appbar>
            </section>

        </div>
    </>
);
