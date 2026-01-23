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
                <DropdownGridNormal fillMode="solid" />
            </div>
            <div dir="rtl">
                <DropdownGridNormal fillMode="solid" />
            </div>
            <div>
                <DropdownGridNormal fillMode="solid" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DropdownGridNormal fillMode="solid" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DropdownGrid.states ].map((state) => (
                <>
                    <div>
                        <DropdownGridNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>

                    <div dir="rtl">
                        <DropdownGridNormal fillMode="solid" { ...{ [state]: true }} value={state} />
                    </div>
                </>
            ))}

            <div>
                <DropdownGridNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
            <div dir="rtl">
                <DropdownGridNormal fillMode="solid" value="invalid focus" invalid focus />
            </div>
        </div>
    </>
);
