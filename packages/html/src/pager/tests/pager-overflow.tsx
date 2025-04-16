import { PagerNormal, PagerInput } from "../../pager";

const styles = `
    #test-area {
        width: min-content;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">

            <span>Numeric overflow</span>
            <PagerNormal />
            <span>Input overflow</span>
            <PagerInput />
        </div>
    </>
);
