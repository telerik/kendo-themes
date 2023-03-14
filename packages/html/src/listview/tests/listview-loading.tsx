import React from 'react';
import ReactDOM from 'react-dom/client';
import { ListView, ListViewItem } from '../../listview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-listview {
        height: 300px;
    }
`;

root.render(
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
