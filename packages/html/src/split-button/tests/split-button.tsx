import { SplitButton, TextSplitButton, IconSplitButton, IconTextSplitButton } from '../../split-button';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(5, 1fr);
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">
            <span></span>
            <span>text</span>
            <span>text + icon</span>
            <span>icon</span>
            <span>text + end icon</span>
            <span>icon + end icon</span>


            {[ 'normal' , ...SplitButton.states ].map((state) => (
                <>
                    <span>{state}</span>
                    <span><TextSplitButton {...{ [state]: true }}>{state}</TextSplitButton></span>
                    <span><IconTextSplitButton {...{ [state]: true }}>{state}</IconTextSplitButton></span>
                    <span><IconSplitButton {...{ [state]: true }}>{state}</IconSplitButton></span>
                    <span><TextSplitButton endIcon="folder" {...{ [state]: true }}>{state}</TextSplitButton></span>
                    <span><IconTextSplitButton endIcon="folder" {...{ [state]: true }}>{state}</IconTextSplitButton></span>
                </>
            ))}
        </div>
    </>
);
