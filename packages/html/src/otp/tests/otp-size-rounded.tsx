import { OneTimePasswordGroups, OneTimePasswordGroupsNoSpace, OneTimePasswordInput } from '..';

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 320px 320px 1fr;
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span>
                <small>Space, rounded / size</small>
            </span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {OneTimePasswordInput.options.rounded.map((rounded) => (
                <>
                    <span>{rounded}</span>
                    {OneTimePasswordInput.options.size.map((size) => (
                        <>
                            <div>
                                <OneTimePasswordGroups size={size} rounded={rounded} value="1" />
                            </div>
                        </>
                    ))}
                </>
            ))}

            <span>
                <small>No Space, rounded / size</small>
            </span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            {OneTimePasswordInput.options.rounded.map((rounded) => (
                <>
                    <span>{rounded}</span>
                    {OneTimePasswordInput.options.size.map((size) => (
                        <>
                            <div>
                                <OneTimePasswordGroupsNoSpace size={size} rounded={rounded} value="1" />
                            </div>
                        </>
                    ))}
                </>
            ))}
        </div>
    </>
);
