import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../../button';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <div id="test-area" className="k-d-grid k-grid-cols-2">
        <span>Signature</span>
        <span>Signature RTL</span>

        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-rtl">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-hover">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-hover k-rtl">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-focus">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-focus k-rtl">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-invalid">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-invalid k-rtl">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-invalid k-focus">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-invalid k-focus k-rtl">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-disabled">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-disabled k-rtl">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
        <div className="k-signature k-signature-md k-input k-input-outline k-rounded-md k-signature-maximized">
            <div className="k-signature-actions k-signature-actions-top">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-maximize"
                    className="k-signature-action k-signature-minimize"
                >
                </Button>
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="window-minimize"
                    className="k-signature-action k-signature-minimize k-hidden"
                >
                </Button>
            </div>
            <canvas className="k-signature-canvas">
                An alternate text describing what the canvas displays.
            </canvas>
            <div className="k-signature-line"></div>
            <div className="k-signature-actions k-signature-actions-bottom">
                <Button
                    fillMode="flat"
                    size="medium"
                    rounded="medium"
                    icon="close"
                    className="k-signature-action k-signature-clear"
                >
                </Button>
            </div>
        </div>
    </div>
);
