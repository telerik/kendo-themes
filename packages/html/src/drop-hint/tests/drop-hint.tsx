import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 860px;
    }

    section {
        position: relative;
        height: 100px;
        transform: translate(50%, 50%);
    }

    .k-drop-hint-h {
        width: 80px;
    }

    .k-drop-hint-v {
        height: 80px;
    }

    .title {
        grid-column: 1 / 8;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-7">
            <span className="title">Horizontal</span>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-start"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-line"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-start"></div>
                    <div className="k-drop-hint-line"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-start"></div>
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-line"></div>
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-h">
                    <div className="k-drop-hint-start"></div>
                    <div className="k-drop-hint-line"></div>
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <span className="title">Vertical</span>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-start"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-line"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-start"></div>
                    <div className="k-drop-hint-line"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-start"></div>
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-line"></div>
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>

            <section>
                <div className="k-drop-hint k-drop-hint-v">
                    <div className="k-drop-hint-start"></div>
                    <div className="k-drop-hint-line"></div>
                    <div className="k-drop-hint-end"></div>
                </div>
            </section>
        </div>
    </>
);
