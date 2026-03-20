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

    .k-segmented-control-thumb {
        width: 100px;
    }

    .segmented-control-icons .k-segmented-control-thumb {
        width: 45px;
    }

    .segmented-control-text .k-segmented-control-thumb {
        width: 70px;
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
                    <SegmentedControlNormal size={size} />
                    <SegmentedControlIcons size={size} className="segmented-control-icons" />
                    <SegmentedControlText size={size} className="segmented-control-text" />
                </>
            ))}
        </div>
    </>
);
