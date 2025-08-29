import { StackLayout } from "..";

export const StackLayoutNormal = ({ alignItems = "start", justifyContent = "start", ...other }: any) => (
    <StackLayout
        orientation="horizontal"
        alignItems={alignItems}
        justifyContent={justifyContent}
        children={
            <>
                <div className="box">Box</div>
                <div className="box">Box</div>
                <div className="box">Box</div>
            </>
        }
        {...other} />
);
