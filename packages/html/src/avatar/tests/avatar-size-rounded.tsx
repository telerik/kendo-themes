import { Icon } from '../../icon';
import { Avatar, AvatarIcon, AvatarImage, AvatarText } from '../../avatar';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(4, 1fr);
        align-items: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>undefined</span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>
            {Avatar.options.rounded.map((roundness) => (
                <>
                    <span>{`${roundness}`}</span>
                    {Avatar.options.size.map((size) => (
                        <span className="k-d-flex k-gap-1">
                            <AvatarImage size={size} rounded={roundness}>
                                <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
                            </AvatarImage>
                            <AvatarIcon size={size} rounded={roundness}>
                                <Icon icon="x" />
                            </AvatarIcon>
                            <AvatarText size={size} rounded={roundness} fillMode="outline" border>JO</AvatarText>
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
