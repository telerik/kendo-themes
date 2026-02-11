import { AutocompleteCustomValue } from '../templates/autocomplete-custom-value';
import { AutocompleteGroupingModernCustomValue } from '../templates/autocomplete-grouping-modern-custom-value';

const styles = `
    #test-area {
        grid-template-columns: repeat(2, 360px);
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>Autocomplete Custom Value</span>
            <span>Autocomplete Custom Value RTL</span>

            <div>
                <AutocompleteCustomValue focus />
            </div>
            <div dir="rtl">
                <AutocompleteCustomValue focus />
            </div>

            <span>Custom Value and Autocomplete Custom Value</span>
            <span>Custom Value and Autocomplete Custom Value RTL</span>

            <div>
                <AutocompleteGroupingModernCustomValue focus />
            </div>
            <div dir="rtl">
                <AutocompleteGroupingModernCustomValue focus />
            </div>
        </div>
    </>
);
