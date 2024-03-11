import { PanelBar, PanelBarGroup, PanelBarContent, PanelBarItem } from '..';


const styles = `
    .k-sprite {
        background-color: gray;
    }
    .k-image {
        width: 16px;
        height: 16px;
        display: inline-block;
        background-color: gold;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <section className="k-rtl">
                <PanelBar>
                    <PanelBarItem header icon="gear" text="Root">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem hover header iconClass="k-image" text="Root hover">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem focus header iconClass="k-sprite" text="Root focus">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem hover focus header iconClass="k-sprite" text="Root hover&focus">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem disabled header text="Root disabled">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem selected header text="Root selected">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem selected hover header text="Root selected hover">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem selected focus header text="Root selected focus">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem selected hover focus header text="Root selected hover&focus">
                        <PanelBarContent>content</PanelBarContent>
                    </PanelBarItem>
                </PanelBar>
            </section>

            <section className="k-rtl">
                <PanelBar>
                    <PanelBarItem header text="First" />
                    <PanelBarItem header expanded text="Middle expanded">
                        <PanelBarGroup>
                            <PanelBarItem level={1} icon="gear" text="Child" />
                            <PanelBarItem hover level={1} text="Child hover" />
                            <PanelBarItem focus level={1} text="Child focus" />
                            <PanelBarItem focus hover level={1} text="Child focus&hover" />
                            <PanelBarItem selected level={1} text="Child selected" />
                            <PanelBarItem selected hover level={1} text="Child selected hover" />
                            <PanelBarItem selected focus level={1} text="Child selected focus" />
                            <PanelBarItem selected focus hover level={1} text="Child selected focus&hover" />
                            <PanelBarItem level={1} expanded text="Child expanded">
                                <PanelBarGroup>
                                    <PanelBarItem level={2} text="Child" />
                                    <PanelBarItem level={2} text="Child" />
                                    <PanelBarItem level={2} text="Child" />
                                </PanelBarGroup>
                            </PanelBarItem>
                            <PanelBarItem disabled level={1} text="Child disabled">
                                <PanelBarContent>content</PanelBarContent>
                            </PanelBarItem>
                            <PanelBarItem level={1} text="Child last" />
                        </PanelBarGroup>
                    </PanelBarItem>
                    <PanelBarItem header text="Last" />
                </PanelBar>
            </section>

            <section className="k-rtl">
                <PanelBar>
                    <PanelBarItem header expanded text="First expanded">
                        <PanelBarContent>
                            <h4>Title in template</h4>
                            <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                        </PanelBarContent>
                    </PanelBarItem>
                    <PanelBarItem header text="Middle" />
                    <PanelBarItem header text="Last" />
                </PanelBar>
            </section>

            <section className="k-rtl">
                <PanelBar>
                    <PanelBarItem header text="First" />
                    <PanelBarItem header text="Middle" />
                    <PanelBarItem header expanded text="Last expanded">
                        <PanelBarContent>
                            <h4>Title in template</h4>
                            <p>Multi line paragraph in template. Some more content to break onto multiple lines</p>
                        </PanelBarContent>
                    </PanelBarItem>
                </PanelBar>
            </section>
        </div>
    </>
);
