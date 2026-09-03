import { Button } from '..';
import { Icon } from '../../icon';

const styles = `
    #test-area {
        grid-template-columns: 100px repeat(4, minmax(140px, 1fr));
        max-width: 900px;
    }
`;

const TrailingIconButton = (props: React.ComponentProps<typeof Button>) => (
    <Button text="Button" {...props}>
        <Icon className="k-button-icon" icon="star" />
    </Button>
);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span>Leading icon</span>
            <span>Trailing icon</span>
            <span>Leading icon RTL</span>
            <span>Trailing icon RTL</span>

            {Button.options.size.map((size) => (
                <>
                    <span>{`${size}`}</span>
                    <span><Button icon="star" text="Button" size={size} /></span>
                    <span><TrailingIconButton size={size} /></span>
                    <span dir="rtl"><Button icon="star" text="Button" size={size} /></span>
                    <span dir="rtl"><TrailingIconButton size={size} /></span>
                </>
            ))}
        </div>
    </>
);
