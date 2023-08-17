import { DropdownGrid, DropdownGridNormal } from '../../dropdowngrid';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { DropdownGrid.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { DropdownGrid.options.size.map((size) => (
                        <>
                            <div>
                                <DropdownGridNormal size={size} rounded={rounded} value="DropdownGrid"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);