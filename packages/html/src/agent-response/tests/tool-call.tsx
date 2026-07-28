import * as React from "react";
import { ToolCall } from "..";
import { Card, CardBody } from "../../card";
import { Button } from "../../button";
import { ActionButtons } from "../../action-buttons";
import { MessageBox } from "../../message-box";

export default () => (
  <div id="test-area" className="k-d-flex k-flex-col">
    <section>
      <ToolCall label="tool_name" secondaryLabel="src/utils/formatDate.ts · 120ms" status="Completed" statusThemeColor="success" statusIcon="check-circle" completed expandable />

      <ToolCall label="tool_name" secondaryLabel="src/utils/formatDate.ts · 120ms" status="Completed" statusThemeColor="success" statusIcon="check-circle" completed expandable />

      <ToolCall label="tool_name" secondaryLabel="src/utils/formatDate.ts · 120ms" status="Completed" statusThemeColor="success" statusIcon="check-circle" completed expandable expanded>
        <div>Parameters</div>
        <pre className="k-pre">
          <code className="k-code">{`cd packages/html && npx tsc --noEmit -p . 2>&1 | head -50`}</code>
        </pre>
        <div>Result</div>
        <pre className="k-pre">
          <code className="k-code">{`> @progress/kendo-themes-html@14.4.0-dev.1 typecheck
> npx tsc --noEmit --emitDeclarationOnly false --project tsconfig.json
`}</code>
        </pre>
      </ToolCall>

      <ToolCall label="tool_name" status="Awaiting Approval" statusThemeColor="warning" statusIcon="exclamation-circle" expandable expanded>
        <div>Parameters</div>
        <pre className="k-pre">
          <code className="k-code">{`cd packages/html && npx tsc --noEmit -p . 2>&1 | head -50`}</code>
        </pre>
        <Card>
          <CardBody>
            <p>This command will execute a TS Typecheck in your codebase.</p>
          </CardBody>
          <ActionButtons alignment="end" className="k-card-actions">
            <Button text="Reject" fillMode="outline" />
            <Button text="Approve" themeColor="primary" fillMode="solid" />
          </ActionButtons>
        </Card>
      </ToolCall>

      <ToolCall label="tool_name" status="Error" statusThemeColor="error" statusIcon="exclamation-circle" expandable expanded>
        <div>Parameters</div>
        <pre className="k-pre">
          <code className="k-code">{`cd packages/hmtl && npx tsc --noEmit -p . 2>&1 | head -50`}</code>
        </pre>
        <MessageBox themeColor="error">cd: no such file or directory: packges/hmtl</MessageBox>
      </ToolCall>
    </section>
  </div>
);
