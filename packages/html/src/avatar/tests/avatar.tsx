import { Avatar, AvatarText, AvatarImage, AvatarIcon } from "../../avatar";
import { Icon } from "../../icon";

const styles = `
    #test-area {
        grid-template-columns: 200px repeat(4, 1fr);
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
      <span>Bg image</span>
      <span>Icon</span>
      <span>Text</span>

      {Avatar.options.themeColor.map((themeColor) => (
        <>
          <span>{themeColor}</span>
          <AvatarImage themeColor={themeColor}>
            <img src="/packages/html/assets/avatar.jpg" />
          </AvatarImage>

          <AvatarImage type="image" themeColor={themeColor}></AvatarImage>

          <AvatarIcon themeColor={themeColor}>
            <Icon icon="x" />
          </AvatarIcon>

          <AvatarText themeColor={themeColor}>JO</AvatarText>
        </>
      ))}
    </div>
  </>
);
