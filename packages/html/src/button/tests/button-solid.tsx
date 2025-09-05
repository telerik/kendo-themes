import { Button, TextButton } from '../../button';


const styles = `
    #test-area {
        grid-template-columns: 120px repeat(${Button.states?.length + 1}, 1fr);
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Normal</span>
            {Button.states?.map((state) => (
                <span key={state}>{state.charAt(0).toUpperCase() + state.slice(1)}</span>
            ))}
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
