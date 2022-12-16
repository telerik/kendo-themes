import React from 'react';
import { Loader } from '../loader';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-4">

            <span></span>
            <span className="col">Pulsing 2</span>
            <span className="col">Spinner 3</span>
            <span className="col">Spinner 4</span>


            <span>Primary</span>
            <span>
                <Loader size={'large'} themeColor={'primary'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'primary'} animation={'converging-spinner'} />
            </span>

            <span>Secondary</span>
            <span>
                <Loader size={'large'} themeColor={'secondary'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'secondary'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'secondary'} animation={'converging-spinner'} />
            </span>

            <span>Tertiary</span>
            <span>
                <Loader size={'large'} themeColor={'tertiary'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'tertiary'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'tertiary'} animation={'converging-spinner'} />
            </span>

            <span>Info</span>
            <span>
                <Loader size={'large'} themeColor={'info'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'info'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'info'} animation={'converging-spinner'} />
            </span>

            <span>Success</span>
            <span>
                <Loader size={'large'} themeColor={'success'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'success'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'success'} animation={'converging-spinner'} />
            </span>

            <span>Warning</span>
            <span>
                <Loader size={'large'} themeColor={'warning'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'warning'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'warning'} animation={'converging-spinner'} />
            </span>

            <span>Error</span>
            <span>
                <Loader size={'large'} themeColor={'error'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'error'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'error'} animation={'converging-spinner'} />
            </span>

            <span>Dark</span>
            <span>
                <Loader size={'large'} themeColor={'dark'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'dark'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'dark'} animation={'converging-spinner'} />
            </span>

            <span>Light</span>
            <span>
                <Loader size={'large'} themeColor={'light'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'light'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'light'} animation={'converging-spinner'} />
            </span>

            <span>Inverse</span>
            <span>
                <Loader size={'large'} themeColor={'inverse'} animation={'pulsing'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'inverse'} animation={'infinite-spinner'} />
            </span>

            <span>
                <Loader size={'large'} themeColor={'inverse'} animation={'converging-spinner'} />
            </span>

        </div>
    </>
);
