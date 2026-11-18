import { Button } from "../../button";
import { Dialog } from "../../dialog";

const style = `
    #test-area {
        gap: 32px;
    }
    .k-dialog-wrapper {
        position: relative;
        align-items: start;
    }

    .k-window {
      position: relative;
    }
`;

export default () => (
  <>
    <style>{style}</style>
    <div id="test-area" className="k-d-grid">
      <section>
        <span>Dialog - Edit recurring event - width: 362px</span>
        <Dialog
          modal={false}
          title="Edit recurring event"
          actions={["x"]}
          actionButtonsAlign="stretched"
          actionButtons={
            <>
              <Button>Edit this event</Button>
              <Button>Edit the series</Button>
            </>
          }
          style={{ width: "362px" }}
        >
          Do you want to edit only this event occurrence or the whole series?
        </Dialog>
      </section>

      <section>
        <span>Dialog - Delete event - width: 362px</span>
        <Dialog
          modal={false}
          title="Delete event"
          actions={["x"]}
          actionButtonsAlign="stretched"
          actionButtons={
            <>
              <Button>Cancel</Button>
              <Button themeColor="primary">Delete</Button>
            </>
          }
          style={{ width: "362px" }}
        >
          Are you sure you want to delete this event?
        </Dialog>
      </section>

      <section>
        <span>Dialog - Delete the series - width: 362px</span>
        <Dialog
          modal={false}
          title="Delete the series"
          actions={["x"]}
          actionButtonsAlign="stretched"
          actionButtons={
            <>
              <Button>Cancel</Button>
              <Button themeColor="primary">Delete</Button>
            </>
          }
          style={{ width: "362px" }}
        >
          Are you sure you want to delete this series?
        </Dialog>
      </section>


      <section>
        <span>Dialog - Discard changes - width: 362px</span>
        <Dialog
          modal={false}
          title="Discard changes"
          actions={["x"]}
          actionButtonsAlign="stretched"
          actionButtons={
            <>
              <Button>Cancel</Button>
              <Button themeColor="primary">Discard</Button>
            </>
          }
          style={{ width: "362px" }}
        >
          Are you sure you want to discard the changes?
        </Dialog>
      </section>

      <section>
        <span>Dialog - Keep or delete custom events - width: 525px</span>
        <Dialog
          modal={false}
          title="Keep or delete custom events?"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button fillMode="flat">Cancel</Button>
              <span className="k-spacer" />
              <Button>Delete custom events</Button>
              <Button themeColor="primary">Keep custom events</Button>
            </>
          }
          style={{ width: "525px" }}
        >
          Some events in this series have been edited separately. Choose whether to keep those custom events, or delete them?
        </Dialog>
      </section>

      <section>
        <span>Dialog - Keep or reset custom events - width: 525px</span>
        <Dialog
          modal={false}
          title="Keep or reset custom events?"
          actions={["x"]}
          actionButtonsAlign="end"
          actionButtons={
            <>
              <Button fillMode="flat">Cancel</Button>
              <span className="k-spacer" />
              <Button>Reset custom events</Button>
              <Button themeColor="primary">Keep custom events</Button>
            </>
          }
          style={{ width: "525px" }}
        >
          Some events in this series have been edited separately. Choose whether to keep those custom events, or reset them to match the updated series?
        </Dialog>
      </section>
    </div>
  </>
);
