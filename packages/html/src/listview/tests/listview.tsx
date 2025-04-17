import { ListViewNormal, ListViewItem } from '../../listview';


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
        <div id="test-area" className="k-d-grid">

            <section>
                <span>Listview - bottom pager</span>
                <ListViewNormal
                    header
                    footer
                    pageable>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                </ListViewNormal>
            </section>

            <section>
                <span>ListViewItem - states</span>
                <ListViewNormal
                    header
                    footer>
                    <ListViewItem><div>Listview Item</div></ListViewItem>
                    <ListViewItem focus><div>Focus Item</div></ListViewItem>
                    <ListViewItem selected><div>Selected Item</div></ListViewItem>
                    <ListViewItem focus selected><div>Focus Selected Item</div></ListViewItem>
                </ListViewNormal>
            </section>

        </div>
    </>
);
