import { Badge, BadgeNormal } from '..';

const styles = `
    #test-area {
        max-width: 1240px;
        gap: 24px;
    }
    .badge-size-grid {
        grid-template-columns: 120px 1fr;
        gap: 8px;
    }
    small,
    section {
        white-space: nowrap;
    }
    section {
        display: flex;
        align-items: center;
        gap: 8px;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-flex k-flex-col">
            {Badge.options.size.map((size) => (
                <div className="badge-size-grid k-d-grid" key={`${size}`}>
                    <span><small>Rounded / Size</small></span>
                    <span>{`${size}`}</span>
                    {Badge.options.rounded.map((roundness) => (
                        <>
                            <span>{`${roundness}`}</span>
                            <section>
                                <BadgeNormal size={size} rounded={roundness}>Text</BadgeNormal>
                                <BadgeNormal size={size} rounded={roundness} endIcon="plus-circle">Text</BadgeNormal>
                                <BadgeNormal size={size} rounded={roundness} icon="plus-circle">Text</BadgeNormal>
                                <BadgeNormal size={size} rounded={roundness} icon="plus-circle" />
                                <BadgeNormal size={size} rounded={roundness}>1</BadgeNormal>
                                <BadgeNormal size={size} rounded={roundness}></BadgeNormal>
                            </section>
                        </>
                    ))}
                </div>
            ))}
        </div>
    </>
);
