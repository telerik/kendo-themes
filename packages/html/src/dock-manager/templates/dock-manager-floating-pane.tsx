import { WindowNormal } from "../../window";

export const DockManagerFloatingPane = (props) => (
    <WindowNormal
        className="k-floating-pane"
        title="Pane Title"
        actions={["window-minimize", "window", "more-vertical"]}
        children={
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur error repudiandaecorrupti qui. Ipsum corporis, voluptates numquam distinctio et dolorem illum. Ipsa, laborumsoluta cum asperiores sit fuga iure ad.
            Deleniti veniam totam debitis quidem vitae id sunt, fuga at ipsa sed deserunt nulla ipsumquam!
        </p>
    }
    {...props}
    />

);
