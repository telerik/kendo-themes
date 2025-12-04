import { Avatar, AvatarText, AvatarImage, AvatarIcon } from "../../avatar";
import { Icon } from "../../icon";

const styles = `
    #test-area {
        grid-template-columns: 200px repeat(8, 1fr);
    }
    .k-avatar-image:empty {
        background-image: url("/packages/html/assets/avatar.jpg");
    }
`;

export default () => (
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span className="col-2">Image</span>
            <span className="col-2">Bg image</span>
            <span className="col-2">Icon</span>
            <span className="col-2">Text</span>

            {Avatar.options.themeColor.map((themeColor) => (
                <>
                    <span>{themeColor}</span>
                    <AvatarImage themeColor={themeColor}>
                        <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
                    </AvatarImage>
                    <AvatarImage fillMode="outline" themeColor={themeColor}>
                        <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
                    </AvatarImage>

                    <AvatarImage type="image" themeColor={themeColor}></AvatarImage>
                    <AvatarImage type="image" fillMode="outline" themeColor={themeColor}></AvatarImage>

                    <AvatarIcon themeColor={themeColor}>
                        <Icon icon="x" />
                    </AvatarIcon>
                    <AvatarIcon fillMode="outline" themeColor={themeColor} border>
                        <Icon icon="x" />
                    </AvatarIcon>

                    <AvatarText themeColor={themeColor}>JO</AvatarText>
                    <AvatarText fillMode="outline" themeColor={themeColor} border>
            JO
                    </AvatarText>
                </>
            ))}
        </div>
    </>
);
