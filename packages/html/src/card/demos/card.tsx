import { Card, KendoCardProps } from '../card.spec';
import { CardBody } from '../card-body';
import { CardFooter } from '../card-footer';
import { CardHeader } from '../card-header';
import { CardMedia } from '../card-media';
import { CardNormal } from '../templates/card-normal';
import { CardHorizontal } from '../templates/card-horizontal';
import { ActionButtons } from '../../action-buttons/action-buttons.spec';
import { Button } from '../../button/button.spec';

const options = Card.options.themeColor;
const states = Card.states;
const defaults = {
  ...Card.defaultOptions,
  variant: 'vertical',
};

const variants = [
    {
        name: 'vertical',
        title: 'Vertical',
    },
    {
        name: 'horizontal',
        title: 'Horizontal',
    },
];

const modifiers = [
    {
        name: 'media',
        title: 'Card with Media',
    },
    {
        name: 'header',
        title: 'Card with Header',
    },
    {
        name: 'footer',
        title: 'Card with Footer',
    },
];

export const CardDemo = (
    props: KendoCardProps & { variant?: (typeof variants)[number]['name'] } & {
        modifiers?: { [key: (typeof modifiers)[number]['name']]: boolean };
    }
) => {
    const { variant, modifiers: mods, ...other } = { ...defaults, ...props };

    let hasMedia = false;
    let hasHeader = false;
    let hasFooter = false;

    Object.keys(mods || {}).forEach((modifier) => {
        switch (modifier) {
            case 'media': {
                hasMedia = mods?.[modifier] ? true : false;
                break;
            }
            case 'header': {
                hasHeader = mods?.[modifier] ? true : false;
                break;
            }
            case 'footer': {
                hasFooter = mods?.[modifier] ? true : false;
                break;
            }
        }
    });

    switch (variant) {
        case 'horizontal':
            return (
                <CardHorizontal style={{ maxWidth: "420px" }} {...other} >
                    {hasMedia &&
                        <CardMedia src="https://demos.telerik.com/kendo-ui/content/web/cards/rome.jpg" />
                    }
                    <div>
                        {hasHeader &&
                            <CardHeader title="Header Title" subtitle="Header Subtitle"></CardHeader>
                        }
                        <CardBody title='Title' subtitle='Subtitle'>
                            <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </CardBody>
                        {hasFooter &&
                            <CardFooter>
                                Card Footer
                            </CardFooter>
                        }
                    </div>
                    {(hasHeader || hasFooter) &&
                        <span className="k-separator k-separator-vertical"></span>
                    }
                    <ActionButtons orientation="vertical" alignment="stretched" className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Button</Button>
                        <Button fillMode="flat" themeColor="primary">Button</Button>
                    </ActionButtons>
                </CardHorizontal>
            );
        case 'vertical':
        default:
            return (
                <CardNormal style={{ maxHeight: "450px", width: "300px" }} {...other} >
                    {hasHeader &&
                        <CardHeader title="Header Title" subtitle="Header Subtitle"></CardHeader>
                    }
                    {hasMedia &&
                        <CardMedia src="https://demos.telerik.com/kendo-ui/content/web/cards/rome.jpg" />
                    }
                    <CardBody title='Title' subtitle='Subtitle'>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </CardBody>
                    {hasFooter &&
                        <CardFooter>
                            Card Footer
                        </CardFooter>
                    }
                    <ActionButtons className="k-card-actions">
                        <Button fillMode="flat" themeColor="primary">Button</Button>
                        <Button fillMode="flat" themeColor="primary">Button</Button>
                    </ActionButtons>
                </CardNormal>
            );
    }
}


CardDemo.options = options;
CardDemo.states = states;
CardDemo.variants = variants;
CardDemo.defaultOptions = defaults;
CardDemo.modifiers = modifiers;

export default CardDemo;

