import { FileBox } from '..';


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
                <FileBox />
            </section>

        </div>
    </>
);
