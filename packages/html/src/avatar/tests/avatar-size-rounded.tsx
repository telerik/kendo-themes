import { Icon } from '../../icon';
import { Avatar, AvatarIcon, AvatarImage, AvatarText } from '../../avatar';

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
        align-items: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>
            {[ null,...Avatar.options.rounded ].map((roundness) => (
                <>
                    <span>{roundness || 'null'}</span>
                    {Avatar.options.size.map((size) => (
                        <span className="k-d-flex k-gap-1">
                            <AvatarImage size={size} themeColor="primary" rounded={roundness}>
                                <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
                            </AvatarImage>
                            <AvatarIcon size={size} themeColor="primary" rounded={roundness}>
                                <Icon icon="x" />
                            </AvatarIcon>
                            <AvatarText size={size} themeColor="primary" rounded={roundness} fillMode="outline" border>JO</AvatarText>
                        </span>
                    ))}
                </>
            ))}
        </div>
    </>
);
