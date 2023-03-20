import ReactDOM from 'react-dom/client';
import { List } from '../../list';
import { Searchbox } from '../../searchbox';
import { Popup } from '../../popup';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const style = `
    .k-animation-container {
        position: relative;
        overflow: visible;
    }
`;

root.render(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>no data</span>
            <span>no data (rtl)</span>
            <span>w/ filtering</span>
            <span>w/ filtering (rtl)</span>

            <section>
                <div className="k-animation-container">
                    <Popup className="k-list-container">
                        <List>
                        </List>
                    </Popup>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-animation-container">
                    <Popup className="k-list-container">
                        <List>
                        </List>
                    </Popup>
                </div>
            </section>

            <section>
                <div className="k-animation-container">
                    <Popup className="k-list-container">
                        <div className="k-list-filter">
                            <Searchbox placeholder="Filter..." />
                        </div>
                        <List>
                        </List>
                    </Popup>
                </div>
            </section>

            <section dir="rtl">
                <div className="k-animation-container">
                    <Popup className="k-list-container">
                        <div className="k-list-filter">
                            <Searchbox placeholder="Filter..." />
                        </div>
                        <List>
                        </List>
                    </Popup>
                </div>
            </section>

        </div>
    </>
);
