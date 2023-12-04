import { FloatingActionButton, IconFloatingActionButton } from '../../fab';

const styles = `
    #test-area {
        grid-template-columns: 100px repeat(6, 1fr);
        grid-template-rows: 10px repeat(11, 50px);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-6">
            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Active</span>
            <span>Selected</span>
            <span>Disabled</span>
            {[ ...FloatingActionButton.options.themeColor ].map((themeColor) => (
                <>
                    <span style={{ alignSelf: "center" }}>{themeColor}</span>
                    {[ 'normal', ...FloatingActionButton.states ].map((state) => (
                        <>
                            <span style={{ position: "relative" }}>
                                <IconFloatingActionButton position="top-start" themeColor={themeColor} {...{ [state]: true }} />
                            </span>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
