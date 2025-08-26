import { SvgIcon } from '../../icon';
import * as SVGIcons from "@progress/kendo-svg-icons";


const styles = `
    #test-area {
        grid-template-columns: repeat(32, min-content);
        gap: 10px;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            {Object.keys(SVGIcons).map((key, index) => (
                <span key={index}>
                    <SvgIcon className="k-icon" icon={SVGIcons[key]} />
                </span>
            ))}
        </div>
    </>
);
