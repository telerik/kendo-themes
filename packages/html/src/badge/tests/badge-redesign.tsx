import { Icon } from '../../icon';
import { Badge, BadgeNormal } from '..';

const styles = `
    #test-area {
        display: grid;
        gap: 24px;
    }

    .badge-redesign-section {
        display: grid;
        gap: 12px;
    }

    .badge-redesign-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 12px;
    }

    .badge-redesign-size {
        min-width: 48px;
    }
`;

const icon = <Icon className="k-badge-icon" icon="star" />;
const sizes = Badge.options.size.filter(Boolean);

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area">
            <section className="badge-redesign-section">
                <h3>Content alignment</h3>
                {sizes.map((size) => (
                    <div className="badge-redesign-row" key={`content-${size}`}>
                        <span className="badge-redesign-size">{size}</span>
                        <BadgeNormal size={size}>Text</BadgeNormal>
                        <BadgeNormal size={size}>{icon}Leading</BadgeNormal>
                        <BadgeNormal size={size}>Trailing{icon}</BadgeNormal>
                        <BadgeNormal className="k-badge-icon-only" size={size} rounded="full">{icon}</BadgeNormal>
                    </div>
                ))}
                <h3>Pill content alignment</h3>
                {sizes.map((size) => (
                    <div className="badge-redesign-row" key={`pill-content-${size}`}>
                        <span className="badge-redesign-size">{size}</span>
                        <BadgeNormal size={size} rounded="full">Text</BadgeNormal>
                        <BadgeNormal size={size} rounded="full">{icon}Leading</BadgeNormal>
                        <BadgeNormal size={size} rounded="full">Trailing{icon}</BadgeNormal>
                        <BadgeNormal className="k-badge-icon-only" size={size} rounded="full">{icon}</BadgeNormal>
                    </div>
                ))}
            </section>

            <section className="badge-redesign-section">
                <h3>Shapes and padding</h3>
                <div className="badge-redesign-row">
                    <BadgeNormal rounded="none">Rectangle</BadgeNormal>
                    <BadgeNormal rounded="small">Rounded</BadgeNormal>
                    <BadgeNormal rounded="medium">Rounded</BadgeNormal>
                    <BadgeNormal rounded="large">Rounded</BadgeNormal>
                    <BadgeNormal rounded="full">Pill</BadgeNormal>
                    <BadgeNormal rounded="full">99</BadgeNormal>
                </div>
            </section>

            <section className="badge-redesign-section">
                <h3>Subtle theme colors</h3>
                <div className="badge-redesign-row">
                    {Badge.options.themeColor.filter(Boolean).map((themeColor) => (
                        <BadgeNormal
                            key={themeColor}
                            fillMode="subtle"
                            themeColor={themeColor}
                            rounded="full"
                        >
                            {themeColor}
                        </BadgeNormal>
                    ))}
                </div>
            </section>
        </div>
    </>
);
