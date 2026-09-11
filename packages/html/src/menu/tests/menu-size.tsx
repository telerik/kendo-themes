import { Menu, MenuItem, MenuNormal } from "..";

export default () => (
  <>
    <div id="test-area" className="k-d-grid k-grid-cols-1">
      <span>Horizontal Menu</span>

      {Menu.options.size.map((size: string, i: number) => (
        <section key={i}>
          <span>{`${size}`}</span>
          <MenuNormal size={size}>
            <MenuItem first text="Normal" icon="folder"></MenuItem>
            <MenuItem text="Hover" hover icon="folder"></MenuItem>
            <MenuItem text="Active" icon="folder" active></MenuItem>
            <MenuItem text="Selected" selected icon="folder"></MenuItem>
            <MenuItem focus text="Focused" icon="folder"></MenuItem>
            <MenuItem last text="Disabled" icon="folder" disabled></MenuItem>
          </MenuNormal>
        </section>
      ))}

      <span>Vertical Menu</span>

      <div className="k-d-grid k-gap-4 k-grid-cols-4">
        {Menu.options.size.map((size: string, i: number) => (
          <section key={i}>
            <span>{`${size}`}</span>
            <MenuNormal orientation="vertical" size={size}>
              <MenuItem first text="Normal" icon="folder"></MenuItem>
              <MenuItem text="Hover" hover icon="folder"></MenuItem>
              <MenuItem text="Active" icon="folder" active></MenuItem>
              <MenuItem text="Selected" selected icon="folder"></MenuItem>
              <MenuItem focus text="Focused" icon="folder"></MenuItem>
              <MenuItem last text="Disabled" icon="folder" disabled></MenuItem>
            </MenuNormal>
          </section>
        ))}
      </div>
    </div>
  </>
);
