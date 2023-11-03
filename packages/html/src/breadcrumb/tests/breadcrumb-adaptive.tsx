import { BreadcrumbAdaptive, BreadcrumbRootAdaptive } from '..';

export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>with root item</span>
            <span>without root item</span>

            <div>
                <BreadcrumbRootAdaptive collapsing="wrap" size="large" />
            </div>

            <div>
                <BreadcrumbAdaptive collapsing="wrap" size="large" />
            </div>
        </div>
    </>
);
