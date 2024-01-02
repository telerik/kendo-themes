import { Rating } from "..";

export const RatingWithLabel = ({ value = 2.5, max = 5, ...props }: any) =>(
    <Rating
        label={`${value} / ${max}`}
        value={value}
        max={max}
        {...props}
    />
);
