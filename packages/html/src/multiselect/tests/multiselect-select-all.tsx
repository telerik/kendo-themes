import { MultiSelectSelectAll, MultiSelectSelectAllGrouping, MultiSelectSelectAllFiltering, MultiSelectSelectAllVirtual, MultiSelectSelectAllCustomValue } from '..';
import { Chip, ChipAction } from '../../chip';

const styles = `
    #test-area {
        grid-template-columns: repeat(3, 280px);
    }

    .k-animation-container {
        position: relative;
    }

    .k-popup {
        height: 180px;
    }

    .k-virtual-list>.k-item,
    .k-virtual-list .k-list-item,
    .k-virtual-list .k-list-group-item {
        position: relative;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span>No checkbox</span>
            <span>All checked</span>
            <span>Grouping</span>

            <div>
                <MultiSelectSelectAll
                    placeholder="MultiSelect..."
                    selectAllProps={{ showCheckbox: false }}
                />
            </div>
            <div>
                <MultiSelectSelectAll
                    selectAllProps={{ checked: true }}
                    listItemProps={{ showCheckbox: true, checked: true }}
                    tags={
                        <>
                            <Chip text="Option 1" actions={<ChipAction type="remove" />} />
                            <Chip text="Option 2" actions={<ChipAction type="remove" />} />
                        </>
                    }
                />
            </div>
            <div>
                <MultiSelectSelectAllGrouping
                    selectAllProps={{ checked: true }}
                    listItemProps={{ showCheckbox: true, checked: true }}
                    tags={<Chip text="12 items selected" actions={<ChipAction type="remove" />} />}
                />
            </div>

            <span>Filtering</span>
            <span>Custom Value</span>
            <span>Virtualization</span>

            <div>
                <MultiSelectSelectAllFiltering
                    placeholder="MultiSelect..."
                    selectAllProps={{}}
                    listItemProps={{ showCheckbox: true }}
                />
            </div>
            <div>
                <MultiSelectSelectAllCustomValue selectAllProps={{}} />
            </div>
            <div>
                <MultiSelectSelectAllVirtual
                    placeholder="MultiSelect..."
                    loading
                    selectAllProps={{ indeterminate: true }}
                    listItemProps={{ showCheckbox: true }}
                />
            </div>
        </div>
    </>
);
