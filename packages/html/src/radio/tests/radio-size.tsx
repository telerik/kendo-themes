import { RadioButton, RadioButtonWithLabelAfter } from '../../radio';

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

            {[ 'unchecked', ...RadioButton.states ].map((state) => (
                <>
                    { RadioButton.options.size.map((size) => (
                        <section>
                            <RadioButtonWithLabelAfter id={'rad-' + [ state ] + '-' + [ size ]} { ...{ [state]: true }} size={size}>{state}</RadioButtonWithLabelAfter>
                        </section>
                    ))}
                </>
            ))}
        </div>
    </>
);
