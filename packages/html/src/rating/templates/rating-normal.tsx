import { Rating } from "..";

export const RatingNormal = ({ value = 2.5, ...props }: any) =>(
    <Rating
        value={value}
        {...props}
        aria-label={props['aria-label'] || "Rating"}
    />
);
