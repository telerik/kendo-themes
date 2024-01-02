import { FloatingActionButton, IconFloatingActionButton, IconTextFloatingActionButton, TextFloatingActionButton } from '../../fab';


const styles = `
    #test-area {
        grid-template-columns: 200px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span></span>
            <span>Text</span>
            <span>Text + Icon</span>
            <span>Icon</span>

            {FloatingActionButton.options.themeColor.map((color) => (
                <>
                    <span>{color}</span>
                    <span>
                        <TextFloatingActionButton themeColor={color} />
                    </span>
                    <span>
                        <IconTextFloatingActionButton themeColor={color} />
                    </span>
                    <span>
                        <IconFloatingActionButton themeColor={color} />
                    </span></>
            ))}
        </div>
    </>
);
