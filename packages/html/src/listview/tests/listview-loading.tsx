import { ListView, ListViewItem } from '../../listview';


const styles = `
    .k-listview {
        height: 300px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area">
            <span>Listview with states</span>
            <ListView
                header
                footer
                pageable
                loading
                className="k-d-flex">
                <ListViewItem><div>Listview Item</div></ListViewItem>
                <ListViewItem><div>Listview Item</div></ListViewItem>
                <ListViewItem><div>Listview Item</div></ListViewItem>
                <ListViewItem><div>Listview Item</div></ListViewItem>
            </ListView>
        </div>
    </>
);
