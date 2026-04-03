import { ListView, ListViewItem } from '../../listview';

export const ListViewSelectable = (props) => (
    <ListView selectable contentAriaLabel="Selectable list" children={
        <>
            <ListViewItem itemRole="option" ariaSetSize={3} ariaPosInSet={1} tabIndex={0} selected><div>Listview Item</div></ListViewItem>
            <ListViewItem itemRole="option" ariaSetSize={3} ariaPosInSet={2}><div>Listview Item</div></ListViewItem>
            <ListViewItem itemRole="option" ariaSetSize={3} ariaPosInSet={3}><div>Listview Item</div></ListViewItem>
        </>
    }
    {...props}>
    </ListView>
);
