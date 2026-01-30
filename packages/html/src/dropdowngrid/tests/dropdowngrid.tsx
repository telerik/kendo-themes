import { DropdownGrid, DropdownGridNormal } from '..';

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
                <DropdownGridNormal ariaLabel="DropdownGrid" />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid RTL" />
            </div>
            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid RTL" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal ariaLabel="DropdownGrid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal ariaLabel="DropdownGrid RTL" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal ariaLabel="DropdownGrid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal ariaLabel="DropdownGrid RTL" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
