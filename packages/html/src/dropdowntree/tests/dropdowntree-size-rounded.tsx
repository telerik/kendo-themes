import { DropdownTree, DropdownTreeNormal } from '../../dropdowntree';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
    .k-daterangepicker .k-dateinput {
        width: 5em;
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

            { DropdownTree.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    { DropdownTree.options.size.map((size) => (
                        <>
                            <div>
                                <DropdownTreeNormal size={size} rounded={rounded} value="DropdownTree"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
