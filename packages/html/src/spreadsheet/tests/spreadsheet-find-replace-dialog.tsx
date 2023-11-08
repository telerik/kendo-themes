import { WindowNormal } from '../../window';
import { Button } from '../../button';
import { FormNormal, FormField } from '../../form';
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
                <WindowNormal title="Find and Replace" actions={[ 'x' ]} className="k-spreadsheet-window" actionButtonsAlign="start" actionButtons={
                    <>
                        <Button themeColor="primary">Done</Button>
                        <Button>Find</Button>
                        <Button>Replace</Button>
                        <Button>Replace All</Button>
                    </>
                }>
                    <FormNormal formButtons={null}>
                        <FormField label="Find" editor={ <Textbox placeholder="Placeholder" /> }/>
                        <FormField label="Replace with" editor={ <Textbox placeholder="Placeholder" /> }/>
                        <FormField label="Search within" editor={ <DropdownList value="All Sheets" /> } />
                    </FormNormal>
                </WindowNormal>
            </section>

        </div>
    </>
);
