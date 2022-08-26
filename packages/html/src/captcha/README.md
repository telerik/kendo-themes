```html
<!-- default rendering -->
<div class="k-captcha">
  <div class="k-captcha-image-wrap k-hstack">
    <div class="k-captcha-image">
      <img class="" src="../../../assets/captcha.jpg">
    </div>
    <div class="k-captcha-image-controls k-vstack">
      <button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button">
        <span class="k-button-icon k-icon k-i-volume-up"></span>
      </button>
      <button type="button" class="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button">
        <span class="k-button-icon k-icon k-i-reload"></span>
      </button>
    </div>
    <div class="k-captcha-volume-control k-vstack k-pos-absolute k-hidden">
      <div class="k-widget k-slider k-slider-vertical"></div>
    </div>
  </div>
  <div class="k-captcha-input k-vstack">
    <span class="k-textbox k-input k-input-md k-rounded-md k-input-solid" type="text" autocomplete="off">
      <input type="text" class="k-input-inner" value="YR890" autocomplete="off">
    </span>
  </div>
</div>

<!-- canonical rendering -->

<div class="
    k-captcha
    ${loading && 'k-captcha-loading'}

    ${disabled && 'k-disabled'}
">
  <div class="k-captcha-image-wrap k-hstack">
    <div class="k-captcha-image">
      <img class="
         ${loading && 'k-hidden'}

       " src="../../../assets/captcha.jpg">

       {loading && <span style="width: 100%; height: 100%;" class="k-skeleton k-skeleton-rect"></span>}
    </div>

    <div class="k-captcha-image-controls k-vstack">
      <button type="button" class="
                            ${loading && 'k-disabled'}
                            k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button
                            ">
        <span class="k-button-icon k-icon k-i-volume-up"></span>
      </button>
      <button type="button" class="
                            ${loading && 'k-disabled'}
                            k-button k-button-md k-rounded-md k-button-solid k-button-solid-base k-icon-button
                            ">
        <span class="k-button-icon k-icon k-i-reload"></span>
      </button>
    </div>
    <div class="k-captcha-volume-control k-vstack k-pos-absolute k-hidden">
      <div class="k-widget k-slider k-slider-vertical"></div>
    </div>
  </div>
  <div class="k-captcha-input k-vstack">
    <span class="
            ${loading && 'k-disabled'}
            k-textbox k-input k-input-md k-rounded-md k-input-solid
            " type="text" autocomplete="off">
      <input type="text" class="k-input-inner" value="{value}" autocomplete="off">
    </span>
    {valid && loading !== true && <span class="k-captcha-validation-message !k-text-success">{successMessage}</span>}
  </div>
</div>

```
