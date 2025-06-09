import { SpeechToTextButtonNormal, SpeechToTextButtonListening } from '../';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(5, 1fr);
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
            <span>Disabled</span>

            <span>Solid</span>
            <span><SpeechToTextButtonNormal /></span>
            <span><SpeechToTextButtonNormal hover /></span>
            <span><SpeechToTextButtonNormal focus /></span>
            <span><SpeechToTextButtonNormal active /></span>
            <span><SpeechToTextButtonNormal disabled /></span>

            <span>Outline</span>
            <span><SpeechToTextButtonNormal fillMode="outline" /></span>
            <span><SpeechToTextButtonNormal fillMode="outline" hover /></span>
            <span><SpeechToTextButtonNormal fillMode="outline" focus /></span>
            <span><SpeechToTextButtonNormal fillMode="outline" active /></span>
            <span><SpeechToTextButtonNormal fillMode="outline" disabled /></span>

            <span>Flat</span>
            <span><SpeechToTextButtonNormal fillMode="flat" /></span>
            <span><SpeechToTextButtonNormal fillMode="flat" hover /></span>
            <span><SpeechToTextButtonNormal fillMode="flat" focus /></span>
            <span><SpeechToTextButtonNormal fillMode="flat" active /></span>
            <span><SpeechToTextButtonNormal fillMode="flat" disabled /></span>

            <span>Solid Listening</span>
            <span><SpeechToTextButtonListening /></span>
            <span><SpeechToTextButtonListening hover /></span>
            <span><SpeechToTextButtonListening focus /></span>
            <span><SpeechToTextButtonListening active /></span>
            <span><SpeechToTextButtonListening disabled /></span>

            <span>Outline Listening</span>
            <span><SpeechToTextButtonListening fillMode="outline" /></span>
            <span><SpeechToTextButtonListening fillMode="outline" hover /></span>
            <span><SpeechToTextButtonListening fillMode="outline" focus /></span>
            <span><SpeechToTextButtonListening fillMode="outline" active /></span>
            <span><SpeechToTextButtonListening fillMode="outline" disabled /></span>

            <span>Flat Listening</span>
            <span><SpeechToTextButtonListening fillMode="flat" /></span>
            <span><SpeechToTextButtonListening fillMode="flat" hover /></span>
            <span><SpeechToTextButtonListening fillMode="flat" focus /></span>
            <span><SpeechToTextButtonListening fillMode="flat" active /></span>
            <span><SpeechToTextButtonListening fillMode="flat" disabled /></span>
        </div>
    </>
);
