import { PopoverNormal } from '../../popover';


const styles = `
    .k-animation-container {
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <section>
                <span>Callout top</span>
                <PopoverNormal callout="top" />
            </section>

            <section>
                <span>Callout right</span>
                <PopoverNormal callout="right" />
            </section>

            <section>
                <span>Callout bottom</span>
                <PopoverNormal callout="bottom" />
            </section>

            <section>
                <span>Callout left</span>
                <PopoverNormal callout="left" />
            </section>

            <section>
                <span>Empty body fixed height</span>
                <PopoverNormal callout="left" body={null} children={null} style={{ height: "150px" }} />
            </section>
        </div>
    </>
);
