import { DropdownList, DropdownListNormal } from '..';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span><small>rounded / size</small></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            { DropdownList.options.rounded.map((rounded) => (
                <>
                    <span>{ `${rounded}` }</span>
                    { DropdownList.options.size.map((size) => (
                        <>
                            <div>
                                <DropdownListNormal size={size} rounded={rounded} value="DropdownList"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
