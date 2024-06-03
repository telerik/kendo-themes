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

            <span>DropdownTree Flat</span>
            <span>DropdownTree Flat RTL</span>

            <div>
                <DropdownTreeNormal fillMode="flat" />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal fillMode="flat" />
            </div>
            <div>
                <DropdownTreeNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownTree.states ].map((state) => (
                <>
                    <div>
                        <DropdownTreeNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownTreeNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownTreeNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
