import ReactDOM from 'react-dom/client';
import { SvgIcon } from '../../icon';
import * as SVGIcons from "@progress/kendo-svg-icons";

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: repeat(32, min-content);
        gap: 10px;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            {Object.keys(SVGIcons).map((key, index) => (
                <span key={index}>
                    <SvgIcon icon={SVGIcons[key]} />
                </span>
            ))}
        </div>
    </>
);
