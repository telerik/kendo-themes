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

            {FloatingActionButton.options.themeColor.map((themeColor) => (
                <>
                    <span>{`${themeColor}`}</span>
                    <span>
                        <TextFloatingActionButton themeColor={themeColor} />
                    </span>
                    <span>
                        <IconTextFloatingActionButton themeColor={themeColor} />
                    </span>
                    <span>
                        <IconFloatingActionButton themeColor={themeColor} />
                    </span></>
            ))}
        </div>
    </>
);
