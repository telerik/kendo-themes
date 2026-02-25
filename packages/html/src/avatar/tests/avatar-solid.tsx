import { Avatar, AvatarText, AvatarImage, AvatarIcon } from "..";
import { Icon } from "../../icon";

const styles = `
    #test-area {
        grid-template-columns: 100px repeat(8, 1fr);
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
      <span>Image</span>
      <span>^ border</span>
      <span>Bg image</span>
      <span>^ border</span>
      <span>Icon</span>
      <span>^ border</span>
      <span>Text</span>
      <span>^ border</span>

      {Avatar.options.themeColor.map((themeColor) => (
        <>
          <span>{`${themeColor}`}</span>
          <AvatarImage fillMode="solid" themeColor={themeColor}>
            <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
          </AvatarImage>
          <AvatarImage border fillMode="solid" themeColor={themeColor}>
            <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
          </AvatarImage>

          <AvatarImage fillMode="solid" type="image" themeColor={themeColor}>
            <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
          </AvatarImage>
          <AvatarImage border fillMode="solid" type="image" themeColor={themeColor}>
            <img src="/packages/html/assets/avatar.jpg" alt="User avatar" />
          </AvatarImage>

          <AvatarIcon fillMode="solid" themeColor={themeColor}>
            <Icon icon="x" />
          </AvatarIcon>
          <AvatarIcon border fillMode="solid" themeColor={themeColor}>
            <Icon icon="x" />
          </AvatarIcon>

          <AvatarText fillMode="solid" themeColor={themeColor}>JO</AvatarText>
          <AvatarText border fillMode="solid" themeColor={themeColor}>JO</AvatarText>
        </>
      ))}
    </div>
  </>
);
