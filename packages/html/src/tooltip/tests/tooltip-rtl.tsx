import { Icon } from '../../icon';


const style = `
        .k-animation-container {
            display: inline-block;
            position: relative;
            overflow: visible;
        }

        .k-tooltip {
            position: relative;
        }
`;


export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span className="col-4">RTL</span>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip" dir="rtl">
                        <div className="k-tooltip-content">tooltip content</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip k-tooltip-closable" dir="rtl">
                        <div className="k-tooltip-content">tooltip content</div>
                        <div className="k-tooltip-button"><Icon icon="x"></Icon></div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip" dir="rtl">
                        <div className="k-tooltip-content">long tooltip content. Enough so it goes on another line</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip k-tooltip-closable" dir="rtl">
                        <div className="k-tooltip-content">long tooltip content. Enough so it goes on another line</div>
                        <div className="k-tooltip-button"><Icon icon="x"></Icon></div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip" dir="rtl">
                        <div className="k-tooltip-content">
                            <div className="k-tooltip-title">Tooltip title</div>
                            tooltip content
                        </div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip k-tooltip-closable" dir="rtl">
                        <div className="k-tooltip-content">
                            <div className="k-tooltip-title">Tooltip title</div>
                            tooltip content
                        </div>
                        <div className="k-tooltip-button"><Icon icon="x"></Icon></div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip" dir="rtl">
                        <div className="k-tooltip-content">
                            <div className="k-tooltip-title">
                                g y p q
                                f t d l
                            </div>
                            long tooltip content. Enough so it goes on another line
                        </div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip k-tooltip-closable" dir="rtl">
                        <div className="k-tooltip-content">
                            <div className="k-tooltip-title">
                                g y p q
                                f t d l
                            </div>
                            long tooltip content. Enough so it goes on another line
                        </div>
                        <div className="k-tooltip-button"><Icon icon="x"></Icon></div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
        </div>
    </>
);
