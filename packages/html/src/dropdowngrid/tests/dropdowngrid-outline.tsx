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
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="outline" />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="outline" />
            </div>

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="outline" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="outline" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal ariaLabel="DropdownGrid" { ...{ [state]: true }} fillMode="outline" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="outline" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="outline" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
