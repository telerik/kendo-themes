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

            <span>Callout top</span>
            <span>Callout right</span>
            <span>Callout bottom</span>
            <span>Callout left</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-popup-transparent">
                        <div className="k-tooltip">
                            <div className="k-tooltip-content">angular tooltip</div>
                            <div className="k-callout k-callout-n"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-popup-transparent">
                        <div className="k-tooltip">
                            <div className="k-tooltip-content">angular tooltip</div>
                            <div className="k-callout k-callout-e"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-popup-transparent">
                        <div className="k-tooltip">
                            <div className="k-tooltip-content">angular tooltip</div>
                            <div className="k-callout k-callout-s"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-popup k-popup-transparent">
                        <div className="k-tooltip">
                            <div className="k-tooltip-content">angular tooltip</div>
                            <div className="k-callout k-callout-w"></div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-widget k-popup k-tooltip">
                        <div className="k-tooltip-content">jquery tooltip</div>
                        <div className="k-callout k-callout-n"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-widget k-popup k-tooltip">
                        <div className="k-tooltip-content">jquery tooltip</div>
                        <div className="k-callout k-callout-e"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-widget k-popup k-tooltip">
                        <div className="k-tooltip-content">jquery tooltip</div>
                        <div className="k-callout k-callout-s"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-widget k-popup k-tooltip">
                        <div className="k-tooltip-content">jquery tooltip</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
                        <div className="k-tooltip-content">react tooltip</div>
                        <div className="k-callout k-callout-n"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
                        <div className="k-tooltip-content">react tooltip</div>
                        <div className="k-callout k-callout-e"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
                        <div className="k-tooltip-content">react tooltip</div>
                        <div className="k-callout k-callout-s"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
                        <div className="k-tooltip-content">react tooltip</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>

            <span>Content</span>
            <span>Closable</span>
            <span>Long content</span>
            <span>Long content closable</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
                        <div className="k-tooltip-content">tooltip content</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip k-tooltip-closable">
                        <div className="k-tooltip-content">tooltip content</div>
                        <div className="k-tooltip-button"><Icon icon="x"></Icon></div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
                        <div className="k-tooltip-content">long tooltip content. Enough so it goes on another line</div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip k-tooltip-closable">
                        <div className="k-tooltip-content">long tooltip content. Enough so it goes on another line</div>
                        <div className="k-tooltip-button"><Icon icon="x"></Icon></div>
                        <div className="k-callout k-callout-w"></div>
                    </div>
                </div>
            </section>

            <span>Title</span>
            <span>Title closable</span>
            <span>Title with glyphs</span>
            <span>Title with glyphs closable</span>

            <section>
                <div className="k-animation-container">
                    <div className="k-tooltip">
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
                    <div className="k-tooltip k-tooltip-closable">
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
                    <div className="k-tooltip">
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
                    <div className="k-tooltip k-tooltip-closable">
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
