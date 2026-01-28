import { SplitButton, TextSplitButton, IconSplitButton, IconTextSplitButton } from '../../split-button';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span></span>
            <span>text</span>
            <span>text + icon</span>
            <span>icon</span>


            {[ 'normal' , ...SplitButton.states ].map((state) => (
                <>
                    <span>{state}</span>
                    <span><TextSplitButton {...{ [state]: true }}>{state}</TextSplitButton></span>
                    <span><IconTextSplitButton {...{ [state]: true }}>{state}</IconTextSplitButton></span>
                    <span><IconSplitButton {...{ [state]: true }}>{state}</IconSplitButton></span>
                </>
            ))}
        </div>
    </>
);
