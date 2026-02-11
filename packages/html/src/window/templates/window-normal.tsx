import { Window } from "../window.spec";

export const WindowNormal = (props) => (
    <Window title="Title" actions={[ 'window-minimize', 'window', 'x' ]}
        children={
            <>Content</>
        } {...props}>
    </Window>
);
