import { Textarea, TextareaNormal } from '../../textarea';

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

            { Textarea.options.rounded.map((rounded, roundedIndex) => (
                <>
                    <span>{ rounded }</span>
                    { Textarea.options.size.map((size, sizeIndex) => (
                        <>
                            <div>
                                <label htmlFor={`textarea-size-rounded-${roundedIndex * Textarea.options.size.length + sizeIndex}`} className="k-label">Enter text</label>
                                <TextareaNormal id={`textarea-size-rounded-${roundedIndex * Textarea.options.size.length + sizeIndex}`} size={size} rounded={rounded} value="Textarea"/>
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
