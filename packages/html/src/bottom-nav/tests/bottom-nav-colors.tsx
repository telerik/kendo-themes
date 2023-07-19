import { BottomNav, BottomNavItem } from '../../bottom-nav';


const styles = `
    #test-area .colors {
        padding: 10px 20px;
        gap: 20px;
    }
    #test-area .colors-flat {
        background-color: rgb(234, 234, 234);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <h2>Solid Colors</h2>
            <div className="colors k-d-grid k-grid-cols-2">
                <section>
                    <span className="k-col-start-1">Primary ThemeColor</span>
                    <BottomNav themeColor="primary" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Secondary ThemeColor</span>
                    <BottomNav themeColor="secondary" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Tertiary ThemeColor</span>
                    <BottomNav themeColor="tertiary" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Info ThemeColor</span>
                    <BottomNav themeColor="info" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Success ThemeColor</span>
                    <BottomNav themeColor="success" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Warning ThemeColor</span>
                    <BottomNav themeColor="warning" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Error ThemeColor</span>
                    <BottomNav themeColor="error" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Dark ThemeColor</span>
                    <BottomNav themeColor="dark" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Light ThemeColor</span>
                    <BottomNav themeColor="light" flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>
            </div>

            <h2>Flat Colors</h2>
            <div className="colors colors-flat k-d-grid k-grid-cols-2">
                <section>
                    <span>Primary ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="primary" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Secondary ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="secondary" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Tertiary ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="tertiary" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Info ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="info" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Success ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="success" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Warning ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="warning" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Error ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="error" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Dark ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="dark" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>

                <section>
                    <span>Light ThemeColor</span>
                    <BottomNav fillMode="flat" themeColor="light" border flow="vertical">
                        <BottomNavItem icon="envelope" text="Normal" />
                        <BottomNavItem icon="envelope" text="Focused" focus />
                        <BottomNavItem icon="envelope" text="Selected" selected />
                        <BottomNavItem icon="envelope" text="Disabled" disabled />
                    </BottomNav>
                </section>
            </div>
        </div>
    </>
);
