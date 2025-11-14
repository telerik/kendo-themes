import { ListWithGrouping, VirtualListWithGrouping, ListWithGroupingModern, VirtualListWithGroupingModern, ListWithGroupingAccessible, VirtualListWithGroupingAccessible } from '../../list';

const style = `
    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Universal</span>
            <span>Universal virtual</span>
            <span>Universal (rtl)</span>
            <span>Universal virtual (rtl)</span>

            <section>
                <ListWithGrouping></ListWithGrouping>
            </section>

            <section>
                <VirtualListWithGrouping></VirtualListWithGrouping>
            </section>

            <section dir="rtl">
                <ListWithGrouping></ListWithGrouping>
            </section>

            <section dir="rtl">
                <VirtualListWithGrouping></VirtualListWithGrouping>
            </section>

            <span>Modern</span>
            <span>Modern virtual</span>
            <span>Modern (rtl)</span>
            <span>Modern virtual (rtl)</span>

            <section>
                <ListWithGroupingModern></ListWithGroupingModern>
            </section>

            <section>
                <VirtualListWithGroupingModern></VirtualListWithGroupingModern>
            </section>

            <section dir="rtl">
                <ListWithGroupingModern></ListWithGroupingModern>
            </section>

            <section dir="rtl">
                <VirtualListWithGroupingModern></VirtualListWithGroupingModern>
            </section>

            <span>Accessible</span>
            <span>Accessible virtual</span>
            <span>Accessible (rtl)</span>
            <span>Accessible virtual (rtl)</span>

            <section>
                <ListWithGroupingAccessible></ListWithGroupingAccessible>
            </section>

            <section>
                <VirtualListWithGroupingAccessible></VirtualListWithGroupingAccessible>
            </section>

            <section dir="rtl">
                <ListWithGroupingAccessible></ListWithGroupingAccessible>
            </section>

            <section dir="rtl">
                <VirtualListWithGroupingAccessible></VirtualListWithGroupingAccessible>
            </section>
        </div>
    </>
);
