const elevationLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const style = `
    #test-area {
        max-width: unset;
        padding: 40px;
    }

    .elevation-grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 24px;
    }

    .elevation-surface-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 24px 16px;
        border-radius: 8px;
        min-height: 120px;
        border: 1px solid var(--kendo-color-border, rgba(0, 0, 0, 0.08));
        background: var(--kendo-color-app-surface);
    }
`;

const surfaceBg = (level: number) => `oklch(from var(--kendo-color-app-surface) calc(l + ${level} * 0.015 * clamp(0, (0.5 - l) * 99999, 1)) calc(c + ${level} * 0.001 * clamp(0, (0.5 - l) * 99999, 1)) h)`;
const surfaceBorder = (level: number) => `oklch(from var(--kendo-color-border) l c h / calc(alpha + ${level} * 10 / 100 * clamp(0, (l - 0.5) * 99999, 1)))`;

const SurfaceCard = ({ level }: { level: number }) => (
  <div
    className="elevation-surface-card"
    style={{
      background: level !== 0 ? surfaceBg(level) : undefined,
      borderColor: level !== 0 ? surfaceBorder(level) : undefined,
      boxShadow: level !== 0 ? `var(--kendo-elevation-${level})` : undefined,
    }}
  >
    <div className="k-font-size-xl k-font-bold">{level}</div>
    <div>{level !== 0 ? `Elevation` : `Default Color`}</div>
  </div>
);

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area">
      <div className="k-font-size-lg k-mb-6 k-font-bold">Elevations - Background + Border + Box Shadow</div>
      <div className="elevation-grid">
        {elevationLevels.map((level) => (
          <SurfaceCard key={level} level={level} />
        ))}
      </div>
    </div>
  </>
);
