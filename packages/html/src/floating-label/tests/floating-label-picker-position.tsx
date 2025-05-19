import { FloatingLabelNormal } from '..';
import { DropdownList } from '../../dropdownlist';

const styles = `
    .k-floating-label-container {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-4">
            <span />
            <span>Solid Focus</span>
            <span>Outline Focus</span>
            <span>Flat Focus</span>


            <div>Outside Small</div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="small" className="dropdown-solid-outside-small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="small" fillMode="outline" className="dropdown-outline-outside-small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="small" fillMode="flat" className="dropdown-flat-outside-small" />
                </FloatingLabelNormal>
            </div>

            <div>Outside Medium</div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus className="dropdown-solid-outside-medium" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus fillMode="outline" className="dropdown-outline-outside-medium" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus fillMode="flat" className="dropdown-flat-outside-medium" />
                </FloatingLabelNormal>
            </div>

            <div>Outside Large</div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="large" className="dropdown-solid-outside-large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="large" fillMode="outline" className="outline-outside-large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="large" fillMode="flat" className="dropdown-flat-outside-large" />
                </FloatingLabelNormal>
            </div>

            <div>Border Small</div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="small" className="dropdown-solid-border-small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="small" fillMode="outline" className="dropdown-outline-border-small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="small" fillMode="flat" className="dropdown-flat-border-small" />
                </FloatingLabelNormal>
            </div>

            <div>Border Medium</div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus className="dropdown-solid-border-medium" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus fillMode="outline" className="dropdown-outline-border-medium" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus fillMode="flat" className="dropdown-flat-border-medium" />
                </FloatingLabelNormal>
            </div>

            <div>Border Large</div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="large" className="dropdown-solid-border-large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="large" fillMode="outline" className="dropdown-outline-border-large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="large" fillMode="flat" className="dropdown-flat-border-large" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Small</div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="small" className="dropdown-solid-inside-small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="small" fillMode="outline" className="dropdown-outline-inside-small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="small" fillMode="flat" className="dropdown-flat-inside-small" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Medium</div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus className="dropdown-solid-inside-medium" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus fillMode="outline" className="dropdown-outline-inside-medium" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus fillMode="flat" className="dropdown-flat-inside-medium" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Large</div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="large" className="dropdown-solid-inside-large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="large" fillMode="outline" className="dropdown-outline-inside-large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="large" fillMode="flat" className="dropdown-flat-inside-large" />
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
