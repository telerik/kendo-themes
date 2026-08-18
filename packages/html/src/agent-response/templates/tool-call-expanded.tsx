import ToolCall from "../tool-call.spec";

export const ToolCallExpanded = (props: any) => (
  <ToolCall label="tool_name" secondaryLabel="src/utils/formatDate.ts · 120ms" status="Completed" statusThemeColor="success" statusIcon="check-circle" completed expandable expanded {...props}>
    <div>Parameters</div>
    <pre className="k-pre">
      <code className="k-code">{`cd packages/html && npx tsc --noEmit -p .`}</code>
    </pre>
  </ToolCall>
);
