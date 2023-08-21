import { Window } from '../../window';
import { Button } from '../../button';
import { Form, FormField } from '../../form';
import { Textbox } from '../../textbox';
import { DropdownList } from '../../dropdownlist';

const style = `
    .k-window {
        min-width: 400px;
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{style}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <section>
                <Window title="Find and Replace" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Done</Button>
                        <Button>Find</Button>
                        <Button>Replace</Button>
                        <Button>Replace All</Button>
                    </>
                }>
                    <Form>
                        <FormField label="Find" editor={ <Textbox placeholder="Placeholder" /> }/>
                        <FormField label="Replace with" editor={ <Textbox placeholder="Placeholder" /> }/>
                        <FormField label="Search within" editor={ <DropdownList value="All Sheets" /> } />
                    </Form>
                </Window>
            </section>

        </div>
    </>
);
