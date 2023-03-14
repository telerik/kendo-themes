import React from 'react';
import ReactDOM from 'react-dom/client';
import { ListView, ListViewItem } from '../../listview';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    .k-listview-header,
    .k-listview-footer,
    .k-listview-item {
        padding: 10px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <span>Flex layout - row</span>
                <ListView>
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Flex layout - row reverse</span>
                <ListView flexDirection="row-reverse">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Flex layout - column</span>
                <ListView flexDirection="col">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Flex layout - column reverse</span>
                <ListView flexDirection="col-reverse">
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

            <section>
                <span>Grid layout</span>
                <ListView layout="grid" gridColumns={2}>
                    <ListViewItem><div>Listview Item 1</div></ListViewItem>
                    <ListViewItem><div>Listview Item 2</div></ListViewItem>
                    <ListViewItem><div>Listview Item 3</div></ListViewItem>
                    <ListViewItem><div>Listview Item 4</div></ListViewItem>
                </ListView>
            </section>

        </div>
    </>
);
