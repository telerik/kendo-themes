import ReactDOM from 'react-dom/client';
import { DropdownTree } from '../../dropdowntree';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownTree Outline</span>
            <span>DropdownTree Outline RTL</span>

            <div>
                <DropdownTree fillMode="outline" placeholder="DropdownTree..." />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" placeholder="DropdownTree..." />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Normal" />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Normal" />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Hover" hover />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Hover" hover />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Focus" focus />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Focus" focus />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Disabled" disabled />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Disabled" disabled />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Invalid" invalid />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Invalid" invalid />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Invalid Focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Invalid Focus" invalid focus />
            </div>

            <div>
                <DropdownTree fillMode="outline" value="Loading..." loading />
            </div>
            <div dir="rtl">
                <DropdownTree fillMode="outline" value="Loading..." loading />
            </div>

        </div>
    </>
);
