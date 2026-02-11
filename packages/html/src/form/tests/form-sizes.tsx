import { Form } from '../../form/form.spec';
import { FormNormal } from '../../form/templates/form-normal';
import { FormHorizontal } from '../../form/templates/form-horizontal';

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(4, 1fr);
    }

    section {
        padding: 10px;
        border: 1px solid gray;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>vertical</span>
            {Form.options.size.map((size) => (
                <section>
                    <FormNormal size={size}></FormNormal>
                </section>
            ))}

            <span>horizontal</span>
            {Form.options.size.map((size) => (
                <section>
                    <FormHorizontal size={size}></FormHorizontal>
                </section>
            ))}
        </div>
    </>
);
