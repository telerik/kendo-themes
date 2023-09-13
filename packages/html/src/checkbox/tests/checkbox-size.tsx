import { Checkbox, CheckboxWithLabelAfter } from '../../checkbox';

const styles = `
    #test-area {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>Small</span>
            <span>Medium</span>
            <span>Large</span>

            {[ 'unchecked', ...Checkbox.states ].map((state) => (
                <>
                    { Checkbox.options.size.map((size) => (
                        <section>
                            <CheckboxWithLabelAfter id={'ch-' + [ state ] + '-' + [ size ]} { ...{ [state]: true }} size={size}>{state}</CheckboxWithLabelAfter>
                        </section>
                    ))}
                </>
            ))}
        </div>
    </>
);
