import { Appbar, KendoAppbarProps } from '../appbar.spec';
import { AppbarSection } from '../appbar-section';
import { AppbarNormal } from '../templates/appbar-normal';
import { AvatarImage } from '../../avatar/templates/avatar-image';
import { IconButton } from '../../button/templates/icon-button';
import { TextButton } from '../../button/templates/text-button';
import { TextboxNormal } from '../../textbox/templates/textbox-normal';

const options = { ...Appbar.options };
const states = Appbar.states;

// Make 'primary' the default color option
const defaults = { ...Appbar.defaultOptions, themeColor: 'primary', variant: 'top' };
options.themeColor = ['primary', ...options.themeColor.filter((color: string) => color !== 'primary')];

const variants = [
  {
    name: 'top',
    title: 'Top',
  },
  {
    name: 'bottom',
    title: 'Bottom',
  },
];

const modifiers = [
  {
    name: 'sticky',
    title: 'Sticky',
    type: 'boolean',
  },
];

export const AppbarDemo = (
  props: KendoAppbarProps & { variant?: (typeof variants)[number]['name'] } & {
    modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
  }) => {
  const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

  let additionalProps: any = { positionMode: "sticky" };

  Object.keys(mods || {}).forEach((modifier) => {
    switch (modifier) {
      case 'sticky': {
        additionalProps.positionMode = mods?.[modifier] ? "sticky" : "static";
      }
    }
  });

  const appBar = (
    <AppbarNormal position={variant} {...other} {...additionalProps}>
      <AppbarSection>
        <IconButton fillMode="flat" icon="menu"></IconButton>
      </AppbarSection>
      <span className="k-spacer k-spacer-sized" style={{ width: '8px' }}></span>
      <AppbarSection>
        <h3 className="k-m-0">AppBar</h3>
      </AppbarSection>
      <span className="k-spacer"></span>
      <AppbarSection>
        <TextButton fillMode="flat">Button</TextButton>
        <TextButton fillMode="flat">Button</TextButton>
        <TextButton fillMode="flat">Button</TextButton>
      </AppbarSection>
      <span className="k-spacer k-spacer-sized" style={{ width: '8px' }}></span>
      <AppbarSection>
        <TextboxNormal value="Input value" />
      </AppbarSection>
      <AppbarSection>
        <IconButton className="k-mx-sm" fillMode="flat" icon="bell"></IconButton>
        <span className="k-appbar-separator"></span>
        <AvatarImage className="k-mx-sm">
          <img src="https://demos.telerik.com/kendo-ui/content/web/Customers/RICSU.jpg" />
        </AvatarImage>
      </AppbarSection>
    </AppbarNormal>
  );

  const content = (
    <div style={{ padding: '25px 10px' }}>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, harum magnam? Possimus magnam non natus error consectetur voluptatum, unde
        quasi rerum ad facere, hic in! Qui ducimus ab sed consequuntur excepturi fugiat! Facilis fuga asperiores pariatur sed. Eligendi aliquid vel
        nemo, ipsum tempora minima consequatur culpa molestias maiores nihil eveniet accusantium porro. Inventore saepe ut ad in a. Quo itaque est
        expedita quidem consectetur enim quam minima, quisquam harum velit, earum adipisci provident, officia eveniet voluptas vero accusamus ad
        ducimus laudantium!
      </p>
      <p>
        Consequatur incidunt sequi explicabo adipisci saepe, accusamus, numquam fuga quam ex, provident possimus ratione blanditiis
        ducimus quos nulla repellat error pariatur nemo nobis illo! Saepe deleniti dolore cumque, sequi similique eligendi consectetur corrupti iste
        reprehenderit adipisci enim laudantium inventore totam quos non impedit quibusdam et consequuntur blanditiis accusamus! Rerum, nostrum. Rerum,
        tempore earum officia alias suscipit ut minima recusandae dolorem reprehenderit ea?
      </p>
      <p>
        Aliquam pariatur ut expedita, repellat architecto aut, consequatur
        iure recusandae tempora odit consequuntur, nihil nostrum totam accusantium at. Dignissimos repellendus culpa nesciunt. Officia repudiandae, laudantium
        error iure in minus ratione reprehenderit dolorum alias quo voluptatibus doloremque aliquid exercitationem quidem odit earum natus autem eaque tempore
        nulla esse sapiente? Dolore aliquid aliquam modi velit quaerat!
      </p>
      <p>
        Sunt consequuntur, aliquam eius beatae ex odit quasi iusto, accusamus architecto
        corrupti reprehenderit dolores itaque aliquid veniam odio eaque vel doloremque? Corporis, tenetur delectus deleniti voluptatum autem necessitatibus
        esse nisi ad, optio cumque quas dignissimos reprehenderit. Optio dolores quam corporis ea, reiciendis eos sit. Voluptate vel esse necessitatibus
        eum, sunt fuga, quaerat, eos natus quod repellendus nulla voluptatem ut quo quas ipsa animi incidunt autem saepe perferendis. Sequi ratione in iste,
        quibusdam, neque facilis accusantium, eum rem error sunt a explicabo commodi impedit quam.
      </p>
    </div>
  );

  switch (variant) {
    case 'bottom':
      return (
        <div style={{ height: '250px', overflow: 'auto' }}>
          {content}
          {appBar}
        </div>
      );
    case 'top':
    default:
      return (
        <div style={{ height: '250px', overflow: 'auto' }}>
          {appBar}
          {content}
        </div>
      );
  }
};

AppbarDemo.options = options;
AppbarDemo.states = states;
AppbarDemo.variants = variants;
AppbarDemo.defaultOptions = defaults;
AppbarDemo.modifiers = modifiers;

export default AppbarDemo;
