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
                    <DropdownList focus size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="small" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="small" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Outside Medium</div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Outside Large</div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="large" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus label="Floating label">
                    <DropdownList focus size="large" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Border Small</div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="small" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="small" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Border Medium</div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Border Large</div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="large" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <DropdownList focus size="large" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Small</div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="small" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="small" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Medium</div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Large</div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="large" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <DropdownList focus size="large" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
