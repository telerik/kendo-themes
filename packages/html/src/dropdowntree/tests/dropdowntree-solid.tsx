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
                <DropdownTreeNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownTree.states ].map((state) => (
                <>
                    <div>
                        <DropdownTreeNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownTreeNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownTreeNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal value="invalid focus" invalid focus />
            </div>

            <div>
                <DropdownTreeNormal value="valid focus" valid focus />
            </div>
            <div dir="rtl">
                <DropdownTreeNormal value="valid focus" valid focus />
            </div>
        </div>
    </>
);
