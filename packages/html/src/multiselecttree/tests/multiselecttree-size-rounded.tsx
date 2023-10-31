import { Chip, ChipAction } from '../../chip';
import { MultiSelectTree, MultiSelectTreeNormal } from '..';


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

            { MultiSelectTree.options.rounded.map((rounded) => (
                <>
                    <span>{ rounded }</span>
                    {MultiSelectTree.options.size.map((size) => (
                        <MultiSelectTreeNormal
                            size={size}
                            rounded={rounded}
                            tags={(
                                <>
                                    <Chip text="Chip Text" rounded={rounded} size={size} actions={ <ChipAction type="remove"/> } />
                                </>
                            )}
                        />
                    ))}
                </>
            ))}
        </div>
    </>
);
