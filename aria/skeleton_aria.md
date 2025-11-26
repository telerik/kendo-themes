## WAI-ARIA


This section lists the selectors, attributes, and behavior patterns supported by the component and its composite elements, if any.


The Skeleton component does not have accessibility on its own as it is only visual indicator and should be integrated within an element that refers to the loading state. When integrated on a page, you might:


 - use `aria-busy` attribute to illustrate that the focusable element is loading
 - use `role="alert"` to announce the loading

