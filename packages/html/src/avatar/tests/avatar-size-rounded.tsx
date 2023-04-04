import ReactDOM from 'react-dom/client';
import { Avatar } from '../../avatar';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        grid-template-columns: 120px repeat(3, 1fr);
        align-items: center;
    }
`;

root.render(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="small" themeColor="primary" rounded={null}>
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="small" themeColor="primary" rounded={null}>
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="small" themeColor="primary" rounded={null} fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="medium" themeColor="primary" rounded={null}>
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="medium" themeColor="primary" rounded={null}>
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="medium" themeColor="primary" rounded={null} fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="large" themeColor="primary" rounded={null}>
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="large" themeColor="primary" rounded={null}>
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="large" themeColor="primary" rounded={null} fillMode="outline" border>JO</Avatar>
            </span>

            <span>small</span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="small" themeColor="primary" rounded="small">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="small" themeColor="primary" rounded="small">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="small" themeColor="primary" rounded="small" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="medium" themeColor="primary" rounded="small">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="medium" themeColor="primary" rounded="small">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="medium" themeColor="primary" rounded="small" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="large" themeColor="primary" rounded="small">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="large" themeColor="primary" rounded="small">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="large" themeColor="primary" rounded="small" fillMode="outline" border>JO</Avatar>
            </span>

            <span>medium</span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="small" themeColor="primary" rounded="medium">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="small" themeColor="primary" rounded="medium">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="small" themeColor="primary" rounded="medium" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="medium" themeColor="primary" rounded="medium">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="medium" themeColor="primary" rounded="medium">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="medium" themeColor="primary" rounded="medium" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="large" themeColor="primary" rounded="medium">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="large" themeColor="primary" rounded="medium">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="large" themeColor="primary" rounded="medium" fillMode="outline" border>JO</Avatar>
            </span>

            <span>large</span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="small" themeColor="primary" rounded="large">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="small" themeColor="primary" rounded="large">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="small" themeColor="primary" rounded="large" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="medium" themeColor="primary" rounded="large">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="medium" themeColor="primary" rounded="large">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="medium" themeColor="primary" rounded="large" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="large" themeColor="primary" rounded="large">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="large" themeColor="primary" rounded="large">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="large" themeColor="primary" rounded="large" fillMode="outline" border>JO</Avatar>
            </span>

            <span>full</span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="small" themeColor="primary" rounded="full">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="small" themeColor="primary" rounded="full">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="small" themeColor="primary" rounded="full" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="medium" themeColor="primary" rounded="full">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="medium" themeColor="primary" rounded="full">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="medium" themeColor="primary" rounded="full" fillMode="outline" border>JO</Avatar>
            </span>
            <span className="k-d-flex k-gap-1">
                <Avatar type="image" size="large" themeColor="primary" rounded="full">
                    <img src="/packages/html/assets/avatar.jpg" />
                </Avatar>
                <Avatar type="icon" size="large" themeColor="primary" rounded="full">
                    <Icon name="x" />
                </Avatar>
                <Avatar type="text" size="large" themeColor="primary" rounded="full" fillMode="outline" border>JO</Avatar>
            </span>
        </div>
    </>
);
