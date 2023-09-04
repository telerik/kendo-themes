import Dialog from "../dialog.spec";

export const DialogNormal = ({ children, ...other }: any) => <Dialog
    {...other}
>
    {children}
</Dialog>;
