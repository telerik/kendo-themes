import { SegmentedControlNormal } from '..';
import { SegmentedControl } from '../segmented-control.spec';


const styles = `
    #test-area>section {
        padding: 20px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
        justify-items: start;
    }

    .k-segmented-control-thumb {
        width: 100px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            {SegmentedControl.options.size.map((size) => (
                <section key={size}>
                    <span>{size}</span>
                    <SegmentedControlNormal size={size} />
                </section>
            ))}
        </div>

    </>
);
