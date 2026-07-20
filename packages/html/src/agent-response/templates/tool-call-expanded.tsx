import ToolCall from '../tool-call.spec';
import { Card, CardBody } from '../../card';

export const ToolCallExpanded = (props: any) => (
    <ToolCall label="tool_name" secondaryLabel="src/utils/formatDate.ts" time="120ms" status="Completed" statusThemeColor="success" statusIcon="check-circle" completed expandable expanded {...props}>
        <div>Parameters</div>
        <Card>
            <CardBody>
                <pre style={{ fontSize: '14px', marginTop: '0px' }}>
                    <code>{`cd packages/html && npx tsc --noEmit -p .`}</code>
                </pre>
            </CardBody>
        </Card>
    </ToolCall>
);
