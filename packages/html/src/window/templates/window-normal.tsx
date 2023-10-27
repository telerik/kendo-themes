import { Window } from "../index";

export const WindowNormal = (props) => (
    <Window title="Title" actions={[ 'window-minimize', 'window', 'x' ]}
        children={[
            <>
            Content
            </>
        ]} {...props}>
    </Window>
);
