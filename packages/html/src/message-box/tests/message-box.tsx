import MessageBox from "../message-box.spec";

const styles = `
    #test-area {
        grid-template-columns: 200px 1fr;
    }
`;

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid">

      <span>Freeform</span>
      <MessageBox>
        <p>The quick brown fox jumps over the lazy dog.</p>
        <p>Adjacent paragraph</p>
      </MessageBox>

      {MessageBox.options.themeColor.map((themeColor) => (
        <>
          <span>{`${themeColor}`}</span>
          <MessageBox themeColor={themeColor}>
            The quick brown fox jumps over the lazy dog.
            <a href="http://example.com">Link</a>.
          </MessageBox>
        </>
      ))}
    </div>
  </>
);
