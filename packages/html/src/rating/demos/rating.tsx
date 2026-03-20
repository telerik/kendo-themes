import { Rating, RatingProps } from '../rating.spec';
import { RatingNormal } from '../templates/rating-normal';
import { RatingWithLabel } from '../templates/rating-with-label';

const options = Rating.options;
const states = Rating.states;
const defaults = {
  ...Rating.defaultOptions,
  variant: 'normal',
};

const variants = [
    {
        name: 'normal',
        title: 'Normal',
    },
    {
        name: 'label',
        title: 'With label',
    },
];
const modifiers = [];

export const RatingDemo = (props: RatingProps & { variant?: (typeof variants)[number]['name'] }) => {
    const { variant, ...other } = props;

    switch (variant) {
        case 'label':
            return (
                <RatingWithLabel {...other} />
            );
        case 'normal':
        default:
            return (
                <RatingNormal {...other} />
            );
    }
}


RatingDemo.options = options;
RatingDemo.states = states;
RatingDemo.variants = variants;
RatingDemo.defaultOptions = defaults;
RatingDemo.modifiers = modifiers;
RatingDemo.className = Rating.className;

export default RatingDemo;

