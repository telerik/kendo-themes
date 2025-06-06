import { DropdownList } from '../../dropdownlist';
import { Textbox } from '../../textbox';
import { FormField, Fieldset, FormNormal } from '../../form';


const styles = `
    section {
        padding: 20px;
        border: 1px dashed gray;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Responsive Forms</span>

            <section>
                <FormNormal layout="grid" cols={[{ sm: 1, md: 2, lg: 3}]} gapX={[{ all: 2, lg: 4 }]} gapY={[{ all: 3, lg: 6 }]}>
                    <Fieldset legend="Personal Information" layout="grid" cols={1} gapY={3} colSpan={[{ sm: 2, lg: 1 }]}>
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
                    <Fieldset legend="Shipping Address" layout="grid" cols={[{ sm: 1, md: 2}]} gapX={4} gapY={3}>
                        <FormField
                            colSpan={[{ all: 2, sm: 1}]}
                            label="Country"
                            editor={ <DropdownList value="France"/>}
                        />
                        <FormField
                            colSpan={[{ all: 2, sm: 1}]}
                            label="City"
                            editor={ <Textbox/> }
                        />
                        <FormField
                            colSpan={2}
                            label="Address Line"
                            editor={ <Textbox/> }
                        />
                    </Fieldset>
                    <Fieldset legend="Billing Address" layout="grid" cols={[{ all: 1, md: 2}]} gapX={4} gapY={3}>
                        <FormField
                            colSpan={[{ all: 2, sm: 1}]}
                            label="Country"
                            editor={ <DropdownList value="France"/>}
                        />
                        <FormField
                            colSpan={[{ all: 2, sm: 1}]}
                            label="City"
                            editor={ <Textbox/> }
                        />
                        <FormField
                            colSpan={2}
                            label="Address Line"
                            editor={ <Textbox/> }
                        />
                    </Fieldset>
                </FormNormal>
            </section>

        </div>
    </>
);
