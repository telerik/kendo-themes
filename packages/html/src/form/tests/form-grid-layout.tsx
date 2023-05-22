import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { Button } from '../../button';
import { Form, FormField } from '../../form';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Form Grid Layout</span>
            <span></span>

            <section>
                <Form layout="grid" legend="Shipping Address" cols={2} gapX={4} formButtons={
                    <>
                        <Button className="k-form-submit" themeColor="primary">Submit</Button>
                        <Button className="k-form-clear" >Clear</Button>
                    </>
                } >
                    <FormField
                        className="k-col-span-1"
                        label="Country"
                        editor={ <DropdownList value="France"/>}
                    />
                    <FormField
                        className="k-col-span-1"
                        label="City"
                        editor={ <Textbox/> }
                    />
                    <FormField
                        className="k-col-span-2"
                        label="Address Line"
                        editor={ <Textbox/> }
                    />
                </Form>
            </section>

        </div>
    </>
);
