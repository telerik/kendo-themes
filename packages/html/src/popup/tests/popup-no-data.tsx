import { List } from '../../list';
import { Searchbox } from '../../searchbox';
import { Popup } from '../../popup';


const style = `
    .k-animation-container {
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span>no data</span>
            <span>no data (rtl)</span>
            <span>w/ filtering</span>
            <span>w/ filtering (rtl)</span>

            <section>
                <Popup className="k-list-container">
                    <List>
                    </List>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <List>
                    </List>
                </Popup>
            </section>

            <section>
                <Popup className="k-list-container">
                    <div className="k-list-filter">
                        <Searchbox placeholder="Filter..." />
                    </div>
                    <List>
                    </List>
                </Popup>
            </section>

            <section dir="rtl">
                <Popup className="k-list-container">
                    <div className="k-list-filter">
                        <Searchbox placeholder="Filter..." />
                    </div>
                    <List>
                    </List>
                </Popup>
            </section>

        </div>
    </>
);
