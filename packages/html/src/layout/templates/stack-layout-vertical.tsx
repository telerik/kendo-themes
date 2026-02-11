import { StackLayout } from '../stack-layout.spec';

export const StackLayoutVertical = ({ alignItems = "start", justifyContent = "start", ...other }: any) => (
    <StackLayout
        orientation="vertical"
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
