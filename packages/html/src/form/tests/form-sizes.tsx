import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { Button } from '../../button';
import { Form, FormField, Fieldset } from '../../form';


const styles = { border: '1px solid grey', padding: '10px' };

export default () =>(
    <>
        <div id="test-area">
            <div>Form Sizes</div>
            <br />
            <div style={{ display: 'flex', gap: '20px' }}>
                <section style={styles}>
                    <div><strong>sm</strong></div>
                    <br />
                    <Form size="small"
                        formButtons={
                            <>
                                <Button className="k-form-submit" themeColor="primary" size="small">Submit</Button>
                                <Button className="k-form-clear" size="small">Clear</Button>
                            </>
                        }>
                        <Fieldset legend="Shipping Address" layout="grid" cols={2} gapX={2} >
                            <FormField colSpan="1" label="Country" editor={ <DropdownList value="France" size="small"/> } />
                            <FormField colSpan="1" label="City" editor={ <Textbox size="small"/> } />
                            <FormField colSpan="2" className="k-form-field-error" label="Address Line" error="Address Line is required" editor={ <Textbox size="small"/> } />
                        </Fieldset>
                    </Form>
                </section>

                <section style={styles}>
                    <div><strong>md</strong></div>
                    <br />
                    <Form size="medium"
                        formButtons={
                            <>
                                <Button className="k-form-submit" themeColor="primary" size="medium">Submit</Button>
                                <Button className="k-form-clear" size="medium">Clear</Button>
                            </>
                        }>
                        <Fieldset legend="Shipping Address" layout="grid" cols={2} gapX={2} >
                            <FormField colSpan="1" label="Country" editor={ <DropdownList value="France" size="medium"/> } />
                            <FormField colSpan="1" label="City" editor={ <Textbox size="medium"/> } />
                            <FormField colSpan="2" className="k-form-field-error" label="Address Line" error="Address Line is required" editor={ <Textbox size="medium"/> } />
                        </Fieldset>
                    </Form>
                </section>

                <section style={styles}>
                    <div><strong>lg</strong></div>
                    <br />
                    <Form size="large"
                        formButtons={
                            <>
                                <Button className="k-form-submit" themeColor="primary" size="large">Submit</Button>
                                <Button className="k-form-clear" size="large">Clear</Button>
                            </>
                        }>
                        <Fieldset legend="Shipping Address" layout="grid" cols={2} gapX={2} >
                            <FormField colSpan="1" label="Country" editor={ <DropdownList value="France" size="large"/> } />
                            <FormField colSpan="1" label="City" editor={ <Textbox size="large"/> } />
                            <FormField colSpan="2" className="k-form-field-error" label="Address Line" error="Address Line is required" editor={ <Textbox size="large"/> } />
                        </Fieldset>
                    </Form>
                </section>
            </div>
        </div>
    </>
);
