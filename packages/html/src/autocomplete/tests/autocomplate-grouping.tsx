import { AutocompleteGrouping, AutocompleteGroupingModern } from "..";

const styles = `
    #test-area {
        max-width: 660px;
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-2">
            <span>Classic Autocomplete Grouping</span>
            <span>Classic Autocomplete Grouping RTL</span>

            <div>
                <AutocompleteGrouping placeholder="Autocomplete..." />
            </div>
            <div dir="rtl">
                <AutocompleteGrouping placeholder="Autocomplete..." />
            </div>

            <span>Modern Autocomplete Grouping</span>
            <span>Modern Autocomplete Grouping RTL</span>

            <div>
                <AutocompleteGroupingModern placeholder="Autocomplete..." />
            </div>
            <div dir="rtl">
                <AutocompleteGroupingModern placeholder="Autocomplete..." />
            </div>
        </div>
    </>
);
