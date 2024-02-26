import { DropdownGrid, DropdownGridNormal } from '../../dropdowngrid';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DropdownGrid</span>
            <span>DropdownGrid RTL</span>

            <div>
                <DropdownGridNormal placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
