import { Icon } from "../../icon/icon.spec";
import { Badge } from "../badge.spec";
import { IconBadge } from "../templates/icon-badge";

const styles = `
    #test-area {
        grid-template-columns: 80px repeat(5, 1fr);
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">
      <span></span>
      <span>Baseline</span>
      <span>Rectangle</span>
      <span>Rounded</span>
      <span>Pill</span>
      <span>Circle</span>

      {Badge.options.fillMode.map((fillMode) => (
        <>
          <div className="k-col-span-full k-text-center">{`${fillMode}`}</div>

          <span>Small</span>
          <span>
            <Badge fillMode={fillMode} size="small">
              99
            </Badge>
          </span>
          <span>
            <IconBadge fillMode={fillMode} size="small" rounded="none" />
          </span>
          <span>
            <IconBadge fillMode={fillMode} size="small" rounded="small" />
          </span>
          <span>
            <IconBadge fillMode={fillMode} size="small" rounded="full" />
          </span>
          <span>
            <IconBadge fillMode={fillMode} size="small" rounded="full" />
          </span>

          <span>Normal</span>
          <span>
            <Badge fillMode={fillMode} themeColor="tertiary">
              99
            </Badge>
          </span>
          <span>
            <IconBadge fillMode={fillMode} themeColor="tertiary" rounded="none">
              <Icon className="k-badge-icon" icon="plus-circle"></Icon>
            </IconBadge>
          </span>
          <span>
            <IconBadge fillMode={fillMode} themeColor="tertiary" rounded="medium">
              <Icon className="k-badge-icon" icon="plus-circle"></Icon>
            </IconBadge>
          </span>
          <span>
            <IconBadge fillMode={fillMode} themeColor="tertiary" rounded="full">
              <Icon className="k-badge-icon" icon="plus-circle"></Icon>
            </IconBadge>
          </span>
          <span>
            <IconBadge fillMode={fillMode} themeColor="tertiary" rounded="full">
              <Icon className="k-badge-icon" icon="plus-circle"></Icon>
            </IconBadge>
          </span>

          <span>Large</span>
          <span>
            <Badge size="large" fillMode={fillMode} themeColor="error">
              99
            </Badge>
          </span>
          <span>
            <IconBadge size="large" fillMode={fillMode} themeColor="error" rounded="none" />
          </span>
          <span>
            <IconBadge size="large" fillMode={fillMode} themeColor="error" rounded="large" />
          </span>
          <span>
            <IconBadge size="large" fillMode={fillMode} themeColor="error" rounded="full" />
          </span>
          <span>
            <IconBadge size="large" fillMode={fillMode} themeColor="error" rounded="full" />
          </span>
        </>
      ))}
    </div>
  </>
);
