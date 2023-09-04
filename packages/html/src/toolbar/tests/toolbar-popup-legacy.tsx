import { Button } from '../../button';


const style = `
    .k-animation-container {
        width: min-content;
        position: relative;
        overflow: visible;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">

            <span>Normal</span>
            <span>With Icon</span>
            <span>With Separator</span>

            <section>
                <div className="k-animation-container k-overflow-wrapper">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 1</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 2</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 3</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item 1</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item 2</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item 3</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section>
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 1</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 2</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 3</Button>
                        </li>
                        <li className="k-item">
                            <div className="k-separator k-separator-horizontal"></div>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item after separator</Button>
                        </li>
                    </ul>
                </div>
            </section>

            <span className="k-colspan-all k-col-span-full">rtl</span>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container k-overflow-wrapper">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 1</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 2</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 3</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item 1</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item 2</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item 3</Button>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="k-rtl" dir="rtl">
                <div className="k-animation-container">
                    <ul className="k-reset k-popup k-group k-list-container k-overflow-container">
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 1</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 2</Button>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button">Item 3</Button>
                        </li>
                        <li className="k-item">
                            <div className="k-separator k-separator-horizontal"></div>
                        </li>
                        <li className="k-item">
                            <Button className="k-overflow-button" icon="plus">Item after separator</Button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </>
);
