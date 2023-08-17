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
                    <span><TextMenuButton {...{ [state]: true }}>{state}</TextMenuButton></span>
                    <span><IconTextMenuButton {...{ [state]: true }}>{state}</IconTextMenuButton></span>
                    <span><IconMenuButton {...{ [state]: true }}>{state}</IconMenuButton></span>
                    <span><TextMenuButton showArrow={false} {...{ [state]: true }}>{state}</TextMenuButton></span>
                    <span><IconMenuButton showArrow={false} {...{ [state]: true }}>{state}</IconMenuButton></span>
                </>
            ))}
        </div>
    </>
);
