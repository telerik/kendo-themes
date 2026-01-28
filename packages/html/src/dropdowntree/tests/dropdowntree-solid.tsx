import { DropdownTree, DropdownTreeNormal } from '../../dropdowntree';


const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownTree</span>
            <span>DropdownTree RTL</span>

            <div>
                <DropdownTreeNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal fillMode="solid" />
            </div>

            <div>
                <DropdownTreeNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownTree.states ].map((state) => (
                <>
                    <div>
                        <DropdownTreeNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownTreeNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownTreeNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
