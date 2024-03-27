import { PopoverNormal } from '../../popover';


const styles = `
    .k-popover {
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">
            <span>Callout top</span>
            <span>Callout right</span>
            <span>Callout bottom</span>
            <span>Callout left</span>
            <span>Empty body fixed height</span>

            <section>
                <PopoverNormal callout="top" />
            </section>

            <section>
                <PopoverNormal callout="right" />
            </section>

            <section>
                <PopoverNormal callout="bottom" />
            </section>

            <section>
                <PopoverNormal callout="left" />
            </section>

            <section>
                <PopoverNormal callout="left" body={null} children={null} style={{ height: "150px" }} />
            </section>
        </div>
    </>
);
