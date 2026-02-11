import { Rating } from '../rating.spec';

export const RatingNormal = ({ value = 2.5, ...props }: any) =>(
    <Rating
        value={value}
        {...props}
    />
);
