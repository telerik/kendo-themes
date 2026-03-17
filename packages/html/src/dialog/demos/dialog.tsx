import { Dialog, KendoDialogProps } from '../dialog.spec';
import { DialogNormal } from '../templates/dialog-normal';
import { Button } from '../../button';

const options = Dialog.options;
const variants = [];
const states = Dialog.states;
const defaults = Dialog.defaultOptions;
const modifiers = [];

export const DialogDemo = (props: KendoDialogProps) => {
  return (
    <DialogNormal style={{ width: "350px", height: "215px" }} {...props} title="Please confirm" actions={['x']} actionButtonsAlign="stretched" actionButtons={
      <>
        <Button>No</Button>
        <Button themeColor="primary">Yes</Button>
      </>
    }>
      <p style={{ margin: "36px", textAlign: "center" }}>Are you sure you want to continue?</p>
    </DialogNormal>
  );
}


DialogDemo.options = options;
DialogDemo.states = states;
DialogDemo.variants = variants;
DialogDemo.defaultOptions = defaults;
DialogDemo.modifiers = modifiers;
DialogDemo.className = Dialog.className;

export default DialogDemo;

