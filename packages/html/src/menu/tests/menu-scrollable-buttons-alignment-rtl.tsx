import { MenuScrollable, MenuVerticalScrollable } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Horizontal Scrolling Menu RTL</span>
            <span></span>
            <span></span>

            <span>Scrollable Buttons Around (Default)</span>
            <span>Scrollable Buttons Start</span>
            <span>Scrollable Buttons End</span>

            <section>
                <MenuScrollable dir="rtl" wrapperStyles={{ width: "250px" }} scrollButtonsPosition={'around'} />
            </section>
            <section>
                <MenuScrollable dir="rtl" wrapperStyles={{ width: "250px" }} scrollButtonsPosition={'start'} />
            </section>
            <section>
                <MenuScrollable dir="rtl" wrapperStyles={{ width: "250px" }} scrollButtonsPosition={'end'} />
            </section>

            <span>Vertical Scrolling Menu RTL</span>
            <span></span>
            <span></span>

            <span>Scrollable Buttons Around (Default)</span>
            <span>Scrollable Buttons Start</span>
            <span>Scrollable Buttons End</span>

            <section>
                <MenuVerticalScrollable dir="rtl" wrapperStyles={{ height: "160px" }} scrollButtonsPosition={'around'} />
            </section>
            <section>
                <MenuVerticalScrollable dir="rtl" wrapperStyles={{ height: "160px" }} scrollButtonsPosition={'start'} />
            </section>
            <section>
                <MenuVerticalScrollable dir="rtl" wrapperStyles={{ height: "160px" }} scrollButtonsPosition={'end'} />
            </section>
        </div>

    </>
);
