import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { Button } from '../../button';
import { Form, FormField } from '../../form';


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
                    <Form size="small" layout="grid" cols={2} legend="Shipping Address" gapX={2}
                        formButtons={
                            <>
                                <Button className="k-form-submit" themeColor="primary" size="small">Submit</Button>
                                <Button className="k-form-clear" size="small">Clear</Button>
                            </>
                        }>
                        <FormField className="k-col-span-1" label="Country" editor={ <DropdownList value="France" size="small"/> } />
                        <FormField className="k-col-span-1" label="City" editor={ <Textbox size="small"/> } />
                        <FormField className="k-col-span-2 k-form-field-error" label="Address Line" error="Address Line is required" editor={ <Textbox size="small"/> } />
                    </Form>
                </section>

                <section style={styles}>
                    <div><strong>md</strong></div>
                    <br />
                    <Form size="medium" layout="grid" cols={2} legend="Shipping Address" gapX={2}
                        formButtons={
                            <>
                                <Button className="k-form-submit" themeColor="primary" size="medium">Submit</Button>
                                <Button className="k-form-clear" size="medium">Clear</Button>
                            </>
                        }>
                        <FormField className="k-col-span-1" label="Country" editor={ <DropdownList value="France" size="medium"/> } />
                        <FormField className="k-col-span-1" label="City" editor={ <Textbox size="medium"/> } />
                        <FormField className="k-col-span-2 k-form-field-error" label="Address Line" error="Address Line is required" editor={ <Textbox size="medium"/> } />
                    </Form>
                </section>

                <section style={styles}>
                    <div><strong>lg</strong></div>
                    <br />
                    <Form size="large" layout="grid" cols={2} legend="Shipping Address" gapX={2}
                        formButtons={
                            <>
                                <Button className="k-form-submit" themeColor="primary" size="large">Submit</Button>
                                <Button className="k-form-clear" size="large">Clear</Button>
                            </>
                        }>
                        <FormField className="k-col-span-1" label="Country" editor={ <DropdownList value="France" size="large"/> } />
                        <FormField className="k-col-span-1" label="City" editor={ <Textbox size="large"/> } />
                        <FormField className="k-col-span-2 k-form-field-error" label="Address Line" error="Address Line is required" editor={ <Textbox size="large"/> } />
                    </Form>
                </section>
            </div>
        </div>
    </>
);
