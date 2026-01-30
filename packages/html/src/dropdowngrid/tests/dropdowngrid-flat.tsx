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

            <span>DropdownGrid Flat</span>
            <span>DropdownGrid Flat RTL</span>

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="flat" />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="flat" />
            </div>

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal ariaLabel="DropdownGrid" { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="flat" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="flat" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
