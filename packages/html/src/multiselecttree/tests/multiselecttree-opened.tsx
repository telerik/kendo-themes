import { MultiSelectTreeFiltering, MultiSelectTreePopup } from '..';
import { Chip, ChipAction } from '../../chip';

const styles = `
    #test-area {
        grid-template-columns: 160px repeat(2, 300px);
    }

    .k-animation-container {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>MultiSelectTree</span>
            <span>MultiSelectTree RTL</span>

            <div>Opened</div>
            <div>
                <MultiSelectTreePopup tags={(
                    <>
                        <Chip text="Furniture" actions={<ChipAction type="remove" />} />
                    </>
                )}/>
            </div>
            <div>
                <MultiSelectTreePopup tags={(
                    <>
                        <Chip text="Furniture" actions={<ChipAction type="remove" />} />
                    </>
                )}
                dir="rtl"/>
            </div>

            <div>Filtering</div>
            <div>
                <MultiSelectTreeFiltering tags={(
                    <>
                        <Chip text="Furniture" actions={<ChipAction type="remove" />} />
                    </>
                )}/>
            </div>
            <div>
                <MultiSelectTreeFiltering tags={(
                    <>
                        <Chip text="Furniture" actions={<ChipAction type="remove" />} />
                    </>
                )}
                dir="rtl"/>
            </div>
        </div>
    </>
);
