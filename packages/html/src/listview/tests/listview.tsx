import { ListView, ListViewItem } from '../../listview';


const styles = `
    .k-listview-header,
    .k-listview-footer,
    .k-listview-item {
        padding: 10px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <section>
                <span>Listview - bottom pager</span>
                <ListView
                    header
                    footer
                    pageable
                    layout="flex"
                    flexDirection="col">
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem focus><div>Focus Item</div></ListViewItem>
                    <ListViewItem selected><div>Selected Item</div></ListViewItem>
                    <ListViewItem focus selected><div>Focus Selected Item</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Listview - top pager</span>
                <ListView
                    header
                    footer
                    pageable
                    pagerPosition="top"
                    layout="flex"
                    flexDirection="col">
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Listview - top pager</span>
                <ListView
                    header
                    footer
                    pageable
                    pagerPosition="top"
                    layout="flex"
                    flexDirection="col">
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                </ListView>
            </section>

        </div>
    </>
);
