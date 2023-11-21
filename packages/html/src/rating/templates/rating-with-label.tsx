import { Rating, RatingItem } from "..";

export const RatingWithLabel = (props) =>(
    <Rating
        label="2.5 / 5"
        children={
            <>
                <RatingItem dir={props.dir} iconFill="solid" selected/>
                <RatingItem dir={props.dir} iconFill="solid" selected/>
                <RatingItem dir={props.dir} iconFill="split" selected/>
                <RatingItem dir={props.dir} iconFill="outline"/>
                <RatingItem dir={props.dir} iconFill="outline"/>
            </>
        }
        {...props}>
    </Rating>
);
