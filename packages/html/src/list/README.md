```html
<!-- jquery / react / vue rendering -->
<div class="k-list k-list-md">
    <div class="k-list-header"><span class="k-list-header-text">Group 1</span></div>
    <div class="k-list-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.2</span>
            </li>
            <li class="k-list-item k-first">
                <span class="k-list-item-text">Item 2.1</span>
                <span class="k-list-group-label">Group 2</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.2</span>
            </li>
        </ul>
    </div>
</div>

<!-- jquery / react / vue rendering w/ virtualization -->
<div class="k-list k-virtual-list k-list-md">
    <div class="k-list-header"><span class="k-list-header-text">Group 1</span></div>
    <div class="k-list-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.2</span>
            </li>
            <li class="k-list-item k-first">
                <span class="k-list-item-text">Item 2.1</span>
                <span class="k-list-group-label">Group 2</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.2</span>
            </li>
        </ul>
    </div>
</div>

<!-- angular / blazor rendering -->
<div class="k-list k-list-md">
    <div class="k-list-header"><span class="k-list-header-text">Group 1</span></div>
    <div class="k-list-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.2</span>
            </li>
            <li class="k-list-group-item">
                <span class="k-list-item-text">Group 2</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.2</span>
            </li>
        </ul>
    </div>
</div>

<!-- angular / blazor rendering w/ virtualization -->
<div class="k-list k-virtual-list k-list-md">
    <div class="k-list-header"><span class="k-list-header-text">Group 1</span></div>
    <div class="k-list-content">
        <ul class="k-list-ul">
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 1.2</span>
            </li>
            <li class="k-list-group-item">
                <span class="k-list-item-text">Group 2</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.1</span>
            </li>
            <li class="k-list-item">
                <span class="k-list-item-text">Item 2.2</span>
            </li>
        </ul>
    </div>
</div>

<!-- filter -->
<div class="k-list-filter">
    <span class="k-searchbox k-input k-input-md k-rounded-md k-input-solid" type="text" autocomplete="off">
        <span class="k-input-icon k-icon k-i-search"></span>
        <input type="text" class="k-input-inner" placeholder="Filter..." autocomplete="off">
    </span>
</div>

<!-- no data template -->
<div class="k-list k-list-md">
    <div class="k-no-data">No data found.</div>
</div>
```

