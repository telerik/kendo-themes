import { Button } from "../button.spec";

export const IconButton = (props) => <Button icon="folder" {...props} aria-label={props['aria-label'] || "Folder"} children={undefined} />;
