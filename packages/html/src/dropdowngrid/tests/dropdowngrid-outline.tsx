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

            <span>DropdownGrid Outline</span>
            <span>DropdownGrid Outline RTL</span>

            <div>
                <DropdownGrid fillMode="outline" placeholder="DropdownGrid..." />
            </div>
            <div dir="rtl">
                <DropdownGrid fillMode="outline" placeholder="DropdownGrid..." />
            </div>

            <div>
                <DropdownGridNormal fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal fillMode="outline" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal fillMode="outline" value="invalid focus" invalid focus />
            </div>

            <div>
                <DropdownGridNormal fillMode="outline" value="valid focus" valid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal fillMode="outline" value="valid focus" valid focus />
            </div>
        </div>
    </>
);
