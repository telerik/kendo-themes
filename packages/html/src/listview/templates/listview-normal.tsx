import { ListView, ListViewItem } from '../../listview';

export const ListViewNormal = (props) => (
    <ListView children={
        <>
            <ListViewItem itemRole="listitem" ariaSetSize={3} ariaPosInSet={1} tabIndex={0}><div>Listview Item</div></ListViewItem>
            <ListViewItem itemRole="listitem" ariaSetSize={3} ariaPosInSet={2}><div>Listview Item</div></ListViewItem>
            <ListViewItem itemRole="listitem" ariaSetSize={3} ariaPosInSet={3}><div>Listview Item</div></ListViewItem>
        </>
    }
    {...props}>
    </ListView>
);
