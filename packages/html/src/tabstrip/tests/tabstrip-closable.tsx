import { TabStripClosable } from '../templates/tabstrip-closable';

export default () => (
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <section>
                <TabStripClosable />
            </section>

            <section>
                <TabStripClosable position="bottom" />
            </section>

            <section>
                <TabStripClosable position="left" />
            </section>

            <section>
                <TabStripClosable position="right" />
            </section>

        </div>
    </>
);
