import { Layout } from "..";

export const StackLayoutNormal = ({ alignItems = "start", justifyContent = "start", ...other }: any) => (
    <Layout type="stack" orientation="horizontal"
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

export default StackLayoutNormal;
