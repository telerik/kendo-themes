import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { FormField, Fieldset, FormNormal } from '../../form';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Form Grid Layout</span>
            <span></span>

            <section>
                <FormNormal layout="grid" cols={2} gapX={4}>
                    <Fieldset legend="Personal Information" layout="grid" cols={1} gapY={3}>
                        <FormField
                            label="First Name"
                            editor={ <Textbox value="John"/>}
                        />
                        <FormField
                            label="Last Name"
                            editor={ <Textbox value="Doe" /> }
                        />
                        <FormField
                            label="Email"
                            editor={ <Textbox value="john.doe@email.com" /> }
                        />
                    </Fieldset>
                    <Fieldset legend="Shipping Address" layout="grid" cols={2} gapX={4} gapY={3}>
                        <FormField
                            colSpan="1"
                            label="Country"
                            editor={ <DropdownList value="France"/>}
                        />
                        <FormField
                            colSpan="1"
                            label="City"
                            editor={ <Textbox/> }
                        />
                        <FormField
                            colSpan="2"
                            label="Address Line"
                            editor={ <Textbox/> }
                        />
                    </Fieldset>
                </FormNormal>
            </section>

        </div>
    </>
);
