import { Rating } from "..";

export const RatingDisabled = ({ value = 2.5, ...props }: any) => (
    <Rating
        disabled
        value={value}
        aria-label={props['aria-label'] || "Disabled rating"}
        {...props}
    />
);
