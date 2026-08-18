import Checkpoint from '../checkpoint.spec';
import { Button } from '../../button';

export const CheckpointNormal = (props: any) => (
    <Checkpoint visible {...props}>
        <Button text="Restore Checkpoint" fillMode="flat" size="small" />
    </Checkpoint>
);
