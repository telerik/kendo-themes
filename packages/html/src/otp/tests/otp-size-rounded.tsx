import { OneTimePasswordGroups } from '../templates/otp-groups';
import { OneTimePasswordGroupsNoSpace } from '../templates/otp-groups-no-space';
import { OneTimePasswordInput } from '../otp-input';

const styles = `
    #test-area {
        max-width: 1240px;
        grid-template-columns: 80px 1fr 1fr 1fr;
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
                    <span>{`${rounded}`}</span>
                    {OneTimePasswordInput.options.size.filter(size => size !== undefined).map((size) => (
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
                    <span>{`${rounded}`}</span>
                    {OneTimePasswordInput.options.size.filter(size => size !== undefined).map((size) => (
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
