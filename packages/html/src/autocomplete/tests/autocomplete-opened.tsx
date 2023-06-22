import { AutocompletePopup } from '../../autocomplete';

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">

            <span>Autocomplete</span>
            <span>Autocomplete RTL</span>

            <div>
                <AutocompletePopup value="Opened" />
            </div>
            <div dir="rtl">
                <AutocompletePopup value="Opened" />
            </div>
        </div>
    </>
);
