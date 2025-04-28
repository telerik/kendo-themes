import { Button, TextButton } from '../../button';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(6, 1fr);
    }

    :root {
        --kendo-button-solid-primary-bg: purple;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            <span>Hover</span>
            <span>Focus</span>
            <span>Active</span>
            <span>Selected</span>
            <span>Disabled</span>
            {[ ...Button.options.themeColor ].map((themeColor) => (
                <>
                    <span>{themeColor}</span>
                    {[ 'normal' , ...Button.states ].map((state) => (
                        <>
                            <span>
                                <TextButton fillMode="solid" themeColor={themeColor} {...{ [state]: true }}>{state}</TextButton>
                            </span>
                        </>
                    ))}
                </>
            ))}
        </div>

    </>
);
