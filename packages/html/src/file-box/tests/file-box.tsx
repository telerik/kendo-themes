import { FileBox, FileBoxWrapper } from '..';


const styles = `
   #test-area {
        max-width: 1240px;
   }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-1">
            <span>File box</span>

            <section>
                <FileBoxWrapper layout="vertical">
                    <FileBox />
                </FileBoxWrapper>
            </section>

        </div>
    </>
);
