import ReactDOM from 'react-dom/client';
import { FloatingActionButton } from '../../fab';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-6">

            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Active</span>
            <span>Disabled</span>

            <span>primary</span>
            <span>
                <FloatingActionButton icon="plus" />
            </span>
            <span>
                <FloatingActionButton icon="plus" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" disabled />
            </span>

            <span>secondary</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="secondary" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="secondary" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="secondary" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="secondary" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="secondary" disabled />
            </span>

            <span>tertiary</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="tertiary" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="tertiary" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="tertiary" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="tertiary" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="tertiary" disabled />
            </span>

            <span>info</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="info" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="info" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="info" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="info" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="info" disabled />
            </span>

            <span>success</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="success" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="success" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="success" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="success" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="success" disabled />
            </span>

            <span>warning</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="warning" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="warning" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="warning" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="warning" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="warning" disabled />
            </span>

            <span>error</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="error" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="error" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="error" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="error" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="error" disabled />
            </span>

            <span>dark</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="dark" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="dark" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="dark" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="dark" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="dark" disabled />
            </span>

            <span>light</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="light" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="light" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="light" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="light" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="light" disabled />
            </span>

            <span>inverse</span>
            <span>
                <FloatingActionButton icon="plus" themeColor="inverse" />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="inverse" hover />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="inverse" focus />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="inverse" active />
            </span>
            <span>
                <FloatingActionButton icon="plus" themeColor="inverse" disabled />
            </span>
        </div>
    </>
);
