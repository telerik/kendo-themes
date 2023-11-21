import { Rating, RatingItem } from "..";

export const RatingNormal = (props) =>(
    <Rating
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
