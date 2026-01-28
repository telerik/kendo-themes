import { Chip } from '../../chip';


export default () =>(
    <>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span><small>Standalone Chips (not in ChipList)</small></span>
            <span></span>
            <span></span>

            <span>Normal (unselected)</span>
            <span>
                <Chip text="Standalone Chip" />
            </span>
            <span>
                <Chip text="Info Chip" themeColor="info" />
            </span>

            <span>Selected</span>
            <span>
                <Chip text="Selected Chip" selected />
            </span>
            <span>
                <Chip text="Selected Info" themeColor="info" selected />
            </span>

            <span>With Icon</span>
            <span>
                <Chip text="Icon Chip" icon="star" />
            </span>
            <span>
                <Chip text="Selected Icon" icon="star" selected />
            </span>

            <span>Disabled States</span>
            <span>
                <Chip text="Disabled" disabled />
            </span>
            <span>
                <Chip text="Disabled Selected" disabled selected />
            </span>
        </div>
    </>
);
