import { GridLayout } from '../grid-layout.spec';

export const GridLayoutNormal = ({ alignItems = "start", justifyItems = "start", ...other }: any) => (
    <GridLayout
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
