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
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="solid" />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid RTL" fillMode="solid" />
            </div>
            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid RTL" fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal ariaLabel="DropdownGrid RTL" fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid RTL" fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
