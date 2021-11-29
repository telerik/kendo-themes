# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.43.0](https://github.com/telerik/kendo-themes/compare/v4.42.0...v4.43.0) (2021-11-29)


### Bug Fixes

* **actions:** horizontal action must have explicit width ([ef73924](https://github.com/telerik/kendo-themes/commit/ef73924c8b1d02cc74c179c466a68041c21babea))
* **adaptive:** remove overriding styles for disabled state ([f7c4482](https://github.com/telerik/kendo-themes/commit/f7c448245e380a800bd88b8fb357015b6c522208))
* add global variables wcag-light and wcag-dark to work with contrast-wcag function ([c618118](https://github.com/telerik/kendo-themes/commit/c618118e099575fdf027ad06009f6f3c01d5c672))
* **autocomplete:** use correct colors for invalid state ([f2f0144](https://github.com/telerik/kendo-themes/commit/f2f0144ffe1e1a3811805ff37314d054f6153f88))
* **avatar:** use 2px border radius for avatar to match v5 ([7cd5d1d](https://github.com/telerik/kendo-themes/commit/7cd5d1d307b69d2f56551209c67abd55fafb0337))
* **avatar:** vertically align icons inside avatar ([932d8bc](https://github.com/telerik/kendo-themes/commit/932d8bc58cf0497288267ae8feef553f1256d981))
* **card:** remove redundant styles for buttons ([7bed7ff](https://github.com/telerik/kendo-themes/commit/7bed7ff6156ce35155cf4b6df306c7c81716de6a))
* **chat:** do not remove padding from buttons ([f553f0a](https://github.com/telerik/kendo-themes/commit/f553f0a233a4d2fb04b83f305edd60bb0adba990))
* **chat:** remove redundant styles for textbox ([37587e2](https://github.com/telerik/kendo-themes/commit/37587e26c337fad2dccfaf4d37cd0163a0877010))
* **chat:** reuse button input and toolbar variables ([371e9c4](https://github.com/telerik/kendo-themes/commit/371e9c4bfbd100e7755f44bb76a636968ff8f7f8))
* **chat:** stretch scroll buttons ([60c1034](https://github.com/telerik/kendo-themes/commit/60c1034fd63c406258422cad4decbee2ea2c9e61))
* **checkbox:** hover state comma is missing ([71d4960](https://github.com/telerik/kendo-themes/commit/71d4960b024c1a91a48daefc55b45e4b25764d8a))
* **chip:** add k-state-selected class where missed ([d568daf](https://github.com/telerik/kendo-themes/commit/d568daf8cbebfb0288637aac28114fb6a60e6358))
* **color-picker:** use slightly tinner indicator for selected color ([c51173a](https://github.com/telerik/kendo-themes/commit/c51173a929943a397893ff9862588b40ce16f79a))
* **color-preview:** remove cursor pointer from preview-color element ([3aa35fc](https://github.com/telerik/kendo-themes/commit/3aa35fc2b50b78df0560e33aa8f7916cb8810f1f))
* **combobox:** make hover state of combobox select consistent with other inputs ([d5c2791](https://github.com/telerik/kendo-themes/commit/d5c2791c1e44180f06b2ce73d39f9403b183947d))
* **dropdown-list:** select border should be rendered even if transparent ([8594965](https://github.com/telerik/kendo-themes/commit/859496593358c2609363290164c79858b73844b9))
* **editor:** combine editor content and editable area styles ([b4a1679](https://github.com/telerik/kendo-themes/commit/b4a16791ea295df0db22067d79bec7fe2dc56cc7))
* **editor:** simplify editor toolbar by removing redundant styles ([b81faef](https://github.com/telerik/kendo-themes/commit/b81faefc49e23c5612d75c7b7c794fd534df928e))
* **editor:** use explicit box-sizing for image resizing ([98f459e](https://github.com/telerik/kendo-themes/commit/98f459e872f2b5b81625fc0b9324fc7c4057c138))
* ensure correct validation icon color in invalid state ([627abb2](https://github.com/telerik/kendo-themes/commit/627abb2cf251642abda449a15595981907699389))
* **form:** make form fields inline-flex instead of flex ([1baa806](https://github.com/telerik/kendo-themes/commit/1baa806ef9c4429b41f2ea2c4553cbff8de21fa6))
* **gantt:** use box-sizing border box for task and milestones ([874d0af](https://github.com/telerik/kendo-themes/commit/874d0af0c6533fe8d0acc7daf6d75ab564c21b49))
* **grid:** decrease column menu icon z-index ([84e00f3](https://github.com/telerik/kendo-themes/commit/84e00f3fde8a149734786203bd3ff0d9a892a119))
* handle null children better ([3db5771](https://github.com/telerik/kendo-themes/commit/3db5771ee96456b12259aa48058673f7dd10a904))
* **html:** add icon-picker classname to pickers with icon only ([9a0b3cb](https://github.com/telerik/kendo-themes/commit/9a0b3cba596741ed103433a6273f4fddb95a582f))
* **html:** add support for readonly attribute ([91f74d3](https://github.com/telerik/kendo-themes/commit/91f74d3c55990469f410feae3f77e7330ffff9c6))
* **html:** colorpicker should pass selected color to color-preview ([f6bce2e](https://github.com/telerik/kendo-themes/commit/f6bce2e2f6550b2c29d07b009220691dedb44b9b))
* **html:** use null value instead of none value ([59d4912](https://github.com/telerik/kendo-themes/commit/59d4912fb649c1803c45f2bc88248f5c60c8d012))
* **input:** add styles for validation and loading icons ([a2253ec](https://github.com/telerik/kendo-themes/commit/a2253ec400be50991a48f4d99e94cf3299dd743d))
* make edit-buttons container alias of actions container ([04cdf04](https://github.com/telerik/kendo-themes/commit/04cdf041c5d67395733a99175ddfd63a7dfada8c))
* **pager:** remove customization for dropdownlist inside pager ([6f3bbae](https://github.com/telerik/kendo-themes/commit/6f3bbaec9cd712aff683f903e769f5468545e77b))
* **pivotgrid:** off-screen content is not visible during export ([d27c177](https://github.com/telerik/kendo-themes/commit/d27c177b47eb4cccf53baee67c7b8bab09d5f6d2))
* resolve w3c validator errors ([c65cb67](https://github.com/telerik/kendo-themes/commit/c65cb677d1496dcfcfd61c1c022d2ca9188c5e36))
* **scheduler:** remove further customization from mobile scheduler views dropdown ([db3733a](https://github.com/telerik/kendo-themes/commit/db3733a644abfefbb22b47e4ca2ea1a0cef72514))
* **searchbox:** add box-sizing to searchbox ([97acba6](https://github.com/telerik/kendo-themes/commit/97acba674ece5ab39c32380b0bea61a971649012))
* **searchbox:** use correct colors for invalid state ([6c947d0](https://github.com/telerik/kendo-themes/commit/6c947d08b61b31b6c10aa80db2b1251522b10c80))
* **separator:** streamline separator styles ([3a4cc7a](https://github.com/telerik/kendo-themes/commit/3a4cc7a307fe62a4b5196143df5031da9bec84e0))
* **slider:** remove redundant box shadow on slider buttons ([e907b6f](https://github.com/telerik/kendo-themes/commit/e907b6f370076436c49ff335b973152b8e6ef66e))
* **switch:** use solid color for checked disabled switch ([d5b87bf](https://github.com/telerik/kendo-themes/commit/d5b87bf18b2ed663a0d59b2a3e8db66c1f9418e5))
* **tabstrip:** ensure k-tabstrip-content and k-tabstrip k-content styles are identical ([374ee33](https://github.com/telerik/kendo-themes/commit/374ee331ebee02eda382eddaeeb18f8fbca47f3b))
* **tabstrip:** tab alignment not working ([d60b4f6](https://github.com/telerik/kendo-themes/commit/d60b4f67c11f1142e1cd4303706d21c258e984fa))
* **tabstrip:** unify tabstrip appearance inside window ([e3c3336](https://github.com/telerik/kendo-themes/commit/e3c3336d424d90154d7491f115a1424e20974cc7))
* use consistent border width for select button in inputs and pickers ([d517f2a](https://github.com/telerik/kendo-themes/commit/d517f2a9eae362972d7430a59e0a2feff5999d2f))
* use correct border radius for select button in rtl inputs ([9236b39](https://github.com/telerik/kendo-themes/commit/9236b392eca050aef086d354ab288f5be1558bd7))
* **utils:** use different border-radius for different themes ([c3991c7](https://github.com/telerik/kendo-themes/commit/c3991c775cce8c11faf88650f80d9a582ceef887))
* **window:** add styles for window buttons container ([a73fba6](https://github.com/telerik/kendo-themes/commit/a73fba63b2d226503d37c588fa5dc8ae3a22dd81))


### Features

* add html helpers for datetime inputs ([022c954](https://github.com/telerik/kendo-themes/commit/022c954aea0f8746400a7b66c35651a56f35ef4f))
* add new icons to font ([eb4b933](https://github.com/telerik/kendo-themes/commit/eb4b933f9dfedc67591592789ba4bdea18b444fc))
* **colorgradient:** add color contrast svg styles ([9a9a336](https://github.com/telerik/kendo-themes/commit/9a9a3361145b3b8324cd76c603d52a2f28114239))
* **editor:** add styles for resizable images ([b621712](https://github.com/telerik/kendo-themes/commit/b621712a51a363973654faa018653e48d94e88a4))
* **html:** add html helper for avatar ([11ffc18](https://github.com/telerik/kendo-themes/commit/11ffc1827639b85fb928125fc05e64b1ea192307))
* remove leftover support for IE 9 ([cb82f9b](https://github.com/telerik/kendo-themes/commit/cb82f9bfd1af3326eaa79d80ac8ce62ed260e260))





# [4.42.0](https://github.com/telerik/kendo-themes/compare/v4.41.2...v4.42.0) (2021-10-18)


### Bug Fixes

* **actions:** add styles for vertical orientation of actions ([9747e10](https://github.com/telerik/kendo-themes/commit/9747e100360d009ba10775f265a5c2546ce6db78))
* **button:** update button dependencies to include typography ([5bff00a](https://github.com/telerik/kendo-themes/commit/5bff00ab89eb309a128f82ad74bf67256b4582b7))
* **captcha:** import missing dependencies ([0c79daa](https://github.com/telerik/kendo-themes/commit/0c79daa03ef7bc68c320962e19be604384723e9a))
* **grid:** replace hardcoded vertical border width ([e4a3c13](https://github.com/telerik/kendo-themes/commit/e4a3c13c4ac2f62ebd9026b35bbfba57f2fdb1a0))
* **html:** add global default props for all components ([2202b43](https://github.com/telerik/kendo-themes/commit/2202b4388f9281bddec40294e300d929e9182706))
* **html:** expose init function for manually triggering init ([5974061](https://github.com/telerik/kendo-themes/commit/5974061f8b512d59daf0f9b7a45ea39b968cf14b))
* **html:** handle global boolean attributes without value ([28bf2d2](https://github.com/telerik/kendo-themes/commit/28bf2d2a512a9190bd978711500f43489f756c9f))
* **html:** handle html attributes in button html helper ([c3f4a7b](https://github.com/telerik/kendo-themes/commit/c3f4a7b5d18511f199ca59acfad154289191b4ee))
* **html:** handle native elements in renderDOM more gracefully ([93f1ed4](https://github.com/telerik/kendo-themes/commit/93f1ed4256bd189170dd2c1edcb381389ec9f713))
* **html:** make className global default property ([a69f83a](https://github.com/telerik/kendo-themes/commit/a69f83a4d455db7f7ba5fbedc84b31aaf16c026b))
* **html:** set certain attributes in a different way ([0636c8e](https://github.com/telerik/kendo-themes/commit/0636c8ee0b9621183ce87c4b8a86d0fe038134d9))
* **html:** use element.replaceWith instead of element.outerHTML ([e3864e4](https://github.com/telerik/kendo-themes/commit/e3864e4a5d92453f89ed99857d2277b34e56c4d9))
* **html:** use InputSuffixStatic for input suffixes ([d416083](https://github.com/telerik/kendo-themes/commit/d416083c35170464d04a0f66deb44a0271fca867))
* **map:** override icon button styles in navigator ([9e88414](https://github.com/telerik/kendo-themes/commit/9e8841417602912e21c58e3ee6274adc010a8e2a))
* **orgchart:** import missing dependencies ([bc8d649](https://github.com/telerik/kendo-themes/commit/bc8d649a36a42b55413ba5de9ec2a8c1c5011068))
* **pivotgrid:** use standard flex syntax ([62e9656](https://github.com/telerik/kendo-themes/commit/62e9656b7cfba0ee3630093a48696b18282b1b91))
* **scheduler:** react scheduler timeline view cells doesn't render correctly ([aebb314](https://github.com/telerik/kendo-themes/commit/aebb314baa918d4a1ff8dbb4c8ae1c98accff81c))
* **spreadsheet:** use standard flex syntax ([23b16e7](https://github.com/telerik/kendo-themes/commit/23b16e71ef3856f46e91f70bc7165a381f850480))
* **swatches:** classic green swatch does not have correct base theme ([1197d6f](https://github.com/telerik/kendo-themes/commit/1197d6fef9f55d1c47d5279919152b5a3d235dfd))
* **toolbar:** apply correct color to disabled primary button ([9551ebf](https://github.com/telerik/kendo-themes/commit/9551ebfd9847473fb23d660be751c38da5330a73))


### Features

* add utils modules to nouvelle (only grid and flex) ([6d90e6f](https://github.com/telerik/kendo-themes/commit/6d90e6f55e3916b7c682a680cb72080a89f557af))
* **autocomplete:** use :where styles for autocomplete ([780f841](https://github.com/telerik/kendo-themes/commit/780f8413c0632698bb94486cccd5ec00e6e417cc))
* **button:** use :where styles for button ([176f2b2](https://github.com/telerik/kendo-themes/commit/176f2b27e62fa06f898aab6565c77b3e6c26ae79))
* **chip:** update component to match latest design ([5b63b95](https://github.com/telerik/kendo-themes/commit/5b63b95ce548cfd1e803220896444cb6261a9c79))
* **colorpicker:** update component rendering and styles to match latest design ([a0bb137](https://github.com/telerik/kendo-themes/commit/a0bb13754a341bcbdae1604d3c07ee9575dac9d8))
* **combobox:** use :where styles for combobox ([84a18e8](https://github.com/telerik/kendo-themes/commit/84a18e857d143b07492201359d5e8e1e8c9d1153))
* convert nouvelle to new module system ([c7d8b02](https://github.com/telerik/kendo-themes/commit/c7d8b02bb4e950e2d82588bbe0e62fe2101f305d))
* **dropdownlist:** use :where styles for dropdownlist ([dace4cc](https://github.com/telerik/kendo-themes/commit/dace4cc2230e95b304bfc6f0eae9076e5b5e59c2))
* **editor:** implement resizable class ([cf1ac55](https://github.com/telerik/kendo-themes/commit/cf1ac55a8416727bbe9ebac86f680c46df7fc063))
* **fab:** update styles to match the latest design ([31c1615](https://github.com/telerik/kendo-themes/commit/31c16158c6341bf748eb93e87f13d142acb3ec26))
* **html:** add html helper for autocomplete ([6aff19e](https://github.com/telerik/kendo-themes/commit/6aff19e5f14ea821dadb175ed76c5bd8de567c00))
* **html:** add html helper for checkbox ([1afeeb3](https://github.com/telerik/kendo-themes/commit/1afeeb3e333d6211c819cc2b75b83eb5ee72d03b))
* **html:** add html helper for colorpicker ([678746d](https://github.com/telerik/kendo-themes/commit/678746d257a8a92dc707773d76251ee4c0302f1e))
* **html:** add html helper for combobox ([3fa76fd](https://github.com/telerik/kendo-themes/commit/3fa76fd7704205ca063919b8cc1a5293a4c5f198))
* **html:** add html helper for dropdownlist ([6ad5907](https://github.com/telerik/kendo-themes/commit/6ad5907d413c8be684b1eba35820831388703f01))
* **html:** add html helper for radiobutton ([5610ac1](https://github.com/telerik/kendo-themes/commit/5610ac1b87c3d912a4adb0c91dfaed197eb9f748))
* **html:** add html helper for searchbox ([3c22499](https://github.com/telerik/kendo-themes/commit/3c22499194aa32809079a42549d18ee5a8884d84))
* **html:** add html helper for switch ([2a061f9](https://github.com/telerik/kendo-themes/commit/2a061f95becd70e490f5a62e036f7688c54e4172))
* **html:** add html helpers for button ([7d8b8e8](https://github.com/telerik/kendo-themes/commit/7d8b8e84243559219fecb21921a925f87efdb5bf))
* **html:** add html helpers for masked textbox ([c8d5021](https://github.com/telerik/kendo-themes/commit/c8d50212ce46963b335b9dc40ee231ddcbe930a0))
* **html:** add html helpers for numeric ([dc54a15](https://github.com/telerik/kendo-themes/commit/dc54a15afbc247dcad2f8b298d491e7cd54e4056))
* **html:** add html helpers for textarea ([d7f5e5d](https://github.com/telerik/kendo-themes/commit/d7f5e5d9f268bd8c9bee81afb728bf9d47a75d94))
* **html:** add html helpers for Textbox ([3ae05f4](https://github.com/telerik/kendo-themes/commit/3ae05f4546c98e4d41ba4a06a79ef343745109fd))
* introduce new module system for nouvelle theme ([914f3b4](https://github.com/telerik/kendo-themes/commit/914f3b4cccb08968fe816002d6ce5b2ca6d79ee5))
* **textbox:** extract textbox as a separate module ([6c98361](https://github.com/telerik/kendo-themes/commit/6c983611935750e4356a03b1f521a4d03807f637))
* use box-sizing border-box for all elements ([0b14ce9](https://github.com/telerik/kendo-themes/commit/0b14ce9206b0c8c46dd87431d493a1111c400b1b))
* **utils:** add gap utility classes ([8a1f8e0](https://github.com/telerik/kendo-themes/commit/8a1f8e0d659f500584903a5c4793330ae282c181))
* **utils:** add more border-radius utility classes ([701056f](https://github.com/telerik/kendo-themes/commit/701056f5481690c9c9e978b1d6a92b6f75a20ed9))
* **utils:** extract theme color utility classes into utils module ([e1b51df](https://github.com/telerik/kendo-themes/commit/e1b51df9857221e0bf40a23d13be7416b4e3a425))





# [4.42.0-dev.0](https://github.com/telerik/kendo-themes/compare/v4.41.2...v4.42.0-dev.0) (2021-10-18)


### Bug Fixes

* **actions:** add styles for vertical orientation of actions ([9747e10](https://github.com/telerik/kendo-themes/commit/9747e100360d009ba10775f265a5c2546ce6db78))
* **button:** update button dependencies to include typography ([5bff00a](https://github.com/telerik/kendo-themes/commit/5bff00ab89eb309a128f82ad74bf67256b4582b7))
* **captcha:** import missing dependencies ([0c79daa](https://github.com/telerik/kendo-themes/commit/0c79daa03ef7bc68c320962e19be604384723e9a))
* **grid:** replace hardcoded vertical border width ([e4a3c13](https://github.com/telerik/kendo-themes/commit/e4a3c13c4ac2f62ebd9026b35bbfba57f2fdb1a0))
* **html:** add global default props for all components ([2202b43](https://github.com/telerik/kendo-themes/commit/2202b4388f9281bddec40294e300d929e9182706))
* **html:** expose init function for manually triggering init ([5974061](https://github.com/telerik/kendo-themes/commit/5974061f8b512d59daf0f9b7a45ea39b968cf14b))
* **html:** handle global boolean attributes without value ([28bf2d2](https://github.com/telerik/kendo-themes/commit/28bf2d2a512a9190bd978711500f43489f756c9f))
* **html:** handle html attributes in button html helper ([c3f4a7b](https://github.com/telerik/kendo-themes/commit/c3f4a7b5d18511f199ca59acfad154289191b4ee))
* **html:** handle native elements in renderDOM more gracefully ([93f1ed4](https://github.com/telerik/kendo-themes/commit/93f1ed4256bd189170dd2c1edcb381389ec9f713))
* **html:** make className global default property ([a69f83a](https://github.com/telerik/kendo-themes/commit/a69f83a4d455db7f7ba5fbedc84b31aaf16c026b))
* **html:** set certain attributes in a different way ([0636c8e](https://github.com/telerik/kendo-themes/commit/0636c8ee0b9621183ce87c4b8a86d0fe038134d9))
* **html:** use element.replaceWith instead of element.outerHTML ([e3864e4](https://github.com/telerik/kendo-themes/commit/e3864e4a5d92453f89ed99857d2277b34e56c4d9))
* **html:** use InputSuffixStatic for input suffixes ([d416083](https://github.com/telerik/kendo-themes/commit/d416083c35170464d04a0f66deb44a0271fca867))
* **map:** override icon button styles in navigator ([9e88414](https://github.com/telerik/kendo-themes/commit/9e8841417602912e21c58e3ee6274adc010a8e2a))
* **orgchart:** import missing dependencies ([bc8d649](https://github.com/telerik/kendo-themes/commit/bc8d649a36a42b55413ba5de9ec2a8c1c5011068))
* **pivotgrid:** use standard flex syntax ([62e9656](https://github.com/telerik/kendo-themes/commit/62e9656b7cfba0ee3630093a48696b18282b1b91))
* **scheduler:** react scheduler timeline view cells doesn't render correctly ([aebb314](https://github.com/telerik/kendo-themes/commit/aebb314baa918d4a1ff8dbb4c8ae1c98accff81c))
* **spreadsheet:** use standard flex syntax ([23b16e7](https://github.com/telerik/kendo-themes/commit/23b16e71ef3856f46e91f70bc7165a381f850480))
* **swatches:** classic green swatch does not have correct base theme ([1197d6f](https://github.com/telerik/kendo-themes/commit/1197d6fef9f55d1c47d5279919152b5a3d235dfd))
* **toolbar:** apply correct color to disabled primary button ([9551ebf](https://github.com/telerik/kendo-themes/commit/9551ebfd9847473fb23d660be751c38da5330a73))


### Features

* add utils modules to nouvelle (only grid and flex) ([6d90e6f](https://github.com/telerik/kendo-themes/commit/6d90e6f55e3916b7c682a680cb72080a89f557af))
* **autocomplete:** use :where styles for autocomplete ([780f841](https://github.com/telerik/kendo-themes/commit/780f8413c0632698bb94486cccd5ec00e6e417cc))
* **button:** use :where styles for button ([176f2b2](https://github.com/telerik/kendo-themes/commit/176f2b27e62fa06f898aab6565c77b3e6c26ae79))
* **chip:** update component to match latest design ([5b63b95](https://github.com/telerik/kendo-themes/commit/5b63b95ce548cfd1e803220896444cb6261a9c79))
* **colorpicker:** update component rendering and styles to match latest design ([a0bb137](https://github.com/telerik/kendo-themes/commit/a0bb13754a341bcbdae1604d3c07ee9575dac9d8))
* **combobox:** use :where styles for combobox ([84a18e8](https://github.com/telerik/kendo-themes/commit/84a18e857d143b07492201359d5e8e1e8c9d1153))
* convert nouvelle to new module system ([c7d8b02](https://github.com/telerik/kendo-themes/commit/c7d8b02bb4e950e2d82588bbe0e62fe2101f305d))
* **dropdownlist:** use :where styles for dropdownlist ([dace4cc](https://github.com/telerik/kendo-themes/commit/dace4cc2230e95b304bfc6f0eae9076e5b5e59c2))
* **editor:** implement resizable class ([cf1ac55](https://github.com/telerik/kendo-themes/commit/cf1ac55a8416727bbe9ebac86f680c46df7fc063))
* **fab:** update styles to match the latest design ([31c1615](https://github.com/telerik/kendo-themes/commit/31c16158c6341bf748eb93e87f13d142acb3ec26))
* **html:** add html helper for autocomplete ([6aff19e](https://github.com/telerik/kendo-themes/commit/6aff19e5f14ea821dadb175ed76c5bd8de567c00))
* **html:** add html helper for checkbox ([1afeeb3](https://github.com/telerik/kendo-themes/commit/1afeeb3e333d6211c819cc2b75b83eb5ee72d03b))
* **html:** add html helper for colorpicker ([678746d](https://github.com/telerik/kendo-themes/commit/678746d257a8a92dc707773d76251ee4c0302f1e))
* **html:** add html helper for combobox ([3fa76fd](https://github.com/telerik/kendo-themes/commit/3fa76fd7704205ca063919b8cc1a5293a4c5f198))
* **html:** add html helper for dropdownlist ([6ad5907](https://github.com/telerik/kendo-themes/commit/6ad5907d413c8be684b1eba35820831388703f01))
* **html:** add html helper for radiobutton ([5610ac1](https://github.com/telerik/kendo-themes/commit/5610ac1b87c3d912a4adb0c91dfaed197eb9f748))
* **html:** add html helper for searchbox ([3c22499](https://github.com/telerik/kendo-themes/commit/3c22499194aa32809079a42549d18ee5a8884d84))
* **html:** add html helper for switch ([2a061f9](https://github.com/telerik/kendo-themes/commit/2a061f95becd70e490f5a62e036f7688c54e4172))
* **html:** add html helpers for button ([7d8b8e8](https://github.com/telerik/kendo-themes/commit/7d8b8e84243559219fecb21921a925f87efdb5bf))
* **html:** add html helpers for masked textbox ([c8d5021](https://github.com/telerik/kendo-themes/commit/c8d50212ce46963b335b9dc40ee231ddcbe930a0))
* **html:** add html helpers for numeric ([dc54a15](https://github.com/telerik/kendo-themes/commit/dc54a15afbc247dcad2f8b298d491e7cd54e4056))
* **html:** add html helpers for textarea ([d7f5e5d](https://github.com/telerik/kendo-themes/commit/d7f5e5d9f268bd8c9bee81afb728bf9d47a75d94))
* **html:** add html helpers for Textbox ([3ae05f4](https://github.com/telerik/kendo-themes/commit/3ae05f4546c98e4d41ba4a06a79ef343745109fd))
* introduce new module system for nouvelle theme ([914f3b4](https://github.com/telerik/kendo-themes/commit/914f3b4cccb08968fe816002d6ce5b2ca6d79ee5))
* **textbox:** extract textbox as a separate module ([6c98361](https://github.com/telerik/kendo-themes/commit/6c983611935750e4356a03b1f521a4d03807f637))
* use box-sizing border-box for all elements ([0b14ce9](https://github.com/telerik/kendo-themes/commit/0b14ce9206b0c8c46dd87431d493a1111c400b1b))
* **utils:** add gap utility classes ([8a1f8e0](https://github.com/telerik/kendo-themes/commit/8a1f8e0d659f500584903a5c4793330ae282c181))
* **utils:** add more border-radius utility classes ([701056f](https://github.com/telerik/kendo-themes/commit/701056f5481690c9c9e978b1d6a92b6f75a20ed9))
* **utils:** extract theme color utility classes into utils module ([e1b51df](https://github.com/telerik/kendo-themes/commit/e1b51df9857221e0bf40a23d13be7416b4e3a425))





## [4.41.2](https://github.com/telerik/kendo-themes/compare/v4.41.1...v4.41.2) (2021-09-13)


### Bug Fixes

* **button:** button uses incorrect colors in material dark swatches ([c958e5a](https://github.com/telerik/kendo-themes/commit/c958e5ae6f9d95c297567a86b64507207f8e2502))
* **button:** clear button should inherit color ([289985f](https://github.com/telerik/kendo-themes/commit/289985f29ae50acf6bb14f9df41213fca47e80db))
* **buttons:** apply correct color of the Material primary outline button in selected state ([6224d28](https://github.com/telerik/kendo-themes/commit/6224d28ac633a148213da323e72ab94c11d5c603))
* **chat:** add styles for links in bubbles ([31e22b3](https://github.com/telerik/kendo-themes/commit/31e22b3d48beec8233516fdd9c808d8e165bb643))
* **checkbox:** checkbox uses incorrect colors in material dark swatches ([ced2117](https://github.com/telerik/kendo-themes/commit/ced21172abbbf5ebafa5c51f14c892806f8ecb25))
* **chip:** chip uses incorrect colors in material dark swatches ([52cf719](https://github.com/telerik/kendo-themes/commit/52cf71921f85808db3389d44559ac76675878847))
* **combobox:** select arrow doesnt have padding in classic theme ([6959648](https://github.com/telerik/kendo-themes/commit/6959648a1dc6599d1b2862c920e396bdf255f4bc))
* **dark-swatches:** use conditional border color based on theme luminosity ([14c2d01](https://github.com/telerik/kendo-themes/commit/14c2d019a1f85d3c5db096d3138c0e0a0cd03d8a))
* **dataviz:** always use white or white text color for chart tooltip ([2ee6aa7](https://github.com/telerik/kendo-themes/commit/2ee6aa765e83b1de99335f001d573a06047ebf57))
* **dataviz:** dont override selection colors with series colors ([0a53881](https://github.com/telerik/kendo-themes/commit/0a538811a2317f7d4ab8fc0b24d3c82cae96c3ec))
* **dataviz:** use conditional black or white colors for chart lines ([e205eda](https://github.com/telerik/kendo-themes/commit/e205edad342d8040ae5d0d7bf03351e4cd294ab9))
* **drag-drop:** drag hint uses incorrect colors in material dark swatches ([9350a10](https://github.com/telerik/kendo-themes/commit/9350a10a4ee8540e6e9f9b456a409dd5fd4a430d))
* **grid:** don't use transparent background for headers ([0388b59](https://github.com/telerik/kendo-themes/commit/0388b5949a8cca6516388a23230b7b0ab1052181))
* **grid:** grid uses incorrect colors in material dark swatches ([f69bbf7](https://github.com/telerik/kendo-themes/commit/f69bbf71f01e7fc2e6274dcbd051e338cb581e4d))
* **grid:** use correct colors for hover and alternatig grid rows in bootstrap dark swatches ([3472950](https://github.com/telerik/kendo-themes/commit/347295048c4fa2200fd434c2ae56c26b6dd3d6c2))
* **inputs:** use correct shadow spread for invalid shadow ([046d443](https://github.com/telerik/kendo-themes/commit/046d443120e99e26dec5f1094b74f03bbd6aea44))
* **inputs:** use k-hidden instead of display none to show hide warning icon ([7e387d7](https://github.com/telerik/kendo-themes/commit/7e387d76d1d89c08b62083a5fe114a5371eedc45))
* **input:** use correct placeholder color in dark themes ([4bb2337](https://github.com/telerik/kendo-themes/commit/4bb233729f62d871cc6018c2f838ecee25d89e1f))
* **material:** add the option to auto ajust contrast for material swatches ([058c115](https://github.com/telerik/kendo-themes/commit/058c1158e3408d1f000dd0210b93f794282ab777))
* **material:** tweak the value of pink 500 to have better contrast against white ([0fc9eff](https://github.com/telerik/kendo-themes/commit/0fc9eff9bb8b4f1e69a2ca9f66dcb87d16a879ab))
* **notification:** notification icons are misaligned with text in material theme ([c3b55a4](https://github.com/telerik/kendo-themes/commit/c3b55a4af656729d2fe49f7bafb2b48ec7d0c5dc))
* **pager:** add missing k-state-focused selector ([8d8de00](https://github.com/telerik/kendo-themes/commit/8d8de000387eb9eb09e3f6773c37cd38884546ba))
* **pager:** pager uses incorrect colors in material dark swatches ([013090b](https://github.com/telerik/kendo-themes/commit/013090b1b231091ce16b01064f7eea5d44acd1a4))
* **pivotgrid:** remove double border in pivotgrid headers ([924b52c](https://github.com/telerik/kendo-themes/commit/924b52c0067a630bbb733253f6bd75011e5b78b2))
* **popover:** remove padding from popover ([9bcd287](https://github.com/telerik/kendo-themes/commit/9bcd287507dfccd7c44a9eecab81e59ee673aef4))
* **popover:** use correct colors in popover for dark swatches ([f5c8176](https://github.com/telerik/kendo-themes/commit/f5c81769bbb7cf7ffc100da3bbc5100620c5146c))
* **progressbar:** progressbar uses incorrect colors in material dark swatches ([c232291](https://github.com/telerik/kendo-themes/commit/c2322917d4d82d76e347d1d5120659c51ff0f088))
* **radio:** radio button uses incorrect colors in material dark swatches ([0091c3d](https://github.com/telerik/kendo-themes/commit/0091c3dd7c66bbc3801e2ebe7412b3890ab8de87))
* rename Fuschia swatch to Nova ([8773e40](https://github.com/telerik/kendo-themes/commit/8773e401818514edc6cdb5dd2344840cdc26e02e))
* **skeleton:** use correct colors in dark swatches ([fbdde90](https://github.com/telerik/kendo-themes/commit/fbdde90251d5ca35924ef983ba5fd4cf156adab4))
* **slider:** slider  uses incorrect colors in material dark swatches ([96ea086](https://github.com/telerik/kendo-themes/commit/96ea086a2debff09222355979b3bedcaaa3fa0cb))
* **split-button:** apply correct border-radius in rtl ([a2f9f0f](https://github.com/telerik/kendo-themes/commit/a2f9f0f6d6a5a14e59e04c396462819a7f59a6a4))
* **task-board:** use correct colors for bootstrap dark swatches ([f302c39](https://github.com/telerik/kendo-themes/commit/f302c39e48291b53f8e823cb5a298a0d42c2313c))
* **textarea:** textarea uses incorrect colors in material dark swatches ([98558db](https://github.com/telerik/kendo-themes/commit/98558db977ed4cf12ab8fa88abe7f3fe5d981131))
* **tooltip:** use conditional colors for tooltip in bootstrap dark swatches ([83a8709](https://github.com/telerik/kendo-themes/commit/83a8709d8b2b0694269f3d55422ebe3e9b7a9e89))
* tweak material swatches to ensure better contrast ratio ([4b4aaea](https://github.com/telerik/kendo-themes/commit/4b4aaea0b623093ea05548254d267b2ea46ff7bd))
* use correct colors for component, slider and toolbar in default dark swatch ([32c2356](https://github.com/telerik/kendo-themes/commit/32c23567bc42db7f2acdc7c09bcb1ca028a35471))





## 4.41.2-dev.2 (2021-09-13)

**Note:** Version bump only for package kendo-themes





## 4.41.2-dev.1 (2021-09-11)

**Note:** Version bump only for package kendo-themes





## 4.41.2-dev.0 (2021-09-08)

**Note:** Version bump only for package kendo-themes





## 4.41.1 (2021-09-06)


### Bug Fixes

* **sheduler:** scheduler resource cells should not flex ([8e848d3](https://github.com/telerik/kendo-themes/commit/8e848d351452aa6eedf7c5336138991ebad4b4b1))





# [4.41.0](https://github.com/telerik/kendo-themes/compare/v4.40.1...v4.41.0) (2021-08-13)


### Bug Fixes

* **gantt:** add treelist scrollable class ([0916bcd](https://github.com/telerik/kendo-themes/commit/0916bcdd562f406aa8950496e6b80dcf2912464e))
* **grid:** import skeleton dependency ([632c4b8](https://github.com/telerik/kendo-themes/commit/632c4b83c0f40d4b91eb6767c29907e89d7aced6))
* **grid:** reduce the padding with a pixel due to the wrap element border ([296a280](https://github.com/telerik/kendo-themes/commit/296a2802f4a9350a1f24552dd6642a15135841c8))
* **pivotgrid:** apply the scrollbar padding to the table element ([c1511f9](https://github.com/telerik/kendo-themes/commit/c1511f9e7e4925c5c5e99aee7cd8265dc3712548))


### Features

* add captcha styles ([f0eef52](https://github.com/telerik/kendo-themes/commit/f0eef525d6fbc2bcae26f6502a78eb1073b4023c))
* add orgchart styles ([2e237ef](https://github.com/telerik/kendo-themes/commit/2e237ef8b358a94869f8dfc3068dbcdabd2aa083))
* add popover styles ([28f352c](https://github.com/telerik/kendo-themes/commit/28f352cdd80f777a11db5054f15c1e164e1d21b5))
* **pager:** add focusable styles to component ([9971077](https://github.com/telerik/kendo-themes/commit/9971077fbf87e55209050925405578b59b9b42ef))
* **tabstrip:** extend scrollable and sortable tabs styles ([29ae422](https://github.com/telerik/kendo-themes/commit/29ae422b08e2a6936563eed1898af329e24bf162))





## 4.40.1 (2021-07-28)

**Note:** Version bump only for package kendo-themes





<a name="4.40.0"></a>
# 4.40.0 (2021-07-26)


### Bug Fixes

* **bootstrap:** add bootstrap 3, 4 and 5 light and dark swatches ([7a276c6](https://github.com/telerik/kendo-themes/commit/7a276c6))
* update try-darken and try-lighten to work based on theme luminocity ([a87d80e](https://github.com/telerik/kendo-themes/commit/a87d80e))
* **action-sheet:** use hover-bg variable for item hover state ([db6c44e](https://github.com/telerik/kendo-themes/commit/db6c44e))
* **bootstrap:** override card variables so they can be customized by themebuilder ([8aae427](https://github.com/telerik/kendo-themes/commit/8aae427))
* **bootstrap:** reduce direct references of bootstrap variables ([2d36815](https://github.com/telerik/kendo-themes/commit/2d36815))
* **bootstrap:** remove residual overrides / referencing of bootstrap variables ([224df28](https://github.com/telerik/kendo-themes/commit/224df28))
* **breadcrumb:** reduce direct referencing of bootstrap variables ([c3ef526](https://github.com/telerik/kendo-themes/commit/c3ef526))
* **button:** darken active state of button ([3dfa722](https://github.com/telerik/kendo-themes/commit/3dfa722))
* **button:** flat buttons should have their own text color ([c2bf6a9](https://github.com/telerik/kendo-themes/commit/c2bf6a9))
* **button:** focus outline button in button group should have inner shadow ([35deb7a](https://github.com/telerik/kendo-themes/commit/35deb7a))
* **button:** use the same line height for small and large buttons ([189c481](https://github.com/telerik/kendo-themes/commit/189c481))
* **button-group:** remove customization from button group ([27debfd](https://github.com/telerik/kendo-themes/commit/27debfd))
* **calendar:** add calendar caption styles, reuse existing styles and remove legacy styles ([6d5f33e](https://github.com/telerik/kendo-themes/commit/6d5f33e))
* **calendar:** animations in kendo-jquery-calendar are broken ([e836151](https://github.com/telerik/kendo-themes/commit/e836151))
* **calendar:** update calendar cell focus shadow to match design ([fa62d57](https://github.com/telerik/kendo-themes/commit/fa62d57))
* **card:** unlink card deck gap variable from bootstrap variables ([c0acbb4](https://github.com/telerik/kendo-themes/commit/c0acbb4))
* **checkbox:** update checkbox borders to match design more closely ([2450229](https://github.com/telerik/kendo-themes/commit/2450229))
* **checkbox:** use single set of variables for styling indeterminate state indicator ([5380db2](https://github.com/telerik/kendo-themes/commit/5380db2))
* **colorpicker:** add k-hstack where needed ([2ad36e7](https://github.com/telerik/kendo-themes/commit/2ad36e7))
* **editor:** viewHTML editor-dialog styling fixed with flex ([c16b8be](https://github.com/telerik/kendo-themes/commit/c16b8be))
* **grid:** reduce direct referencing of bootstrap variables ([07f84a9](https://github.com/telerik/kendo-themes/commit/07f84a9))
* **grid:** update grid-grouping-bg to match design ([d8f7d0d](https://github.com/telerik/kendo-themes/commit/d8f7d0d))
* **input:** reduce direct referencing of bootstrap variables ([1532e87](https://github.com/telerik/kendo-themes/commit/1532e87))
* **input:** unlink input line-height small and large from bootstrap variables ([3efb638](https://github.com/telerik/kendo-themes/commit/3efb638))
* **inputs:** update inputs border to reflect design ([33c4953](https://github.com/telerik/kendo-themes/commit/33c4953))
* **listgroup:** reduce direct referencing of bootstrap variables ([9d03c43](https://github.com/telerik/kendo-themes/commit/9d03c43))
* **listgroup:** unlink listgroup variables from cell variables ([7f72e0b](https://github.com/telerik/kendo-themes/commit/7f72e0b))
* **overlay:** reduce direct referencing of bootstrap variables ([d3c92ba](https://github.com/telerik/kendo-themes/commit/d3c92ba))
* **pager:** reduce direct referencing of bootstrap variables ([ae064e8](https://github.com/telerik/kendo-themes/commit/ae064e8))
* **pivot:** reuse toolbar styles for pivot toolbar ([5166c6f](https://github.com/telerik/kendo-themes/commit/5166c6f))
* **popup:** reduce direct referencing of bootstrap variables ([fcc9116](https://github.com/telerik/kendo-themes/commit/fcc9116))
* **progressbar:** reduce direct referencing of bootstrap variables ([e1c0a36](https://github.com/telerik/kendo-themes/commit/e1c0a36))
* **rating:** use correct color for rating icons ([5be1c92](https://github.com/telerik/kendo-themes/commit/5be1c92))
* **slider:** reduce direct referencing of bootstrap variables ([a70e50c](https://github.com/telerik/kendo-themes/commit/a70e50c))
* **spreadsheet:** formula icon should be content box so it doesn't shrink ([6fd82f7](https://github.com/telerik/kendo-themes/commit/6fd82f7))
* **toolbar:** do not explictly flex stretch toolbar items ([f8f7960](https://github.com/telerik/kendo-themes/commit/f8f7960))
* **treeview:** add spacing between icon and checkbox ([e8c1a5a](https://github.com/telerik/kendo-themes/commit/e8c1a5a))
* remove most extend clauses ([a52abab](https://github.com/telerik/kendo-themes/commit/a52abab))
* remove unused cell-padding-sm variable ([0812298](https://github.com/telerik/kendo-themes/commit/0812298))
* rename cell-padding variables to table-cell-padding ([14205be](https://github.com/telerik/kendo-themes/commit/14205be))
* update list item focus shadow to match design ([6f7e29c](https://github.com/telerik/kendo-themes/commit/6f7e29c))
* **bootstrap:** use font-family-sans-serif ([bd8d717](https://github.com/telerik/kendo-themes/commit/bd8d717))
* **button:** unlink button variables from secondary variable ([86036be](https://github.com/telerik/kendo-themes/commit/86036be))
* **calendar:** do not flex stretch calendar tables ([9cea07b](https://github.com/telerik/kendo-themes/commit/9cea07b))
* **calendar:** do not shade other month day in scheduler year view ([d2bb4b9](https://github.com/telerik/kendo-themes/commit/d2bb4b9))
* **calendar:** remove background clip ([8e701b2](https://github.com/telerik/kendo-themes/commit/8e701b2))
* **calendar:** remove legacy styles for kendo-react calendar ([0d6411e](https://github.com/telerik/kendo-themes/commit/0d6411e))
* **calendar:** use cells per row ([cac90a0](https://github.com/telerik/kendo-themes/commit/cac90a0))
* **calendar:** use explicit flat buttons for calendar header ([482bcf9](https://github.com/telerik/kendo-themes/commit/482bcf9))
* **card:** use card border variable for card shadow ([19f156c](https://github.com/telerik/kendo-themes/commit/19f156c))
* **colorpicker:** wrong rtl style in color-gradient ([cb3003a](https://github.com/telerik/kendo-themes/commit/cb3003a))
* **editor:** remove explicit shading of editor find replace dialog ([432b6a2](https://github.com/telerik/kendo-themes/commit/432b6a2))
* **grid:** extract grid edit cell variables ([8a33349](https://github.com/telerik/kendo-themes/commit/8a33349))
* **grid:** remove form field customizatin in grid ([0253ed9](https://github.com/telerik/kendo-themes/commit/0253ed9))
* **grid:** use more predictable spacing between buttons in command cells ([b000af4](https://github.com/telerik/kendo-themes/commit/b000af4))
* **icon:** keep font-face styles at root so nesthet themes will work ([2ce449a](https://github.com/telerik/kendo-themes/commit/2ce449a))
* **mediaplayer:** do not apply additional styling for media player toolbar ([32aee36](https://github.com/telerik/kendo-themes/commit/32aee36))
* **mediaplayer:** use consistent padding for media player header ([3461ecf](https://github.com/telerik/kendo-themes/commit/3461ecf))
* **pager:** use consistent padding for pager ([e17a60f](https://github.com/telerik/kendo-themes/commit/e17a60f))
* **scheduler:** introduce variables for scheduler cell padding ([0760a37](https://github.com/telerik/kendo-themes/commit/0760a37))
* **scheduler:** use scheduler-cell-padding variable for all cells ([12fa675](https://github.com/telerik/kendo-themes/commit/12fa675))
* **scrollview:** change light/dark bg opacity ([d1d2250](https://github.com/telerik/kendo-themes/commit/d1d2250))
* **scrollview:** fix dots in scrollview-nav ([0c8458e](https://github.com/telerik/kendo-themes/commit/0c8458e))
* **spreadsheet:** do not extend flat buttons in spreadsheet ([1a3ac4e](https://github.com/telerik/kendo-themes/commit/1a3ac4e))
* **spreadsheet:** use actual icon in spreadsheet formula bar ([c8a4c93](https://github.com/telerik/kendo-themes/commit/c8a4c93))
* **switch:** center switch content vertically ([dca00f1](https://github.com/telerik/kendo-themes/commit/dca00f1))
* **taskboard:** pane spacing is not consistent with action buttons ([9ff8244](https://github.com/telerik/kendo-themes/commit/9ff8244))
* **toolbar:** do not override focsed state of disabled flat buttons ([2011aba](https://github.com/telerik/kendo-themes/commit/2011aba))
* remove usages of background-clip styling ([accb3ef](https://github.com/telerik/kendo-themes/commit/accb3ef))
* **tabstrip:** reduce direct referencing of bootstrap variables ([6998850](https://github.com/telerik/kendo-themes/commit/6998850))
* **toolbar:** use consistent padding for toolbar ([9fbce08](https://github.com/telerik/kendo-themes/commit/9fbce08))
* **treeview:** use base hover and selected variables for treeview variables ([bb0b569](https://github.com/telerik/kendo-themes/commit/bb0b569))
* **upload:** disconnect upload variables from toolbar ([31fc9a3](https://github.com/telerik/kendo-themes/commit/31fc9a3))
* **upload:** use spacing map to size upload items ([42bad6b](https://github.com/telerik/kendo-themes/commit/42bad6b))
* **window:** reduce direct referencing of bootstrap variables ([7f6ac0e](https://github.com/telerik/kendo-themes/commit/7f6ac0e))
* **window:** remove background-clip styles ([00ae7fb](https://github.com/telerik/kendo-themes/commit/00ae7fb))
* add missing styles for calendar today link in header ([180dbeb](https://github.com/telerik/kendo-themes/commit/180dbeb))
* extract styles for generic separator ([279e5d0](https://github.com/telerik/kendo-themes/commit/279e5d0))
* link header to variable to base variable ([8f7ca25](https://github.com/telerik/kendo-themes/commit/8f7ca25))
* remove duplicate styles for action buttons ([a1ad2de](https://github.com/telerik/kendo-themes/commit/a1ad2de))
* remove usages of deprecated accent variable ([07ddc38](https://github.com/telerik/kendo-themes/commit/07ddc38))
* remove usages of extend text-selection ([33948d8](https://github.com/telerik/kendo-themes/commit/33948d8))
* update swatches schema ([b2fa497](https://github.com/telerik/kendo-themes/commit/b2fa497))
* **upload:** wrong button cursor on hover in firefox ([dadbbe8](https://github.com/telerik/kendo-themes/commit/dadbbe8))
* **utils:** k-justify-content-stretch is not IE compatible ([6634eec](https://github.com/telerik/kendo-themes/commit/6634eec))
* streamline browserlist file ([b1ff426](https://github.com/telerik/kendo-themes/commit/b1ff426))
* wrong box-shadow when look is set to flat ([270ca93](https://github.com/telerik/kendo-themes/commit/270ca93))


### Features

* **pivotgrid:** update pivotgrid to match latest design ([4697557](https://github.com/telerik/kendo-themes/commit/4697557))
* update bootstrap theme to Bootstrap 5 ([19fccd2](https://github.com/telerik/kendo-themes/commit/19fccd2))
* **checkbox:** allow glyph, image and marke for checked and indeterminate state ([9db64a4](https://github.com/telerik/kendo-themes/commit/9db64a4))
* **functions:** add escape-svg and str-replace functions ([3ff2fd1](https://github.com/telerik/kendo-themes/commit/3ff2fd1))
* **radio:** allow glyph, image and marker for checked state ([f49034b](https://github.com/telerik/kendo-themes/commit/f49034b))
* remove bootstrap form overrides ([663d374](https://github.com/telerik/kendo-themes/commit/663d374))
* **toolbar:** add styles for toolbar group ([f68e732](https://github.com/telerik/kendo-themes/commit/f68e732))
* allow setting browser scrollbar width via CSS variable ([4b4c560](https://github.com/telerik/kendo-themes/commit/4b4c560))
* expose endpoint for swatches consuption via js ([0c7cb4f](https://github.com/telerik/kendo-themes/commit/0c7cb4f))
* sass swatches source files in dist ([4efdef2](https://github.com/telerik/kendo-themes/commit/4efdef2))
* use lerna with fixed versions for all themes ([fb838c3](https://github.com/telerik/kendo-themes/commit/fb838c3))
