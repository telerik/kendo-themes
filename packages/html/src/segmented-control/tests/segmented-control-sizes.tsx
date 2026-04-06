import { SegmentedControl } from '../segmented-control.spec';
import { SegmentedControlNormal } from '../templates/segmented-control-normal';
import { SegmentedControlIcons } from '../templates/segmented-control-icons';
import { SegmentedControlText } from '../templates/segmented-control-text';

const styles = `
    #test-area {
        padding: 20px;
        display: grid;
        grid-template-columns: repeat(4, auto);
        gap: 10px;
        align-items: center;
        justify-items: start;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            <span>Icons</span>
            <span>Text</span>

            {SegmentedControl.options.size.map((size) => (
                <>
                    <span>{`${size}`}</span>
                    <SegmentedControlNormal size={size} thumbStyles={{ width: "50%" }}/>
                    <SegmentedControlIcons size={size} thumbStyles={{ width: "33%" }}/>
                    <SegmentedControlText size={size} thumbStyles={{ width: "50%" }}/>
                </>
            ))}
        </div>
    </>
);
