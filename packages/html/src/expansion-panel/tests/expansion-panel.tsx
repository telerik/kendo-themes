import React from 'react';
import ReactDOM from 'react-dom/client';
import { Icon } from '../../icon';

const root = ReactDOM.createRoot(
    document.getElementById('app') as HTMLElement
);

root.render(
    <>
        <div id="test-area">
            <div className="k-expander">
                <div className="k-expander-header">
                    <div className="k-expander-title">Collapsed panel</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                </div>
                <div className="k-expander-content-wrapper k-d-none">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander k-expanded">
                <div className="k-expander-header">
                    <div className="k-expander-title">Expanded panel</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                </div>
                <div className="k-expander-content-wrapper">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander k-expanded k-focus">
                <div className="k-expander-header">
                    <div className="k-expander-title">Expanded Focused panel</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                </div>
                <div className="k-expander-content-wrapper">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander">
                <div className="k-expander-header">
                    <div className="k-expander-title">Collapsed panel</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                </div>
                <div className="k-expander-content-wrapper k-d-none">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander k-focus">
                <div className="k-expander-header">
                    <div className="k-expander-title">Focus state</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                </div>
                <div className="k-expander-content-wrapper k-d-none">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander">
                <div className="k-expander-header k-hover">
                    <div className="k-expander-title">Hover state</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                </div>
                <div className="k-expander-content-wrapper k-d-none">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander k-focus">
                <div className="k-expander-header k-hover">
                    <div className="k-expander-title">Hover & Focus state</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                </div>
                <div className="k-expander-content-wrapper k-d-none">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander k-disabled">
                <div className="k-expander-header">
                    <div className="k-expander-title">Disabled panel</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-down" />
                </div>
                <div className="k-expander-content-wrapper k-d-none">
                    <div className="k-expander-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
            <div className="k-expander k-expanded">
                <div className="k-expander-header">
                    <div className="k-expander-title">Content with fixed height</div>
                    <span className="k-spacer"></span>
                    <div className="k-expander-sub-title">South America</div>
                    <Icon className="k-expander-indicator" name="arrow-chevron-up" />
                </div>
                <div className="k-expander-content-wrapper">
                    <div className="k-expander-content" style={{ height: "100px" }}>
                        <div style={{ height: "100%", overflow: "auto" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn&apos;t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);
