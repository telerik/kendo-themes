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

            <span>DropdownTree Outline</span>
            <span>DropdownTree Outline RTL</span>

            <div>
                <DropdownTreeNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownTree.states ].map((state) => (
                <>
                    <div>
                        <DropdownTreeNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownTreeNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownTreeNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal value="invalid focus" fillMode="outline" invalid focus />
            </div>
        </div>
    </>
);
