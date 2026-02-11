import { FileBox } from '../file-box.spec';
import { FileBoxWrapper } from '../file-box-wrapper.spec';


const styles = `
   #test-area {
        max-width: 1240px;
   }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-3">
            <span>Horizontal (Default)</span>
            <span>Wrap</span>
            <span>Vertical</span>

            <section>
                <FileBoxWrapper>
                    <FileBox />
                    <FileBox />
                    <FileBox />
                </FileBoxWrapper>
            </section>

            <section>
                <FileBoxWrapper layout="wrap">
                    <FileBox />
                    <FileBox />
                    <FileBox />
                </FileBoxWrapper>
            </section>

            <section>
                <FileBoxWrapper layout="vertical">
                    <FileBox />
                    <FileBox />
                    <FileBox />
                </FileBoxWrapper>
            </section>

        </div>
    </>
);
