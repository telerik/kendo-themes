import { Avatar } from '../../avatar';
import { Icon } from '../../icon';


const styles = `
    #test-area {
        grid-template-columns: 200px repeat(8, 1fr);
    }
    .k-avatar-image:empty {
        background-image: url("/packages/html/assets/avatar.jpg");
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">
            <span></span>
            <span className="col-2">Image</span>
            <span className="col-2">Bg image</span>
            <span className="col-2">Icon</span>
            <span className="col-2">Text</span>

            <span>primary</span>
            <Avatar type="image" themeColor="primary">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="primary">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="primary"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="primary"></Avatar>

            <Avatar type="icon" themeColor="primary">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="primary" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="primary">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="primary" border>JO</Avatar>

            <span>secondary</span>
            <Avatar type="image" themeColor="secondary">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="secondary">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="secondary"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="secondary"></Avatar>

            <Avatar type="icon" themeColor="secondary">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="secondary" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="secondary">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="secondary" border>JO</Avatar>

            <span>tertiary</span>
            <Avatar type="image" themeColor="tertiary">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="tertiary">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="tertiary"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="tertiary"></Avatar>

            <Avatar type="icon" themeColor="tertiary">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="tertiary" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="tertiary">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="tertiary" border>JO</Avatar>

            <span>info</span>
            <Avatar type="image" themeColor="info">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="info">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="info"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="info"></Avatar>

            <Avatar type="icon" themeColor="info">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="info" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="info">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="info" border>JO</Avatar>

            <span>success</span>
            <Avatar type="image" themeColor="success">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="success">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="success"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="success"></Avatar>

            <Avatar type="icon" themeColor="success">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="success" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="success">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="success" border>JO</Avatar>

            <span>warning</span>
            <Avatar type="image" themeColor="warning">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="warning">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="warning"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="warning"></Avatar>

            <Avatar type="icon" themeColor="warning">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="warning" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="warning">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="warning" border>JO</Avatar>

            <span>error</span>
            <Avatar type="image" themeColor="error">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="error">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="error"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="error"></Avatar>

            <Avatar type="icon" themeColor="error">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="error" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="error">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="error" border>JO</Avatar>

            <span>dark</span>
            <Avatar type="image" themeColor="dark">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="dark">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="dark"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="dark"></Avatar>

            <Avatar type="icon" themeColor="dark">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="dark" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="dark">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="dark" border>JO</Avatar>

            <span>light</span>
            <Avatar type="image" themeColor="light">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="light">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="light"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="light"></Avatar>

            <Avatar type="icon" themeColor="light">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="light" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="light">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="light" border>JO</Avatar>

            <span>inverse</span>
            <Avatar type="image" themeColor="inverse">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>
            <Avatar type="image" fillMode="outline" themeColor="inverse">
                <img src="/packages/html/assets/avatar.jpg" />
            </Avatar>

            <Avatar type="image" themeColor="inverse"></Avatar>
            <Avatar type="image" fillMode="outline" themeColor="inverse"></Avatar>

            <Avatar type="icon" themeColor="inverse">
                <Icon icon="x" />
            </Avatar>
            <Avatar type="icon" fillMode="outline" themeColor="inverse" border>
                <Icon icon="x" />
            </Avatar>

            <Avatar type="text" themeColor="inverse">JO</Avatar>
            <Avatar type="text" fillMode="outline" themeColor="inverse" border>JO</Avatar>
        </div>
    </>
);
