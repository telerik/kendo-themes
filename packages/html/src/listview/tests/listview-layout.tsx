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
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>Flex layout - row</span>
                <ListViewNormal>
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListViewNormal>
            </section>

            <section>
                <span>Flex layout - row reverse</span>
                <ListViewNormal flexDirection="row-reverse">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListViewNormal>
            </section>

            <section>
                <span>Flex layout - column</span>
                <ListViewNormal flexDirection="col">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListViewNormal>
            </section>

            <section>
                <span>Flex layout - column reverse</span>
                <ListViewNormal flexDirection="col-reverse">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListViewNormal>
            </section>

            <section>
                <span>Grid layout</span>
                <ListViewNormal layout="grid" gridColumns={2}>
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListViewNormal>
            </section>

        </div>
    </>
);
