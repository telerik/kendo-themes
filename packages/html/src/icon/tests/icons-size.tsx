import { Icon } from '../icon.spec';


const styles = `
    #test-area {
        text-align: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-8">
            <span className="k-colspan-full">Sizes SVG Icon</span>

            {Icon.options.size.map((size) => (
                <span>{`${size}`}</span>
            ))}

            {Icon.options.size.map((size) => (
                <span>
                    <Icon icon="star" size={size} />
                </span>
            ))}
        </div>
    </>
);
