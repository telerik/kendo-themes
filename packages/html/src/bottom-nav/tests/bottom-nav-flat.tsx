import { BottomNav, BottomNavNormal, BottomNavItem } from '../../bottom-nav';


const styles = `
    #test-area .colors {
        padding: 10px;
        gap: 10px;
    }
    #test-area .colors-flat {
        background-color: rgb(234, 234, 234);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <div className="colors colors-flat k-d-grid">
                {[ ...BottomNav.options.themeColor ].map((themeColor) => (
                    <>
                        <span>BottomNav {themeColor} theme color</span>
                        <section>
                            <BottomNavNormal themeColor={themeColor} border flow="vertical">
                                <BottomNavItem icon="envelope" text="Normal" />
                                <BottomNavItem icon="envelope" text="Focused" focus />
                                <BottomNavItem icon="envelope" text="Selected" selected />
                                <BottomNavItem icon="envelope" text="Disabled" disabled />
                            </BottomNavNormal>
                        </section>
                    </>
                ))}
            </div>
        </div>
    </>
);
