import { ListWithGrouping, VirtualListWithGrouping, ListWithGroupingModern, VirtualListWithGroupingModern } from '../../list';

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

            <span>Angular</span>
            <span>Angular virtual</span>
            <span>Angular (rtl)</span>
            <span>Angular virtual (rtl)</span>

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
        </div>
    </>
);
