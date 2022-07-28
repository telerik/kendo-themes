```html
<!-- default rendering -->
<div class="k-popover">
    <div class="k-popover-callout k-callout-s"></div>
    <div class="k-popover-inner">
        <div class="k-popover-header">Title</div>
        <div class="k-popover-body">Body content</div>
        <div class="k-popover-actions k-actions k-actions-stretched">
            <button type="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
                <span class="k-button-text">Action</span>
            </button>
            <button type="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary">
                <span class="k-button-text">Primary</span>
            </button>
        </div>
    </div>
</div>

<!-- canonical rendering -->

<div class="k-popover">
    {callout && <div class="
                k-popover-callout
                k-callout-{callout}
                "></div>
    <div class="k-popover-inner">
        {title && <div class="k-popover-header">{title}</div>}
        {body && <div class="k-popover-body">{body}</div>}
        <div class="
            k-popover-actions
            k-actions
            k-actions-{alignment}
        ">
            <button type="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-{themeColor}">
                <span class="k-button-text">Action</span>
            </button>
            <button type="button" class="k-button k-button-md k-rounded-md k-button-flat k-button-flat-primary">
                <span class="k-button-text">Primary</span>
            </button>
        </div>
    </div>
</div>

```
