import { DateInput, DateInputNormal } from '../../dateinput';

const styles = `
    #test-area {
        max-width: 660px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>DateInput Flat</span>
            <span>DateInput Flat RTL</span>

            <div>
                <DateInputNormal fillMode="flat" placeholder="placeholder..." />
            </div>
            <div dir="rtl">
                <DateInputNormal fillMode="flat" placeholder="placeholder..." />
            </div>

            {[ 'normal', ...DateInput.states ].map((state) => (
                <>
                    <div>
                        <DateInputNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>

                    <div dir="rtl">
                        <DateInputNormal { ...{ [state]: true }} fillMode="flat" value={state} />
                    </div>
                </>
            ))}

            <div>
                <DateInputNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
            <div dir="rtl">
                <DateInputNormal value="invalid focus" fillMode="flat" invalid focus />
            </div>
        </div>
    </>
);
