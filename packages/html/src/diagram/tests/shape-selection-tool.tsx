import { Button } from "../../button";
import { DropdownList } from "../../dropdownlist";

const styles = `
    #test-area {
        max-width: 800px;
    }

    #test-area section {
        height: 300px;
    }

    #test-area .k-dropdownlist {
        width: min-content;
    }
`;

const popup = (
  <div className="k-diagram-shapes-container">
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" selected aria-selected="true" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
    <Button icon="circle-shape" iconSize="xlarge" fillMode="flat" aria-label="Funnel" />
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
    <Button icon="circle-shape" iconSize="xlarge" fillMode="flat" aria-label="Funnel" />
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
    <Button icon="circle-shape" iconSize="xlarge" fillMode="flat" aria-label="Funnel" />
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
    <Button icon="circle-shape" iconSize="xlarge" fillMode="flat" aria-label="Funnel" />
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
    <Button icon="circle-shape" iconSize="xlarge" fillMode="flat" aria-label="Funnel" />
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
    <Button icon="circle-shape" iconSize="xlarge" fillMode="flat" aria-label="Funnel" />
    <Button icon="rectangle-shape" iconSize="xlarge" fillMode="flat" aria-label="Stadium" />
    <Button icon="hexagon-shape" iconSize="xlarge" fillMode="flat" aria-label="Rounded Rectangle" />
  </div>
);

export default () => (
  <>
    <style>{styles}</style>
    <div id="test-area" className="k-d-grid k-grid-cols-2">
      <span>Shape Selection Tool Opened</span>
      <span>Shape Selection Tool Opened RTL</span>

      <section>
        <DropdownList aria-label="Select shape" showValue={false} valueIconName="shapes" opened popup={popup} />
      </section>
      <section dir="rtl">
        <DropdownList aria-label="Select shape" showValue={false} valueIconName="shapes" opened popup={popup} />
      </section>
    </div>
  </>
);
