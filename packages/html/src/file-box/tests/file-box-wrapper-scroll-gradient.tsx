import { FileBox, FileBoxWrapper } from '..';


const styles = `
   #test-area {
        max-width: 1240px;
   }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Scrollable start</span>
            <span>scrollable end</span>
            <span>Scrollable both</span>

            <section>
                <FileBoxWrapper scrollingPosition="start">
                    <FileBox />
                    <FileBox />
                    <FileBox />
                </FileBoxWrapper>
            </section>

            <section>
                <FileBoxWrapper scrollingPosition="end">
                    <FileBox style={{ marginInlineStart: "-50px"}} />
                    <FileBox />
                    <FileBox name="Last"></FileBox>
                </FileBoxWrapper>
            </section>

            <section>
                <FileBoxWrapper scrollingPosition="both">
                    <FileBox style={{ marginInlineStart: "-50px"}} />
                    <FileBox />
                    <FileBox />
                </FileBoxWrapper>
            </section>
        </div>
    </>
);
