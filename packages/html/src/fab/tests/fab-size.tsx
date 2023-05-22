import { FloatingActionButton } from '../../fab';


const styles = `
    #test-area {
        max-width: 1200px;
        grid-template-columns: auto repeat(3, 1fr);
        align-items: center;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid">

            <span><small>rounded / size</small></span>
            <span>small</span>
            <span>medium</span>
            <span>large</span>

            <span>null</span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded={null} size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded={null} size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded={null} size="small" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded={null} size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded={null} size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded={null} size="medium" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded={null} size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded={null} size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded={null} size="large" />
            </span>

            <span>small</span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="small" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="small" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="small" size="small" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="small" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="small" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="small" size="medium" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="small" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="small" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="small" size="large" />
            </span>

            <span>medium</span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="medium" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="medium" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="medium" size="small" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="medium" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="medium" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="medium" size="medium" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="medium" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="medium" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="medium" size="large" />
            </span>

            <span>large</span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="large" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="large" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="large" size="small" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="large" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="large" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="large" size="medium" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="large" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="large" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="large" size="large" />
            </span>

            <span>full</span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="full" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="full" size="small" text="Create" />
                <FloatingActionButton icon="plus" rounded="full" size="small" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="full" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="full" size="medium" text="Create" />
                <FloatingActionButton icon="plus" rounded="full" size="medium" />
            </span>
            <span className="k-d-flex k-gap-1">
                <FloatingActionButton rounded="full" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="full" size="large" text="Create" />
                <FloatingActionButton icon="plus" rounded="full" size="large" />
            </span>

        </div>
    </>
);
