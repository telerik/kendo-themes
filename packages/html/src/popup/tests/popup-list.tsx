import { List, ListItem } from '../../list';
import { Popup } from '../../popup';


const style = `
    .k-animation-container {
        position: relative;
        overflow: visible;
    }

    .k-virtual-list > .k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-content .k-list-item {
        position: relative;
    }

    .k-popup {
        height: 200px;
    }

    .k-popup .k-list-container {
        height: 100%;
        display: flex;
        flex-flow: column nowrap;
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
                <Popup className="k-list-container">
                    <List>
                        <ListItem>Baseball</ListItem>
                        <ListItem>Basketball</ListItem>
                        <ListItem>Cricket</ListItem>
                        <ListItem>Field Hockey</ListItem>
                        <ListItem>Football</ListItem>
                        <ListItem>Table Tennis</ListItem>
                        <ListItem>Tennis</ListItem>
                        <ListItem>Volleyball</ListItem>
                        <ListItem>Baseball</ListItem>
                        <ListItem>Basketball</ListItem>
                        <ListItem>Cricket</ListItem>
                        <ListItem>Field Hockey</ListItem>
                        <ListItem>Football</ListItem>
                        <ListItem>Table Tennis</ListItem>
                        <ListItem>Tennis</ListItem>
                        <ListItem>Volleyball</ListItem>
                    </List>
                </Popup>
            </section>

            <section>
                <Popup className="k-list-container">
                    <List virtualization>
                        <ListItem>Baseball</ListItem>
                        <ListItem>Basketball</ListItem>
                        <ListItem>Cricket</ListItem>
                        <ListItem>Field Hockey</ListItem>
                        <ListItem>Football</ListItem>
                        <ListItem>Table Tennis</ListItem>
                        <ListItem>Tennis</ListItem>
                        <ListItem>Volleyball</ListItem>
                    </List>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List>
                        <ListItem>Baseball</ListItem>
                        <ListItem>Basketball</ListItem>
                        <ListItem>Cricket</ListItem>
                        <ListItem>Field Hockey</ListItem>
                        <ListItem>Football</ListItem>
                        <ListItem>Table Tennis</ListItem>
                        <ListItem>Tennis</ListItem>
                        <ListItem>Volleyball</ListItem>
                    </List>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List virtualization>
                        <ListItem>Baseball</ListItem>
                        <ListItem>Basketball</ListItem>
                        <ListItem>Cricket</ListItem>
                        <ListItem>Field Hockey</ListItem>
                        <ListItem>Football</ListItem>
                        <ListItem>Table Tennis</ListItem>
                        <ListItem>Tennis</ListItem>
                        <ListItem>Volleyball</ListItem>
                    </List>
                </Popup>
            </section>

        </div>
    </>
);
