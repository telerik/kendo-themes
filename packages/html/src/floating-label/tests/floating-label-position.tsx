import { FloatingLabelNormal } from '..';
import { TextboxNormal } from '../../textbox';

const styles = `
    .k-floating-label-container {
        width: 100%;
    }
`;

export default () =>(
    <>
        <style>{styles}</style>
        <div id="test-area" className="k-d-grid k-grid-cols-5">
            <span />
            <span>Not focused</span>
            <span>Solid</span>
            <span>Outline</span>
            <span>Flat</span>


            <div>Outside Small</div>
            <div>
                <FloatingLabelNormal position="outside" label="Floating label">
                    <TextboxNormal size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal size="small" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal size="small" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Outside Medium</div>
            <div>
                <FloatingLabelNormal position="outside" label="Floating label">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Outside Large</div>
            <div>
                <FloatingLabelNormal position="outside" label="Floating label">
                    <TextboxNormal size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal size="large" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="outside" label="Floating label">
                    <TextboxNormal size="large" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Border Small</div>
            <div>
                <FloatingLabelNormal position="border" label="Floating label">
                    <TextboxNormal size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal size="small" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal size="small" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Border Medium</div>
            <div>
                <FloatingLabelNormal position="border" label="Floating label">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Border Large</div>
            <div>
                <FloatingLabelNormal position="border" label="Floating label">
                    <TextboxNormal size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal size="large" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="border" label="Floating label">
                    <TextboxNormal size="large" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Small</div>
            <div>
                <FloatingLabelNormal position="inside" label="Floating label">
                    <TextboxNormal size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal size="small" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal size="small" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal size="small" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Medium</div>
            <div>
                <FloatingLabelNormal position="inside" label="Floating label">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal fillMode="flat" />
                </FloatingLabelNormal>
            </div>

            <div>Inside Large</div>
            <div>
                <FloatingLabelNormal position="inside" label="Floating label">
                    <TextboxNormal size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal size="large" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal size="large" fillMode="outline" />
                </FloatingLabelNormal>
            </div>
            <div>
                <FloatingLabelNormal focus position="inside" label="Floating label">
                    <TextboxNormal size="large" fillMode="flat" />
                </FloatingLabelNormal>
            </div>

        </div>
    </>
);
