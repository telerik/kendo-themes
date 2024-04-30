import { Layout } from "..";

export const GridLayoutNormal = ({ alignItems = "start", justifyItems = "start", ...other }: any) => (
    <Layout type="grid"
        alignItems={alignItems}
        justifyItems={justifyItems}
        children={
            <>
                <div className="box">Box</div>
                <div className="box">Box</div>
                <div className="box">Box</div>
                <div className="box">Box</div>
                <div className="box">Box</div>
                <div className="box">Box</div>
            </>
        }
        {...other} />
);
