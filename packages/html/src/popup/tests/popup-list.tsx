import React from 'react';
import ReactDOM from 'react-dom/client';
import { List, ListAngular, ListItem } from '../../list';
import { Popup } from '../../popup';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

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

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>Universal</span>
            <span>Universal virtual</span>
            <span>Universal (rtl)</span>
            <span>Universal virtual (rtl)</span>

            <section>
                <div className="k-animation-container">
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
                </div>
            </section>

            <section>
                <div className="k-animation-container">
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
                </div>
            </section>

            <section dir="rtl">
                <div className="k-animation-container">
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
                </div>
            </section>

            <section dir="rtl">
                <div className="k-animation-container">
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
                </div>
            </section>

            <span>Angular</span>
            <span>Angular virtual</span>
            <span>Angular (rtl)</span>
            <span>Angular virtual (rtl)</span>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <Popup className="k-list-container">
                        <ListAngular>
                            <ListItem>Baseball</ListItem>
                            <ListItem>Basketball</ListItem>
                            <ListItem>Cricket</ListItem>
                            <ListItem>Field Hockey</ListItem>
                            <ListItem>Football</ListItem>
                            <ListItem>Table Tennis</ListItem>
                            <ListItem>Tennis</ListItem>
                            <ListItem>Volleyball</ListItem>
                        </ListAngular>
                    </Popup>
                </div>
            </section>

            <section>
                <div className="k-animation-container k-animation-container-shown">
                    <Popup className="k-list-container">
                        <ListAngular virtualization>
                            <ListItem>Baseball</ListItem>
                            <ListItem>Basketball</ListItem>
                            <ListItem>Cricket</ListItem>
                            <ListItem>Field Hockey</ListItem>
                            <ListItem>Football</ListItem>
                            <ListItem>Table Tennis</ListItem>
                            <ListItem>Tennis</ListItem>
                            <ListItem>Volleyball</ListItem>
                        </ListAngular>
                    </Popup>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-animation-container k-animation-container-shown">
                    <Popup className="k-list-container">
                        <ListAngular>
                            <ListItem>Baseball</ListItem>
                            <ListItem>Basketball</ListItem>
                            <ListItem>Cricket</ListItem>
                            <ListItem>Field Hockey</ListItem>
                            <ListItem>Football</ListItem>
                            <ListItem>Table Tennis</ListItem>
                            <ListItem>Tennis</ListItem>
                            <ListItem>Volleyball</ListItem>
                        </ListAngular>
                    </Popup>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-animation-container k-animation-container-shown">
                    <Popup className="k-popup">
                        <ListAngular virtualization>
                            <ListItem>Baseball</ListItem>
                            <ListItem>Basketball</ListItem>
                            <ListItem>Cricket</ListItem>
                            <ListItem>Field Hockey</ListItem>
                            <ListItem>Football</ListItem>
                            <ListItem>Table Tennis</ListItem>
                            <ListItem>Tennis</ListItem>
                            <ListItem>Volleyball</ListItem>
                        </ListAngular>
                    </Popup>
                </div>
            </section>

        </div>
    </>
);
