
import ReactDOM from 'react-dom/client';
import { Chip } from '../../chip';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

const styles = `
    #test-area {
        gap: 10px;
        grid-template-columns: 120px repeat(3, 1fr);
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

            <span>none</span>
            <span>
                <Chip text="Text" size="small" rounded={null} />
            </span>
            <span>
                <Chip text="Text" size="medium" rounded={null} />
            </span>
            <span>
                <Chip text="Text" size="large" rounded={null} />
            </span>
            <span>^ icon</span>
            <span>
                <Chip text="Text" size="small" icon="map-marker-target" rounded={null} />
            </span>
            <span>
                <Chip text="Text" size="medium" icon="map-marker-target" rounded={null} />
            </span>
            <span>
                <Chip text="Text" size="large" icon="map-marker-target" rounded={null} />
            </span>
            <span>^ avatar</span>
            <span>
                <Chip text="Text" size="small" showAvatar rounded={null} />
            </span>
            <span>
                <Chip text="Text" size="medium" showAvatar rounded={null} />
            </span>
            <span>
                <Chip text="Text" size="large" showAvatar rounded={null} />
            </span>

            <span>small</span>
            <span>
                <Chip text="Text" size="small" rounded="small" />
            </span>
            <span>
                <Chip text="Text" size="medium" rounded="small" />
            </span>
            <span>
                <Chip text="Text" size="large" rounded="small" />
            </span>
            <span>^ icon</span>
            <span>
                <Chip text="Text" size="small" icon="map-marker-target" rounded="small" />
            </span>
            <span>
                <Chip text="Text" size="medium" icon="map-marker-target" rounded="small" />
            </span>
            <span>
                <Chip text="Text" size="large" icon="map-marker-target" rounded="small" />
            </span>
            <span>^ avatar</span>
            <span>
                <Chip text="Text" size="small" showAvatar rounded="small" />
            </span>
            <span>
                <Chip text="Text" size="medium" showAvatar rounded="small" />
            </span>
            <span>
                <Chip text="Text" size="large" showAvatar rounded="small" />
            </span>

            <span>medium</span>
            <span>
                <Chip text="Text" size="small" rounded="medium" />
            </span>
            <span>
                <Chip text="Text" size="medium" rounded="medium" />
            </span>
            <span>
                <Chip text="Text" size="large" rounded="medium" />
            </span>
            <span>^ icon</span>
            <span>
                <Chip text="Text" size="small" icon="map-marker-target" rounded="medium" />
            </span>
            <span>
                <Chip text="Text" size="medium" icon="map-marker-target" rounded="medium" />
            </span>
            <span>
                <Chip text="Text" size="large" icon="map-marker-target" rounded="medium" />
            </span>
            <span>^ avatar</span>
            <span>
                <Chip text="Text" size="small" showAvatar rounded="medium" />
            </span>
            <span>
                <Chip text="Text" size="medium" showAvatar rounded="medium" />
            </span>
            <span>
                <Chip text="Text" size="large" showAvatar rounded="medium" />
            </span>

            <span>large</span>
            <span>
                <Chip text="Text" size="small" rounded="large" />
            </span>
            <span>
                <Chip text="Text" size="medium" rounded="large" />
            </span>
            <span>
                <Chip text="Text" size="large" rounded="large" />
            </span>
            <span>^ icon</span>
            <span>
                <Chip text="Text" size="small" icon="map-marker-target" rounded="large" />
            </span>
            <span>
                <Chip text="Text" size="medium" icon="map-marker-target" rounded="large" />
            </span>
            <span>
                <Chip text="Text" size="large" icon="map-marker-target" rounded="large" />
            </span>
            <span>^ avatar</span>
            <span>
                <Chip text="Text" size="small" showAvatar rounded="large" />
            </span>
            <span>
                <Chip text="Text" size="medium" showAvatar rounded="large" />
            </span>
            <span>
                <Chip text="Text" size="large" showAvatar rounded="large" />
            </span>

            <span>full</span>
            <span>
                <Chip text="Text" size="small" rounded="full" />
            </span>
            <span>
                <Chip text="Text" size="medium" rounded="full" />
            </span>
            <span>
                <Chip text="Text" size="large" rounded="full" />
            </span>
            <span>^ icon</span>
            <span>
                <Chip text="Text" size="small" icon="map-marker-target" rounded="full" />
            </span>
            <span>
                <Chip text="Text" size="medium" icon="map-marker-target" rounded="full" />
            </span>
            <span>
                <Chip text="Text" size="large" icon="map-marker-target" rounded="full" />
            </span>
            <span>^ avatar</span>
            <span>
                <Chip text="Text" size="small" showAvatar rounded="full" />
            </span>
            <span>
                <Chip text="Text" size="medium" showAvatar rounded="full" />
            </span>
            <span>
                <Chip text="Text" size="large" showAvatar rounded="full" />
            </span>
        </div>
    </>
);
