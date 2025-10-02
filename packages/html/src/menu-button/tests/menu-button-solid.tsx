import { MenuButton, IconMenuButton, IconTextMenuButton, TextMenuButton } from '../../menu-button';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(5, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>base</span>
            <span>base + icon</span>
            <span>base icon</span>
            <span>text only</span>
            <span>icon only</span>

            {[ 'normal' , ...MenuButton.states ].map((state) => (
                <>
                    <span>{state}</span>
                    <span><TextMenuButton fillMode="solid" {...{ [state]: true }}>{state}</TextMenuButton></span>
                    <span><IconTextMenuButton fillMode="solid" {...{ [state]: true }}>{state}</IconTextMenuButton></span>
                    <span><IconMenuButton fillMode="solid" {...{ [state]: true }}>{state}</IconMenuButton></span>
                    <span><TextMenuButton fillMode="solid" showArrow={false} {...{ [state]: true }}>{state}</TextMenuButton></span>
                    <span><IconMenuButton fillMode="solid" showArrow={false} {...{ [state]: true }}>{state}</IconMenuButton></span>
                </>
            ))}
        </div>
    </>
);
