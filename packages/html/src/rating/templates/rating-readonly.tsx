import { Rating } from "..";

export const RatingReadonly = ({ value = 2.5, ...props }: any) => (
    <Rating
        readonly
        value={value}
        aria-label={props['aria-label'] || "Read-only rating"}
        {...props}
    />
);
