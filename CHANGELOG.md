# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [5.5.0](https://github.com/telerik/kendo-themes/compare/v5.4.1...v5.5.0) (2022-06-13)


### Bug Fixes

* **avatar:** align avatar image to top ([3103874](https://github.com/telerik/kendo-themes/commit/3103874def994e4208fe90ccee0093de4525ea2b))
* **color-picker:** reduce horizontal padding of inputs, so value is almost never clipped ([40997af](https://github.com/telerik/kendo-themes/commit/40997afb2971445238421d880d919b4beca6fe0f))
* **drawer:** drawer should not be wider than its parent ([52a8c6b](https://github.com/telerik/kendo-themes/commit/52a8c6b8e892c22f90574dbdc7a18dcae56648f1))
* **input:** ensure outline input and picker use the same border-color ([5a8a651](https://github.com/telerik/kendo-themes/commit/5a8a6510767bc121a887f75e6905f524b4b588d8))
* **input:** merge input-ripple styles in input styles ([7be8b2b](https://github.com/telerik/kendo-themes/commit/7be8b2b375786d521d2c08e176d7478b9761bef7))
* **input:** remove child button border for flat input and pickers ([6a97e09](https://github.com/telerik/kendo-themes/commit/6a97e0912e2cfbaafbea93934b0c76daa2a77849))
* make flat input and picker bottom radius 0 so it can accept different rounding ([f78fbb7](https://github.com/telerik/kendo-themes/commit/f78fbb787c0504fcd7cae0b17dd661bbd16c9644))
* **material:** apply input ripple on the correct sides ([d95a5ee](https://github.com/telerik/kendo-themes/commit/d95a5ee0e1943abcfe0cf31852a84b774005e9ea))
* **material:** update input and picker colors to match latest material spec ([e07ad4d](https://github.com/telerik/kendo-themes/commit/e07ad4dd7869c9f4c85ed0a4c981254b8244e830))
* **panelbar:** expose $panelbar-border-style variable ([cf5afac](https://github.com/telerik/kendo-themes/commit/cf5afac85f27756ba55cc2557ee6ae1a26f31b2b))
* scope solid input and picker styles ([66e9357](https://github.com/telerik/kendo-themes/commit/66e935745a0d6982edc157d5d5eebc8b5b45e190))
* **slider:** add absolute positioned tick for slider ([21f931c](https://github.com/telerik/kendo-themes/commit/21f931cf8ef70a0ffae232909a7dacaa137712bd))
* **switch:** switch should accept k-rtl modifier ([db182a6](https://github.com/telerik/kendo-themes/commit/db182a60c8e0ae6adf1e0ddedbf0e7443807e87a))
* **toolbar:** revert shading for indirect child button components ([aa2c385](https://github.com/telerik/kendo-themes/commit/aa2c3852411635446170791dbacde796bccd2d38))


### Features

* **drawer:** add hierarchical item levels ([115098b](https://github.com/telerik/kendo-themes/commit/115098ba210004f8541fdffa0d744c94f96e324d))
* **html:** migrate components to react ([5b4e09b](https://github.com/telerik/kendo-themes/commit/5b4e09bcddc038de5724b4f3d56ddc930f7b5f9f))
* **utils:** add kendo-theme-utils package ([4b05d67](https://github.com/telerik/kendo-themes/commit/4b05d670d256fce055a2dacda89a0b002659793f))





## [5.4.1](https://github.com/telerik/kendo-themes/compare/v5.4.0...v5.4.1) (2022-05-05)


### Bug Fixes

* compatability with new state className syntax ([c62c363](https://github.com/telerik/kendo-themes/commit/c62c36386c6746f28038177791663ae2e4d9ac56))
* make kendo-popup 'pos: fixed' inside inputs and pickers so it's not clipped by overflow hidden ([a5492e0](https://github.com/telerik/kendo-themes/commit/a5492e0e57efa6bf2d31f0450cd4c07a8538c5ac))





# [5.4.0](https://github.com/telerik/kendo-themes/compare/v5.3.1...v5.4.0) (2022-05-02)


### Bug Fixes

* add missing styles to numeric-filter-menu ([d923974](https://github.com/telerik/kendo-themes/commit/d923974080b6c61150508995ff5cc6d5a2cdbdae))
* **chip:** chip text color to depend on the base-text color rather than button-text ([773465c](https://github.com/telerik/kendo-themes/commit/773465c8e2baee7fba719b748bf49260a55923f0))
* **daterangepicker:** update swap button alignment to match design ([62d9043](https://github.com/telerik/kendo-themes/commit/62d90433eafe4324880c35de95deed098e6cf89e))
* **dropdown:** update hover background-color and text to match design ([95c5a9d](https://github.com/telerik/kendo-themes/commit/95c5a9dad12611ecb73c00955701f9af459fa26e))
* extract menu-button styles as a separate module ([b20201a](https://github.com/telerik/kendo-themes/commit/b20201a837e927078cbd9a624a2873d14e9a9ce7))
* extract split-button styles as a separate module ([b52a8ba](https://github.com/telerik/kendo-themes/commit/b52a8baca8c02d2a3e91991a5113e42fb04dc42e))
* **floatinglabel:** allow usage of k-invalid and k-focus classes ([aec2ea9](https://github.com/telerik/kendo-themes/commit/aec2ea931f673274b9bdae9a130591006c610543))
* **gantt:** dependency validation tooltip adjustments ([bf7c6e8](https://github.com/telerik/kendo-themes/commit/bf7c6e855815ab0260010b5f6fcd7e3cc314f015))
* **input:** add inline-start border to input button in default and material ([133d29f](https://github.com/telerik/kendo-themes/commit/133d29fd2a272d1c283bee51db5bb9d48d8673d1))
* **input:** apply $invallid-border to invalid focus state outline input and picker in default theme ([983ee4f](https://github.com/telerik/kendo-themes/commit/983ee4f2c53d8ad5ca530ddd239f0ae463d3c587))
* **input:** apply correct border-radius on :focus-within ([e5ebc2b](https://github.com/telerik/kendo-themes/commit/e5ebc2ba53fb35eeac576696d8e820575e39e738))
* **input:** apply correct hover border-color to input in default theme ([b4da2c1](https://github.com/telerik/kendo-themes/commit/b4da2c1701893b454eb6e307baa9f760e340ff64))
* **input:** apply correct styles to focused outline picker when hovered ([9cec247](https://github.com/telerik/kendo-themes/commit/9cec2470c83263f8bb9e57ab5eb079c8aef51fda))
* **input:** ensure correct styles are applied to input and picker when in invalid state ([4cce02a](https://github.com/telerik/kendo-themes/commit/4cce02a481645c4ad65057fa1f80e434fd7dcc6b))
* **input:** ensure inputs and pickers have identical padding across all fill modes ([d0af743](https://github.com/telerik/kendo-themes/commit/d0af743693aad7290fadda598ab165196c681e98))
* **input:** fix flat picker :focus:hover behavior in bootstrap ([6939394](https://github.com/telerik/kendo-themes/commit/69393948336fea28b366ab44877abe9ccf0d1db0))
* **input:** give flat input and picker border-radius on focus to match design ([7a1cbdc](https://github.com/telerik/kendo-themes/commit/7a1cbdc9a4168b55f9b94d973b6ca2a9d875488e))
* **input:** give flat picker background-color on hover state ([1e54437](https://github.com/telerik/kendo-themes/commit/1e544376abf05684b63f92e158ed989b95170c6a))
* **input:** update flat input border-color on focus to match design ([275748c](https://github.com/telerik/kendo-themes/commit/275748c75e239f88aa1436450573f8b49f0f42ef))
* **input:** update flat picker focus border and shadow in bootstrap to match design ([dfe9966](https://github.com/telerik/kendo-themes/commit/dfe99662b93204795a40ce852d4f939369b335ad))
* **input:** update input border-color in material to match design ([a33b563](https://github.com/telerik/kendo-themes/commit/a33b56321d14a1e7a3eb1f8d6af41242e2079a3f))
* **input:** update input focus border-color in default to match design ([fd01025](https://github.com/telerik/kendo-themes/commit/fd0102565ed238033ce383402e1422c936d71fbe))
* **input:** update outline picker text and border color in bootstrap to match design ([d2e9c1c](https://github.com/telerik/kendo-themes/commit/d2e9c1cd3aa4f94447f306df425a3e015fdc5d74))
* **input:** update picker focus  background-color and border-color in bootstrap ([6ac2e1d](https://github.com/telerik/kendo-themes/commit/6ac2e1dafde76793495d9e5c203dc54166bd2ad2))
* **input:** update solid input focus border in material to match design ([8e0e266](https://github.com/telerik/kendo-themes/commit/8e0e26666c72f8c3a2555035c2ad1fcb1a96935d))
* **menu:** add missing button dependency ([d070d37](https://github.com/telerik/kendo-themes/commit/d070d37049b532b84d29e3352477e56137d1364e))
* **menu:** apply focus styles to the inner k-link element ([3480b4e](https://github.com/telerik/kendo-themes/commit/3480b4ebcc37cdddc811e7b5d6f1d3c8839b421f))
* **menu:** make scroll button selector more specific ([e517d27](https://github.com/telerik/kendo-themes/commit/e517d27c2138148c8717d2a3beadb8f1f6586041))
* **scheduler:** align recurrence icon in bootstrap theme ([d79bc71](https://github.com/telerik/kendo-themes/commit/d79bc716a348552f70dffa02275098d8a884979c))
* **treeview:** allow sizing customization through default treeview variables ([61b180d](https://github.com/telerik/kendo-themes/commit/61b180dc4c3febcf541f224d6526886725d83470))
* update outline input and picker border-colors to match design ([469a96b](https://github.com/telerik/kendo-themes/commit/469a96bf3be269aff3641c12efe86a859d36470e))


### Features

* add button structure json ([0747339](https://github.com/telerik/kendo-themes/commit/07473391e089ca3b3b773d4c4514648c6c50c64b))
* **calendar:** allow usage of k-focus k-hover k-selected k-active cl… ([15ff571](https://github.com/telerik/kendo-themes/commit/15ff571e16675fec4f2d6e90292e3f9de826a19e))
* **card:** allow usage of k-hover and k-focus ([be00269](https://github.com/telerik/kendo-themes/commit/be00269bfc19edb1d824f79ef1029e47a872c00d))
* **html:** add swap button to daterangepicker html ([a43986e](https://github.com/telerik/kendo-themes/commit/a43986ecf52f0d3604d0a7d2cbaf9d76f99d1d2e))
* **orgchart:** allow usage of k-focus class ([9ae8020](https://github.com/telerik/kendo-themes/commit/9ae802069211563b8f616e2e242b1913a9983e5e))





## [5.3.1](https://github.com/telerik/kendo-themes/compare/v5.3.0...v5.3.1) (2022-04-07)


### Bug Fixes

* **floatinglabel:** placeholder should be transparent if floating label is not focused ([2192dab](https://github.com/telerik/kendo-themes/commit/2192dab4c3cda7ad54151be6b5845f1135d29179))
* **swatches:** export ocean blue swatch ([dfbfbc6](https://github.com/telerik/kendo-themes/commit/dfbfbc672e8507ee4a37a3825b8e3fcc9634fce4))





# [5.3.0](https://github.com/telerik/kendo-themes/compare/v5.2.0...v5.3.0) (2022-04-04)


### Bug Fixes

* **actionsheet:** use subtle text variable for description styling ([043ca4a](https://github.com/telerik/kendo-themes/commit/043ca4a79b9d715d70515f617e01f9d33ee92903))
* add clear button to json option file ([9bda9f6](https://github.com/telerik/kendo-themes/commit/9bda9f6f0d0c9696be72e87dff7007a1059f18e4))
* **button:** allow $kendo-solid-button-shade-function to be customized ([83f8965](https://github.com/telerik/kendo-themes/commit/83f8965511228f40953b91b54a7c839a5832256f))
* **button:** remove forced aspect ratio ([8e41299](https://github.com/telerik/kendo-themes/commit/8e412999ba3859487936bdb3e16baf31341a00a9))
* **chat:** add pre-wrap to chat messages ([78a5e6d](https://github.com/telerik/kendo-themes/commit/78a5e6dfb82b2c0d3efc8886ad87e4355aab7fde))
* **chip:** add box-shadow none on focus ([86b845d](https://github.com/telerik/kendo-themes/commit/86b845d81cb54f89d0fce71db60641447e6ef85b))
* **chip:** text color in dark swatches ([1682fcc](https://github.com/telerik/kendo-themes/commit/1682fcc9462d1acd565c304625c62e7e658f5f5e))
* **chip:** update solid chip background color to match design ([18353e9](https://github.com/telerik/kendo-themes/commit/18353e97daa9209b465bc5b87a244b457757be69))
* **colorgradient:** use subtle text variable for input labels ([860853a](https://github.com/telerik/kendo-themes/commit/860853ad96477b67ef3e93d9dee86ce769ed32fb))
* **colorpalette:** use k-selected for selected state ([92fdec8](https://github.com/telerik/kendo-themes/commit/92fdec83178d88cf9876aa7c402bff69da7e934d))
* **dropdowngrid:** reset data table border width in popup ([af33de2](https://github.com/telerik/kendo-themes/commit/af33de2a9f9a4fd5dffe4e994628a0760f3982b3))
* **dropdowntree:** wrong padding of the check-all element ([ba3f72e](https://github.com/telerik/kendo-themes/commit/ba3f72ee72ad57d6a98876b43cd5a2b8d5168982))
* **dropzone:** use subtle text variable for note styling ([8a416c1](https://github.com/telerik/kendo-themes/commit/8a416c1afdcd6b22406fdcbba4c18c89d035b7e0))
* **expansion-panel:** use subtle text variable for sub title styling ([53ca03c](https://github.com/telerik/kendo-themes/commit/53ca03ccfa171812b36d5f0046990fa47860a113))
* **floating-label:** add offset in front of floating-label in material theme ([5322dfc](https://github.com/telerik/kendo-themes/commit/5322dfcbb4ccf346b0d8d42b899a573cb7466bc6))
* **floating-label:** address comments ([4cb59c8](https://github.com/telerik/kendo-themes/commit/4cb59c89bbd867cd6d389990255739bc41a769af))
* **floating-label:** allow label to be clickable in order to focus associated input ([4a2acb8](https://github.com/telerik/kendo-themes/commit/4a2acb86905c2a0c338710d366c42f7410ba03b2))
* **floating-label:** apply correct transitioning and alignment in rtl direction ([f4e423d](https://github.com/telerik/kendo-themes/commit/f4e423d228324a04b7b47de03d826472f5dd7980))
* **floating-label:** ensure styles are applied when using k-empty class ([fdebefa](https://github.com/telerik/kendo-themes/commit/fdebefaae47f243e36188cb8b49bf6c39c52ffe1))
* **floating-label:** ensure styles are applied when using k-focus class ([8c6c318](https://github.com/telerik/kendo-themes/commit/8c6c318e225d1d12da6d90b82d3d54be40f6ce8c))
* **form:** action buttons overflow ([4dbd1f3](https://github.com/telerik/kendo-themes/commit/4dbd1f3a09bd70ce8cc05b61f659b16d6630e1a0))
* **grid:** allow th cell alignment when sortable is enabled ([a6adf50](https://github.com/telerik/kendo-themes/commit/a6adf505447fc39179b350bee7d5f5c797baf40e))
* **grid:** incorrect header sorting icon selector ([eec44f5](https://github.com/telerik/kendo-themes/commit/eec44f5bbc105267ed5c405bba4905ce3e6f5dd8))
* **html:** add k-input-loading-icon class to loading icon ([f38780b](https://github.com/telerik/kendo-themes/commit/f38780bb1fd39fa451f64b249eb053930e778df4))
* **html:** avatar rounded option value ([865dc33](https://github.com/telerik/kendo-themes/commit/865dc33dc4e349438d704803102f8bdbb7167425))
* **html:** remove rounding option from radio buttons readme ([48fb0f7](https://github.com/telerik/kendo-themes/commit/48fb0f7d36e54366f1859f171b9bf03cb07e4e86))
* **html:** remove unneeded attributes from map ([9993a73](https://github.com/telerik/kendo-themes/commit/9993a73c3d36de66036caecab7d500d5d3525096))
* **html:** update validation icon classes ([7cdc86a](https://github.com/telerik/kendo-themes/commit/7cdc86aebad04079866c3879ba3a038a5fcf758c))
* **input:** allow placeholder text color customization on generic input ([86270a9](https://github.com/telerik/kendo-themes/commit/86270a9f55683354f5bd87eef7d4a9c481df7f79))
* **input:** correctly handle native disabled inputs ([bd3b646](https://github.com/telerik/kendo-themes/commit/bd3b646ee19d64f571d03c1d62f627d4f06410c8))
* **input:** hover shadow variables not present in the code ([5629d40](https://github.com/telerik/kendo-themes/commit/5629d40f72057274b93d8b7c28f3dc2db886e792))
* **pager:** ensure text inside pager does not wrap when pager is not responsive ([9dd7c2b](https://github.com/telerik/kendo-themes/commit/9dd7c2b5500e6f9c011a40bfaa25eb19e01be549))
* **taskboard:** use hover color for focus state ([f81ba93](https://github.com/telerik/kendo-themes/commit/f81ba930018e05d03037cd00f93f1b2f936c5e56))
* **textarea:** add padding when using directive ([1a0cbab](https://github.com/telerik/kendo-themes/commit/1a0cbab0e7a3121e9d7ae5b3e750ddaa13d9b5a7))
* **textbox:** add necassery disabled styles ([b9b9797](https://github.com/telerik/kendo-themes/commit/b9b9797b21a73dbc89c7b3e332129bc554527ee1))


### Features

* add default ocean blue swatch ([867ee02](https://github.com/telerik/kendo-themes/commit/867ee02c7a4d831a80da13ac103d546684ccd003))
* **common/loading:** add variables for loading indicator ([d271873](https://github.com/telerik/kendo-themes/commit/d271873d571d43776a2e86f09a6f9ea59cbc66af))
* **html:** add action buttons html helper ([bc5a49f](https://github.com/telerik/kendo-themes/commit/bc5a49f6c70f816da874dcfd93baa6be8a84b77f))
* **html:** add captcha html helper ([c50a695](https://github.com/telerik/kendo-themes/commit/c50a6958415ad238d66c54d4351280c068b9a497))
* **html:** add colorpalette html helper ([1445f1c](https://github.com/telerik/kendo-themes/commit/1445f1cd3ca14b035d5325d02589abaf3737d10b))
* **html:** add dropdowngrid helper ([8e32c81](https://github.com/telerik/kendo-themes/commit/8e32c811665ece6db39b2c4133dfbe7ed0d03ea1))
* **html:** add floating label html helper ([61c792c](https://github.com/telerik/kendo-themes/commit/61c792cec339f7863c910bf650a60f5f63665270))
* **html:** add html helper for ButtonGroup ([2347fd0](https://github.com/telerik/kendo-themes/commit/2347fd083bb4fe31c974912e2aceaa2722147fef))
* **html:** add html helper for daterangepicker ([5efcbaf](https://github.com/telerik/kendo-themes/commit/5efcbafd41badf1486f8e4effd344813d822b679))
* **html:** add popover html helper ([07202ac](https://github.com/telerik/kendo-themes/commit/07202acf027e07ded96dea7f027ee0f75840a128))
* **html:** add typography html helper ([48f244e](https://github.com/telerik/kendo-themes/commit/48f244e83a1d75d9256fc92bfe70dad16b448e64))
* **scheduler:** add ongoing event styles ([60c6108](https://github.com/telerik/kendo-themes/commit/60c6108ed3c69fb28f2c8d0ccf3d38bdd0ba80e6))
* **utils:** add aspect-ratio utility classes ([51dfc5a](https://github.com/telerik/kendo-themes/commit/51dfc5a990d1ae19251207e23cf0dec6faaa57df))
* **utils:** add utility classes for white space wrapping ([c4d4a28](https://github.com/telerik/kendo-themes/commit/c4d4a28b5bf10aec8fe41bcb3c1421b6c95ba011))





# [5.2.0](https://github.com/telerik/kendo-themes/compare/v5.1.1...v5.2.0) (2022-02-21)


### Bug Fixes

* add important utils for flex-*, justify and align ([5823691](https://github.com/telerik/kendo-themes/commit/582369185dcfb7187519260c84aa672adaee5e2f))
* add important utils for overflow ([2a1101a](https://github.com/telerik/kendo-themes/commit/2a1101a35103d87db764a93d9347706689a2c150))
* add important utils for resize ([bd0edd1](https://github.com/telerik/kendo-themes/commit/bd0edd1f9fdf28477344381ce5f403bcf9baf4b6))
* **button:** font awesome icons in icon button are not properly aligned ([ece376e](https://github.com/telerik/kendo-themes/commit/ece376e5a42b662dea862eef6dee412024b974c8))
* **button:** use kendo-button-border-radius variable in button styles ([ee6a073](https://github.com/telerik/kendo-themes/commit/ee6a0739efea1e3dc2aa0b428c277ef08b7ca976))
* **calendar:** long month names overlapping in infinite calendar navi… ([68a97b3](https://github.com/telerik/kendo-themes/commit/68a97b3673efd87889309a6f1d3836b8e9d849c6))
* change default border radius in bootstrap theme ([f1db475](https://github.com/telerik/kendo-themes/commit/f1db4756884ca50d826f5333f1d586fa12c55531))
* change default border radius in material theme ([54a6aa9](https://github.com/telerik/kendo-themes/commit/54a6aa900da973fc7663c1a90b2d3e69d941513c))
* change default border radius in the default theme from 2 to 4 pixels ([9c0ac14](https://github.com/telerik/kendo-themes/commit/9c0ac1432e8245243bd3660e76988a0283324798))
* **chip:** fix cut text at bottom of chip ([97e1bc4](https://github.com/telerik/kendo-themes/commit/97e1bc4e7a64b31c90912b685b52a230cac2dcbf))
* **dataviz:** set default barcode height ([cae3bfc](https://github.com/telerik/kendo-themes/commit/cae3bfc73b90568cfff514565ce5264042303277))
* **dataviz:** set default QR code height ([e648409](https://github.com/telerik/kendo-themes/commit/e648409543aa14566e77405430bda63651a201d1))
* **docs:** resolve sass variables before docs generation ([80e37c4](https://github.com/telerik/kendo-themes/commit/80e37c4409d673e006d59ed29845c6aa2b5b713c))
* **floating-label:** fix rtl display when floatiating label is placed inside container with [dir=rtl] ([14e401e](https://github.com/telerik/kendo-themes/commit/14e401ee539ee25596a1693c25b34d0d6b9e2ca2))
* **form:** set daterangepicker on a single line ([2b0e8d1](https://github.com/telerik/kendo-themes/commit/2b0e8d1d224bd300d34cb025b052875e36084998))
* **functions:** escape percent character ([44598e6](https://github.com/telerik/kendo-themes/commit/44598e68e7715ab08add6a1484ea4254c4fd8d7b))
* **html:** add k-focus to menu item instead of menu link ([8ca69f7](https://github.com/telerik/kendo-themes/commit/8ca69f7e191dfbbab4ddff6c819711039d021638))
* **input:** conditionally set spinner offset to calculated or auto ([04d5b35](https://github.com/telerik/kendo-themes/commit/04d5b3529870030ac38777be838680c1d7d0e8a5))
* **input:** excess text is not properly cut ([60c5834](https://github.com/telerik/kendo-themes/commit/60c5834992fd77f5516c8a254ea7bd6bfe8b63fe))
* **input:** missing styles for kendo icons in suffix and prefix ([78d1cae](https://github.com/telerik/kendo-themes/commit/78d1caedeea5cf50817df7e0a075a9ab4352b494))
* **list:** empty items have a wrong height ([ebd716e](https://github.com/telerik/kendo-themes/commit/ebd716e8ca576719b6d9a574676e0d1d4e7c6c3c))
* **menu:** set focus styles to menu items via k-focus class for keyboard navigation purposes ([ebbadf5](https://github.com/telerik/kendo-themes/commit/ebbadf5025d7d0903d35ef9384143894ebfd4d25))
* **notification:** customizable theme variables ([ed8ae78](https://github.com/telerik/kendo-themes/commit/ed8ae7893d41b306e1e00ba0111e47682918329b))
* **pivotgrid:** add missing padding between icon and text in pivotgrid cells ([e84fe7c](https://github.com/telerik/kendo-themes/commit/e84fe7c60f82419d555e24ff14002f8a245da50c))
* **pivotgrid:** add vertical borders for the legacy pivot rendeing in Material theme ([c9194cd](https://github.com/telerik/kendo-themes/commit/c9194cdeb861f42a2556510278e1af84d0444f1e))
* rename border-radius to kendo-border-radius ([54698d6](https://github.com/telerik/kendo-themes/commit/54698d6a96fecbd1cb7123ca9be488f696c8974d))
* **stepper:** label overflow doesnt work ([78777c0](https://github.com/telerik/kendo-themes/commit/78777c06db83118a2be681e8a86b1da4bfc80313))
* **textarea:** set display to inline-flex ([75a6da4](https://github.com/telerik/kendo-themes/commit/75a6da4c0490642eff642dce01be212dfe5a6a65))
* utilize border radius variables in classic theme ([69968ac](https://github.com/telerik/kendo-themes/commit/69968acf604dc9af07677f9b52131b4fcc370966))


### Features

* add disabled state variables for input and picker high-level components ([d85b305](https://github.com/telerik/kendo-themes/commit/d85b3058c5015b235213699e67539cce03f3feaa))
* **filemanager:** add left and right borders to splitbar according to updated designs ([48d0eae](https://github.com/telerik/kendo-themes/commit/48d0eae19bedcf200be9daeabc15a6e09146fd95))
* **gantt:** add dependency validation tooltip styles ([ebd1031](https://github.com/telerik/kendo-themes/commit/ebd1031d520f40295b9716c6e0fd68a5ac2efd05))
* **icons:** add new icons to the font ([12d3c17](https://github.com/telerik/kendo-themes/commit/12d3c17f29bf7e203cc61be1a604d026eefbe4ac))
* improve component options sizings as per desing ([d927a16](https://github.com/telerik/kendo-themes/commit/d927a1684e42d06700ba1fd0bcb830af6508e7ca))





## [5.1.1](https://github.com/telerik/kendo-themes/compare/v5.1.0...v5.1.1) (2022-01-24)


### Bug Fixes

* scope theme colors variables to avoid conflicts with bootstrap ([3713876](https://github.com/telerik/kendo-themes/commit/37138761677d9ee14dc48a7a8b80209839e33be2))





# [5.1.0](https://github.com/telerik/kendo-themes/compare/v5.0.1...v5.1.0) (2022-01-24)


### Bug Fixes

* **button:** use kendo-button prefix in swatch definitions ([bf482e6](https://github.com/telerik/kendo-themes/commit/bf482e6f0c2c39426fd9eefbe71759743ae4332a))


### Features

* **tabstrip:** add focused state styles on tab item ([1626963](https://github.com/telerik/kendo-themes/commit/16269638f57aa0316cd9df88a14f6bcb68a1cf78))





## [5.0.1](https://github.com/telerik/kendo-themes/compare/v5.0.0...v5.0.1) (2022-01-19)


### Bug Fixes

* **button:** apply correct styling to clear button ([351a902](https://github.com/telerik/kendo-themes/commit/351a902d69cb487b871cafb038836542019af824))
* **daterangepicker:** set default width for dateinputs ([de493c9](https://github.com/telerik/kendo-themes/commit/de493c9bec4c56568c79551da2d476f4a1e6afca))
* **panelbar:** scope content styles ([f5f6d70](https://github.com/telerik/kendo-themes/commit/f5f6d70ee6e3e1aef5ab04a537e653481a3f7a14))





# [5.0.0](https://github.com/telerik/kendo-themes/compare/v4.44.0...v5.0.0) (2022-01-18)


### Bug Fixes

* **charts:** update chart series colors ([8866736](https://github.com/telerik/kendo-themes/commit/8866736ab495dd6b8eca238f55a9c01d84f53845))
* **html:** set global legacy property to false ([6d187e6](https://github.com/telerik/kendo-themes/commit/6d187e6f1e3b3ada28e883df6e9d871159c99475))


### chore

* **scheduler:** remove legacy styles for kendo-angular-scheduler toolbar ([94e093b](https://github.com/telerik/kendo-themes/commit/94e093b33161bd2940aabed616d547a98c9576d0))


### Features

* **autocomplete:** add size, rounded and fill customization to autocomplete ([de93be6](https://github.com/telerik/kendo-themes/commit/de93be662c97db2ea6da3042b5e0f36602b80c5d))
* **avatar:** add rounded customization to avatar ([9d663e4](https://github.com/telerik/kendo-themes/commit/9d663e4e5c1f9d00517760033413106039f8d028))
* **button:** add size, shape and color customization to button ([db31d3f](https://github.com/telerik/kendo-themes/commit/db31d3f2c5da75d8a02e16f4824835574af45e14))
* **checkbox:** add sizing property to checkbox ([b60493d](https://github.com/telerik/kendo-themes/commit/b60493ddf78fd435c62a52718acbc292f7cd76f6))
* **chip:** add size rounded customization to chip ([1c2c8c0](https://github.com/telerik/kendo-themes/commit/1c2c8c06405f52dfeccf74e7331c5167eb375539))
* **color-picker:** add size, shape and color customization to color picker ([ea83616](https://github.com/telerik/kendo-themes/commit/ea83616e29f6585548fa128ac38817c1904034ea))
* **combobox:** add size, shape and color customization to combobox ([3454223](https://github.com/telerik/kendo-themes/commit/3454223bfe3b22c673532e24bec58dc0ed354f7d))
* **date-input:** add size, rounded and full customization to date input ([c19da4f](https://github.com/telerik/kendo-themes/commit/c19da4f1a5506e9a537ba0ebc2a3c03001dbf172))
* **date-picker:** add size, rounded and full customization to date picker ([b137bca](https://github.com/telerik/kendo-themes/commit/b137bcaa3ef1f1d3bcfdaa16ee1bf51e15b91499))
* **daterange-picker:** add size, rounded and full customization to date range picker ([5f48054](https://github.com/telerik/kendo-themes/commit/5f480546f3ed150bf25712a55d85c808cd6a8ecf))
* **datetime-picker:** add size, rounded and full customization to date-time picker ([9d98b62](https://github.com/telerik/kendo-themes/commit/9d98b62cd6b8ce69c0e00fd17381da8851ef450f))
* **dropdown-grid:** add size, shape and color customization to dropdown grid ([b8f7f05](https://github.com/telerik/kendo-themes/commit/b8f7f05aa3517037132053705f37d5fbd725e33f))
* **dropdown-list:** add size, shape and color customization to dropdown list ([1a529a8](https://github.com/telerik/kendo-themes/commit/1a529a818b984feda4872dac65cd62577a202c4d))
* **dropdown-tree:** add size, shape and color customization to dropdown tree ([7907d94](https://github.com/telerik/kendo-themes/commit/7907d94a8af62115cb5fdae0df630b7c0ec24c83))
* **fab:** standartize appearance options ([6a9dfdb](https://github.com/telerik/kendo-themes/commit/6a9dfdb6012e97b9be1b249d2a2265ce00ab7f23))
* **html:** add html helper for multiselect ([55cf915](https://github.com/telerik/kendo-themes/commit/55cf915c9d4ae5cc1ae5383d1c4bd22e07bf4ccf))
* **input:** add new high-level input component ([6f45cf0](https://github.com/telerik/kendo-themes/commit/6f45cf0e1c4aeeca31cf8607e7f5b16f51dec598))
* **list:** add size customization to list ([1509542](https://github.com/telerik/kendo-themes/commit/15095429fba919f86a59e2f862b7b5415122f2b4))
* **masked-textbox:** add size, rounded and fill customization to masked textbox ([995dc3f](https://github.com/telerik/kendo-themes/commit/995dc3f9694f2bab387096e8ec4192515f4566ad))
* **menu-button:** add size customization to menu button ([45a0864](https://github.com/telerik/kendo-themes/commit/45a0864e88e903dbd7e551694a57e5e7a6c6c9b8))
* **menu:** add size customization to menu list and menu items ([7e0b9d1](https://github.com/telerik/kendo-themes/commit/7e0b9d19ae57558cd7af98c70312ebd023931496))
* **multiselect:** add size, rounded and fill customization to multiselect ([11a2cab](https://github.com/telerik/kendo-themes/commit/11a2cab78f73b4b29914d3c314de9106c35dd77f))
* **numeric:** add size, rounded and fill customization to numeric ([8e16cd2](https://github.com/telerik/kendo-themes/commit/8e16cd281240d8221c1701d277df78597d7707ef))
* **radio:** add sizing property to radio ([afb6cc3](https://github.com/telerik/kendo-themes/commit/afb6cc3e03b2150f89049027075d099e05d79f2c))
* **searchbox:** add size, rounded and fill customization to searchbox ([0e75886](https://github.com/telerik/kendo-themes/commit/0e75886cba13f41db65c05b5de0a2f7f54f9efa6))
* **switch:** add size and rounded customization to switch ([10a7a02](https://github.com/telerik/kendo-themes/commit/10a7a02274d986ebe22d15b19d9665a6c14136e9))
* **table:** add sizing to table component ([ae7b643](https://github.com/telerik/kendo-themes/commit/ae7b64322559cddf808db0f29c66b0d4db5d0b80))
* **textarea:** add size, rounded and fill customization to textarea ([cc6c6fb](https://github.com/telerik/kendo-themes/commit/cc6c6fb5dc91c946a9dedbb5dffe8308e888b5f5))
* **textbox:** add size, rounded and fill customization to textbox ([797937e](https://github.com/telerik/kendo-themes/commit/797937ed0cb604e5695eb98a568424bd03a0c357))
* **time-picker:** add size, rounded and full customization to time picker ([c8db5cb](https://github.com/telerik/kendo-themes/commit/c8db5cbc45b31ca072a50873d806ff243efc4846))
* **treeview:** add sizing property to treeview ([0b92f78](https://github.com/telerik/kendo-themes/commit/0b92f781ea4e242833a1bcdda5006f188ccf38a0))


### infra

* **publishing:** do not include flattened dependencies in distributions ([6dd9537](https://github.com/telerik/kendo-themes/commit/6dd95376dd86cd2182987195ee8b79938e19c285))


### BREAKING CHANGES

* **fab:** Convert monolithic FAB styles to multiple class names.

Styles are split in multiple class names with each being scoped to a
single FAB appearance property:

* `shape` - controls if the FAB is square or not;
* `size` - controls the overall physical size of a FAB;
* `themeColor` - controls which color is used to style a FAB;
* `fillMode` - controls how the color is applied;
* `rounded` - controls what border radius is applied to a FAB.
* **fab:** the shape option now supports `rectangle` and `square`.
* **fab:** themeColor class is now composite - `k-fab-{fillMode}-{themeColor}`.
* **fab:** Add kendo prefix to all FAB variables
* **treeview:** Add sizing property to TreeView
* **multiselect:** Use high-level input for multiselect base

Multiselect reuses the input base component size, rounded and fill
component options.
* **multiselect:** Use chip list for item selection
* **chip:** Add kendo prefix to all avatar variables

Change variable names from `$chip-*` to `$kendo-chip-*`.
* **table:** Add kendo prefix to all table variables

Change variable names from `$table-*` to `$kendo-table-*`.
* **list:** List size is now applied by a dedicated class.
* **list:** Rename list state variables.
* **list:** Add kendo prefix to all list variables

Change variable name from `$list-*` to `$kendo-list-*`.
* **menu:** Convert monolithic menu styles to multiple class names
* **menu-button:** Convert monolithic menu button styles to multiple class names
* **avatar:** Removed shape option from avatar.

The avatar has fixed width and height, thus no dedicated shape option
is needed. Instead, the avatar has rounded appearance property set
to circle by default.

The styles of the avatar are split into multiple class names with each
being scoped to a single appearance property:

* `size` controls the overall physical size of an avatar;
* `themeColor` controls which color is used to style an avatar;
* `fillMode` controls how the color is applied;
* `rounded` controls what border radius is applied to an avatar.

Each property generates component specific class name `k-avatar-{size}`,
 `k-avatar-{fillMode}`, `k-avatar-{fillMode}-{themeColor}`.

Note: without `fillMode`, there is no way to apply themeColor, that's why
the `themeColor` class is composite.

The only notable exception is rounded, which sets the same class name
for all components -- `k-rounded-{rounded}`.

You can find more information about the values of each property in the
documentation of the button component -- /docs/components/avatar.
* **avatar:** Add kendo prefix to all avatar variables

Change variable names from `$avatar-*` to `$kendo-avatar-*`.
* **daterange-picker:** Use high-level input for date range picker base

Date range picker reuses the input base component size, rounded and fill
component options.
* **datetime-picker:** Use high-level input for date-item picker base

Date-time picker reuses the input base component size, rounded and fill
component options.
* **time-picker:** Use high-level input for time picker base

Time picker reuses the input base component size, rounded and fill
component options.
* **date-picker:** Use high-level input for date picker base

Date picker reuses the input base component size, rounded and fill
component options.
* **date-input:** Use high-level input for date input base

Date input reuses the input base component size, rounded and fill
component options.
* **color-picker:** Use high-level picker for color picker base

Color picker reuses the picker base component size, rounded and fill
component options.
* **dropdown-grid:** Use high-level picker for dropdown grid base

Dropdown grid reuses the picker base component size, rounded and fill
component options.
* **dropdown-tree:** Use high-level picker for dropdown tree base

Dropdown tree reuses the picker base component size, rounded and fill
component options.
* **dropdown-list:** Use high-level picker for dropdown list base

Dropdown list reuses the picker base component size, rounded and fill
component options.
* **combobox:** Use high-level input for combobox base

Combobox reuses the input base component size, rounded and fill
component options.
* **autocomplete:** Use high-level input for autocomplete base

Autocomplete reuses the input base component size, rounded and fill
component options.
* **searchbox:** Use high-level input for searchbox base

Searchbox reuses the input base component size, rounded and fill
component options.
* **masked-textbox:** Use high-level input for masked textbox base

Masked textbox reuses the input base component size, rounded and fill
component options.
* **numeric:** Use high-level input for numeric textbox base

Numeric textbox reuses the input base component size, rounded and fill
component options.
* **textarea:** Use high-level input for textarea base

Textarea reuses the input base component size, rounded and fill
component options.
* **textbox:** Use high-level input for textbox base base

Textbox reuses the input base component size, rounded and fill
component options.
* **input:** Add new high-level input and picker component

Previously, the various form components did not share or reuse code.
Now, we have have to base components: input and picker, that
hold the bulk of styling needed. In addition, styles are split in multiple class names
with each being scoped to a single component appearance property:

* `size` controls the overall physical size of a component;
* `themeColor` controls which color is used to style a component;
* `fillMode` controls how the color is applied;
* `rounded` controls what border radius is applied to a component.

Each property generates component specific class name `k-input-{size}`,
`k-input-{fillMode}`, `k-input-{fillMode}-{themeColor}`.

Note: without `fillMode`, there is no way to apply themeColor, that's why
the `themeColor` class is composite.

The only notable exception is rounded, which sets the same class name
for all components -- `k-rounded-{rounded}`.

You can find more information about the values of each property in the
documentation of each respective component -- /docs/components/....
* **input:** Remove residual styles

No further customization is applied to input and picker components when
hosted inside other components, except in very few specific cases.
* **input:** Add kendo prefix to all variables

Change variable names from `$input-*` to `$kendo-input-*`.
* **radio:** Add sizing property to radio

There is a new aptly named property, `size`, for radio button which
controls the overall physical size of a radio button.
* **radio:** Add kendo prefix to all radio variables

Change variable names from `$radio-*` to `$kendo-radio-*`.
* **checkbox:** Convert monolithic checkbox styles to multiple class names

Previously, `k-checkbox` held all the styling information related to
the checkbox component. Now, styles are split in multiple class names
with each being scoped to a single checkbox appearance property:

* `size` controls the overall physical size of a checkbox;
* `rounded` controls what border radius is applied to a checkbox.
* **checkbox:** Add kendo prefix to all checkbox variables

Change variable names from `$checkbox-*` to `$kendo-checkbox-*`.
* **switch:** Convert monolithic switch styles to multiple class names

Previously, switch class names held too much styling information that
made customizing the switch hard. Now, styles are split in multiple
class names with each being scoped to a single switch appearance property:

* `size` controls the overall physical size of a switch;
* `trackRounded` controls what border radius is applied to the switch track;
* `thumbRounded` controls what border radius is applied to the switch thumb.

You can find more information about the values of each property in the
documentation of the button component -- /docs/components/switch.
* **switch:** Remove residual switch styles

No further customization is applied to buttons when hosted inside other
components, except in very few specific cases.
* **switch:** Add kendo prefix to all switch variables

Change variable name from `$switch-*` to `$kendo-switch-*`.
* **button:** Convert monolithic button styles to multiple class names

Previously, `k-button` held all the styling information related to
the button component. Now, styles are split in multiple class names
with each being scoped to a single button appearance property:

* `shape` controls if the button is square or not;
* `size` controls the overall physical size of a button;
* `themeColor` controls which color is used to style a button;
* `fillMode` controls how the color is applied;
* `rounded` controls what border radius is applied to a button.

Each property generates component specific class name `k-button-square`,
`k-button-{size}`, `k-button-{fillMode}`, `k-button-{fillMode}-{themeColor}`.

Note: without `fillMode`, there is no way to apply themeColor, that's why
the `themeColor` class is composite.

The only notable exception is rounded, which sets the same class name
for all components -- `k-rounded-{rounded}`.

You can find more information about the values of each property in the
documentation of the button component -- /docs/components/button.
* **button:** Remove residual button styles

No further customization is applied to buttons when hosted inside other
components, except in very few specific cases.

For instance, in Material theme we would slightly dim the normal buttons
and remove the shadow, which may or may not be desired.
* **button:** Add kendo prefix to all button variables

Change variable names from `$button-*` to `$kendo-button-*`.
* **scheduler:** Remove legacy styles for kendo-angular-scheduler
* **charts:** Updates the chart series colors to match the update designs

* add compatibility swatches called ending with v4
* **html:** Set global legacy property to false
* **publishing:** Do not include flattened dependencies in distributions





# [4.44.0](https://github.com/telerik/kendo-themes/compare/v4.43.0...v4.44.0) (2022-01-18)


### Bug Fixes

* **adaptive:** improve spacing between items in adaptive edit form ([2ff4adf](https://github.com/telerik/kendo-themes/commit/2ff4adf6c93b0788b0c48ead56781b4a7f17ddf1))
* add box sizing to compnents and parts of components that can be sized ([3ec985a](https://github.com/telerik/kendo-themes/commit/3ec985afb179dc43472f0f2fe4810402ed8e25a8))
* add important utils for flex ([26cfa9e](https://github.com/telerik/kendo-themes/commit/26cfa9e502310685151967852d8592d48e202fca))
* add styles for virtual scroller component ([0e1c521](https://github.com/telerik/kendo-themes/commit/0e1c5210675533794e37a29e33a10f8347ccb29b))
* **appbar:** make horizontal and vertical padding symetrical ([6504cad](https://github.com/telerik/kendo-themes/commit/6504cad125689e70462d2701a6143db0131d6122))
* **autocomplete:** convert styles to universal v4 rendering ([dbf7bcf](https://github.com/telerik/kendo-themes/commit/dbf7bcf055e2b2a3213c71568ab65c011226b0df))
* **avatar:** avatar can use forward compatible border radius ([0aa2ed1](https://github.com/telerik/kendo-themes/commit/0aa2ed1a1c4516b7fa04e231f5cce09f4236615a))
* **button-group:** button group shouldn't have disabled appearance ([b44a2a2](https://github.com/telerik/kendo-themes/commit/b44a2a21467aaea941431713df9fa354f21f022b))
* **button-group:** use direction independent border radius for children ([ca0f78d](https://github.com/telerik/kendo-themes/commit/ca0f78d390c4fd4502f4c600d0d1e78f651dcd51))
* **button:** add extra styles for flat button ([885cc6f](https://github.com/telerik/kendo-themes/commit/885cc6f93b4d086bbea0707866a90dd7796046e4))
* **button:** add extra styles for link button ([f90e61d](https://github.com/telerik/kendo-themes/commit/f90e61dfe510332b0f5494cedb45e97518e60246))
* **button:** add extra styles for outline button ([8100b97](https://github.com/telerik/kendo-themes/commit/8100b971f661d2b06b49f0667bcba212b1710e9b))
* **button:** add extra styles for solid button ([3aabce4](https://github.com/telerik/kendo-themes/commit/3aabce47cd23e9dc09ab02cb778d48b7c18f1a36))
* **button:** do not override button focus shadow in button group ([b806e0e](https://github.com/telerik/kendo-themes/commit/b806e0e4a1892ce05113ec8bc6ee73ba03c9c886))
* **button:** increase border radius from 2px to 4px ([d4d1beb](https://github.com/telerik/kendo-themes/commit/d4d1beb3f6a93caeae570ad531c55c72347656db))
* **button:** increase button height to match the input ([b262bf3](https://github.com/telerik/kendo-themes/commit/b262bf3028cbc65b9b6f5f3bd5a8f7c3ea5b0465))
* **button:** material button should not be translucent when disabled ([efc209a](https://github.com/telerik/kendo-themes/commit/efc209ac3de834518398f4e94eae7ab750419a0f))
* **button:** remove IE 9 related code ([96c23ef](https://github.com/telerik/kendo-themes/commit/96c23efe01ed3dd91a8b8364a42e0fbbf15fd95a))
* **button:** size inner icon of button instead the button itself ([f728632](https://github.com/telerik/kendo-themes/commit/f728632a7fc58ffe0a255be18511ee3098889166))
* **button:** update button box shadow spread to match Bootstrap ([17bcd28](https://github.com/telerik/kendo-themes/commit/17bcd2885e38b61f3d5c088ba6efba4aae0bc135))
* **button:** use border-radius inherit for focus ring ([5e9ad82](https://github.com/telerik/kendo-themes/commit/5e9ad82c6e517266834a2542db7b916499a23b25))
* **button:** use the same appearance for active and selected button ([d9ca91e](https://github.com/telerik/kendo-themes/commit/d9ca91e24c5ab5dee9736bdc8888bcb37147f3c7))
* **chat:** remove border from message box buttons ([38ba0dc](https://github.com/telerik/kendo-themes/commit/38ba0dc4b17f0841cfbb181dd1e5e906ec7c4d70))
* **chat:** remove redundant textbox styles ([339c301](https://github.com/telerik/kendo-themes/commit/339c3018ae465b3e28ad3f5b022aad88eea69ff1))
* **chat:** scroll buttons should be as small as possible ([4d32dce](https://github.com/telerik/kendo-themes/commit/4d32dce4ab708f1e4a8b12f18ec32b16a7e58272))
* **checkbox-radio:** add styles for checkbox radio wrap for better alignment ([3f2e22f](https://github.com/telerik/kendo-themes/commit/3f2e22f921b9f3e529847de2129a86f639cc00be))
* **checkbox-radio:** checkboxes and radios should not shrink ([d6196f5](https://github.com/telerik/kendo-themes/commit/d6196f589d838120650c7e4e170a99f8c02e7546))
* **checkbox-radio:** use !important when hiding empty radio / checkbox lables ([9c9e647](https://github.com/telerik/kendo-themes/commit/9c9e64764a883e40ce2312a74acae31cf5d84b85))
* **checkbox:** classic checkbox should have 4px border radius to reflect less themes ([0e2a4b8](https://github.com/telerik/kendo-themes/commit/0e2a4b8a8a7974092d142aa85472eaff4898c12c))
* **checkbox:** contrast base for border  should be own background ([6529fcb](https://github.com/telerik/kendo-themes/commit/6529fcb1ed41c94c01737abdc3b186012ac9433f))
* **checkbox:** improve ripple styles ([122a208](https://github.com/telerik/kendo-themes/commit/122a20889233daff2f1a841f80b711a5c3dd8cad))
* **checkbox:** remove styles for obsolete marker indicator ([4edd8bd](https://github.com/telerik/kendo-themes/commit/4edd8bd2739ebf62961d3f2305c71398c5fc9449))
* **color-editor:** make gap between current and preview color consistent ([6e2a06f](https://github.com/telerik/kendo-themes/commit/6e2a06f09a69d9b15d277693fdd2e7e1e29e746d))
* **color-picker:** convert styles to match universal rendering ([9d46df1](https://github.com/telerik/kendo-themes/commit/9d46df1bd909e47f5b856b36376f8d96cb032a6a))
* **color-picker:** legacy colorpicker shouldbe able to use color preview ([a9f445e](https://github.com/telerik/kendo-themes/commit/a9f445e6bfe2ab51d308dcb8cf3e353ba6d5611c))
* **color-preview:** scope transparent background to color preview mask ([87a1f19](https://github.com/telerik/kendo-themes/commit/87a1f19a9424a0344e6659c59a5ab13bad5cc360))
* **column-menu:** ensure all child content is 100% wide ([fd954fe](https://github.com/telerik/kendo-themes/commit/fd954fefeb601aa1f7cd7f2b27183302f29ac09c))
* **column-menu:** use corretly derived padding variables ([6da6b59](https://github.com/telerik/kendo-themes/commit/6da6b598e9f854dace47071f73c542799948b012))
* **combobox:** update styles to match universal v4 rendering ([8408f7c](https://github.com/telerik/kendo-themes/commit/8408f7cd906ae4342992fefcf434e817d1f6ffb6))
* **daterange-picker:** extract daterange picker styles as a separate module ([02b3560](https://github.com/telerik/kendo-themes/commit/02b35602f512836a8b81a79f8e64d1aa5d0dabc0))
* **dropdown-list:** update styles to match universal v4 rendering ([eb21b75](https://github.com/telerik/kendo-themes/commit/eb21b75e4bf965f248d739428f5ee321535514e4))
* **editor:** ensure kendo-jquery styles for overflow anchor do not affect the other suites ([efad10e](https://github.com/telerik/kendo-themes/commit/efad10e087a123906cc3f34c7902e6b2b77db56a))
* **editor:** floating toolbar should take available width ([e13246d](https://github.com/telerik/kendo-themes/commit/e13246db9ab1eaf5288ea20cb46468f9ca7608a0))
* **editor:** set default width for inputs in dialogs ([ac2798a](https://github.com/telerik/kendo-themes/commit/ac2798af5a875eec70a3521086018afe66437e55))
* ensure consistent width for inputs and pickers when inside toolbar and other containers ([503e68b](https://github.com/telerik/kendo-themes/commit/503e68b2e77f9dedc5652009db309eb6f31b7102))
* ensure correct font sizes for xs sm md lg and xl ([1615afa](https://github.com/telerik/kendo-themes/commit/1615afa6446fa827249776f70e6301f677fd251d))
* **filter:** adjust styles for angular rendering ([971f6cb](https://github.com/telerik/kendo-themes/commit/971f6cbcab45992aafbb941f58bfd7d4acdac6d8))
* **form:** make form-buttons alias of action buttons ([0510a42](https://github.com/telerik/kendo-themes/commit/0510a42a0bfda2638a76f6b3be8067f5832c63c7))
* **forms:** remove unexpected margin before a form field preceded by hidden field ([4ffcd48](https://github.com/telerik/kendo-themes/commit/4ffcd482cc29c0eb075a469740486e8a017bdcd0))
* **grid:** column menu and filter menu should not extend beyond their popup ([9281a90](https://github.com/telerik/kendo-themes/commit/9281a9034e0aae58ddb0284d3ecceed0b104ad4a))
* **grid:** do not flex colorpicker and dropdown opearotr in grid filter row ([ab713e7](https://github.com/telerik/kendo-themes/commit/ab713e737b33d7f28fdb2581f1fb873115513d05))
* **grid:** filter button is not visible in ie ([b11f198](https://github.com/telerik/kendo-themes/commit/b11f1984b23f10d1acc70b2f0d654ba6ecf795f2))
* **grid:** fix background color on selected cell when hovered ([75597d4](https://github.com/telerik/kendo-themes/commit/75597d47cc3e1d09d234fe769b5a23c70e12ab7b))
* **grid:** fix buttons misalignment in grid toolbar and group indicator ([aeee0ab](https://github.com/telerik/kendo-themes/commit/aeee0abe87bfa9323d81d4c89deb7759b3f8e674))
* **grid:** improve how items are spaced in grid filter row ([2138291](https://github.com/telerik/kendo-themes/commit/2138291d23dfbcb6d9926239c9c9f7c228124099))
* **grid:** remove separate hover styling on detail row container ([1be1790](https://github.com/telerik/kendo-themes/commit/1be1790c341b22cad665707c33ac207a1e957906))
* **html:** add class name to button icon ([f19fe44](https://github.com/telerik/kendo-themes/commit/f19fe442646607e7dfd43814893cdbca6e7e6365))
* **html:** add wrapper around checkbxes when in list ([d2ae815](https://github.com/telerik/kendo-themes/commit/d2ae8157037e891da045dc9366ccfd8c61a8b51f))
* **html:** allow children when using ButtonStatic ([d664ae9](https://github.com/telerik/kendo-themes/commit/d664ae958df3349c3e588b20518821ceb10f4871))
* **html:** always render checkbox-wrap around checkbox ([e623625](https://github.com/telerik/kendo-themes/commit/e62362510ace575e806b49a97437dba662083aa0))
* **html:** always render radio-wrap around radio ([999faf0](https://github.com/telerik/kendo-themes/commit/999faf0baeb8fd05215f641bd504e4ad4413727f))
* **html:** avatar can use forward compatible border radius ([22498e1](https://github.com/telerik/kendo-themes/commit/22498e1ba7a7fcfc888ce99ab20b1ebaaaca450f))
* **html:** button helper should apply forward compatible class names ([9b002e9](https://github.com/telerik/kendo-themes/commit/9b002e985c6c74e4efdf95c9df8bf9b507015d8b))
* **html:** move component to its own folder ([999b970](https://github.com/telerik/kendo-themes/commit/999b970577c420388168fd354b075bc274a9f7a1))
* **html:** setting shape null should not render class name ([c312bc4](https://github.com/telerik/kendo-themes/commit/c312bc41d948db18275d5a64b8ddf462539da3a0))
* **html:** update autocomplete classes to match v4 univesal rendering ([150a3a3](https://github.com/telerik/kendo-themes/commit/150a3a383d8c26f4cc0642c25db6dd5a47847bb5))
* **html:** update color picker html helper to reflect v4 universal rendering ([7aa0c36](https://github.com/telerik/kendo-themes/commit/7aa0c3662ceefc5cf44162d2f8250cd94bdd89de))
* **html:** update combobox classes to match universal v4 rendering ([2f77c30](https://github.com/telerik/kendo-themes/commit/2f77c30b3791f0d5f59ee6ff83abff5e3e52fd95))
* **html:** update dateinput html helper to reflect v4 universal rendering ([2aaad75](https://github.com/telerik/kendo-themes/commit/2aaad75f59f6de5fca3063c002ab2153e24383c0))
* **html:** update datepicker html helper to reflect v4 universal rendering ([9ec0821](https://github.com/telerik/kendo-themes/commit/9ec082122a57b91a750defcdcd553fad6f55c8c7))
* **html:** update datetime picker html helper to reflect v4 universal rendering ([0a8a9cc](https://github.com/telerik/kendo-themes/commit/0a8a9cced674f44e0ea03ee0070998fe20799afe))
* **html:** update dropdown list classes to match universal v4 rendering ([4925ef4](https://github.com/telerik/kendo-themes/commit/4925ef4fee6526d78bfc62d59784f143f6061609))
* **html:** update masked textbox rendering to match universal v4 rendering ([ec64529](https://github.com/telerik/kendo-themes/commit/ec6452951aadf37c09e224c1a2b9307093ecf8ab))
* **html:** update numeric classes to match v4 universal rendering ([f39ac52](https://github.com/telerik/kendo-themes/commit/f39ac5284dc712a7d30adb2867d0f4d73cde09ec))
* **html:** update time picker html helper to reflect v4 universal rendering ([2a19188](https://github.com/telerik/kendo-themes/commit/2a19188fa64243913623aeb2494f0aa2859c56a1))
* **image-editor:** introduce variable to set action pane width ([fff9c07](https://github.com/telerik/kendo-themes/commit/fff9c070fdb2033c4529359d77eee5e8178e7858))
* **input:** input prefix and suffix must not have height ([8414a23](https://github.com/telerik/kendo-themes/commit/8414a2356dc1f102b0c5376505f535c424774326))
* **input:** make all inputs to match filled material input ([9731e30](https://github.com/telerik/kendo-themes/commit/9731e307361394c84c22fdb005883daf29d20750))
* **input:** use 200px default width instead of guessing ([85fce4a](https://github.com/telerik/kendo-themes/commit/85fce4a32d62756d0a0c2f07888d4d0a1fb1a920))
* **list:** better alignment for checkboxes in multiline scenario ([d87921a](https://github.com/telerik/kendo-themes/commit/d87921a6b3cfdc0ba946d5a8ba6b219a47fd7210))
* **listbox:** fix scrolling issue ([e7a81db](https://github.com/telerik/kendo-themes/commit/e7a81db13fb1b6f0289264c965f2c3c72c4e771a))
* **listbox:** ser default width to 10 em (20 characters) ([6be4719](https://github.com/telerik/kendo-themes/commit/6be47190f8e555fa4af35ac81f1718558ed2656a))
* **list:** improve list item spacing, group heading font weight and no-data container height ([a1b5786](https://github.com/telerik/kendo-themes/commit/a1b57866ad2c6eae1207da1a982df6b842b9739f))
* **list:** k-list-scoller shouldbe rendered in legacy rendering ([ae339f9](https://github.com/telerik/kendo-themes/commit/ae339f913bcf65497632f0761bbb8d1ba8c939d3))
* **list:** use correct colors for various list parts ([efac2c6](https://github.com/telerik/kendo-themes/commit/efac2c63acbe0adc30c7e23c95b141a63e08c773))
* **list:** use correct variable values for list and items ([15bfcb3](https://github.com/telerik/kendo-themes/commit/15bfcb3e45ad979c77bbcc53c34e4a4ec360fe2e))
* **listview:** remove redundant border rule ([ef8486a](https://github.com/telerik/kendo-themes/commit/ef8486abb3737281d71455acb13656470df8172f))
* make scroll buttons consistent in tabstrip, spreadsheet and and chat ([72ad38d](https://github.com/telerik/kendo-themes/commit/72ad38d5e91c6d93d7cc6f5c570141bae2c98e4e))
* **map:** ensure buttons are properly positioned ([b7af07c](https://github.com/telerik/kendo-themes/commit/b7af07c16e8c31cc177ffdaf335f9c457a728ec0))
* **masked-textbox:** apply correct appearance in material theme ([071ab28](https://github.com/telerik/kendo-themes/commit/071ab28d9191ea0c58b8882efe384dc321fecdd4))
* **maskedtextbox:** update styles to match v4 universal rendering ([20d3589](https://github.com/telerik/kendo-themes/commit/20d358959ed83241cecfcc4883ccd455f981f8d7))
* **media-player:** ensure correct width of quality selector ([c07eb7c](https://github.com/telerik/kendo-themes/commit/c07eb7ca205cf6e04172f26216c7aaf5d710cf60))
* **menu-button:** add styles for button arrow ([bb87946](https://github.com/telerik/kendo-themes/commit/bb87946e4a04315f1aa3fcfcdee6049f8a847834))
* **menu-button:** menu button arrow should be as large as split button arrow ([b2f746e](https://github.com/telerik/kendo-themes/commit/b2f746ef65ac8088d7c7d9c2d16e4ba2156bc404))
* **menu:** add styles for selected menu item ([1236f1a](https://github.com/telerik/kendo-themes/commit/1236f1a33251dd538cf5e33e797ca415bcbfc486))
* **menu:** expand arrow container should center its icon ([5895f6f](https://github.com/telerik/kendo-themes/commit/5895f6fb2ee9b1026626ada9974d6e7524396083))
* **menu:** menu items should be flex column not row ([ce981fc](https://github.com/telerik/kendo-themes/commit/ce981fc79f8b7b7b161358d51e11be33d3e619c6))
* **numeric:** convert styles to v4 universal rendering ([f12f787](https://github.com/telerik/kendo-themes/commit/f12f787c61171768046adfd49df3f60ed41e399a))
* **pager:** set default width for inputs 5 em (10 characters) ([f8332af](https://github.com/telerik/kendo-themes/commit/f8332affe2b4c074c33cfe730f9f90ce362be0c7))
* **pdf-viewer:** reuse toolbar variables for pdf-viewer search ([5c0f71c](https://github.com/telerik/kendo-themes/commit/5c0f71ce76eb50b00cff3ec811c05b65cdd2031c))
* **pivot:** add styling to configurator chips ([2a11514](https://github.com/telerik/kendo-themes/commit/2a11514df875c1731ed202d15d3e096b98e88fc0))
* **popover:** remove absolute positioning of the popover element ([b3cac8c](https://github.com/telerik/kendo-themes/commit/b3cac8cb14c6268289e107bae3b85ad6b0f30c92))
* **popup:** box shadow should follow the same logic from default theme ([1982304](https://github.com/telerik/kendo-themes/commit/1982304b60d26ada994d154329ba40c00283fc2a))
* **popup:** make padding of popups 0 ([d567a72](https://github.com/telerik/kendo-themes/commit/d567a72fec402302c950542c7dcb8b78261d3285))
* **radio:** improve ripple styles ([9c2cc66](https://github.com/telerik/kendo-themes/commit/9c2cc66b554771c7972dc2f0ab383501c3a14b21))
* reuse styles in adaptive grid filter menu ([d04b71c](https://github.com/telerik/kendo-themes/commit/d04b71cfbc8f877f67aa9fbf77206205b8365d31))
* **scheduler:** adjust edit fields container dimensions and layout ([f209db1](https://github.com/telerik/kendo-themes/commit/f209db1f37ec4fbf79b66ce66d9cc4c7dd89c061))
* **scheduler:** scheduler tooltip no data template should not stretch the tooltip ([e7bb71f](https://github.com/telerik/kendo-themes/commit/e7bb71f56c4c112a902194488eb489421bbdfc53))
* **scrollview:** correct translate direction in rtl ([0f896a5](https://github.com/telerik/kendo-themes/commit/0f896a567c9ae1e737ac38316cdf3eb21cda18c3))
* **searchbox:** convert styles to v4 universal rendering ([d38a6d4](https://github.com/telerik/kendo-themes/commit/d38a6d4ace56126477268019014507e22973ed39))
* set default input width to 10 em (20 characters) ([17fbebc](https://github.com/telerik/kendo-themes/commit/17fbebc6cec70e0f6f1ce268cfeb428fec96760b))
* set explicit box-sizing border box to most components ([e83bec3](https://github.com/telerik/kendo-themes/commit/e83bec39c4081fc4d3096d22b6338d15cc988ec8))
* **slider:** classic slider should be 56 pixels wide ([de0fec4](https://github.com/telerik/kendo-themes/commit/de0fec46d0aae23281ab879f8b5b63873f4282af))
* **slider:** update slider styles to match universal v4 rendering ([7884875](https://github.com/telerik/kendo-themes/commit/7884875f9e360777cacec5714819064e66b45679))
* **spreadsheet:** hide overflow when frozen columns exceed spreadsheet width ([e3443fb](https://github.com/telerik/kendo-themes/commit/e3443fb3c0c9dfe08b65f7b8c2e816cd05a62187))
* **switch:** align classic theme colors with less themes ([b647dcf](https://github.com/telerik/kendo-themes/commit/b647dcf2e33e65709834c8feadc757b8c4fb4712))
* **switch:** switch should behave correctly in containers with dir attribute ([edee197](https://github.com/telerik/kendo-themes/commit/edee19724d5d7ccf4049c5c47f2b2112fa4fabd3))
* **table:** add horizontal border in table header ([857397f](https://github.com/telerik/kendo-themes/commit/857397ff85c08041703bf5f2e0b24f49e4715cf2))
* **table:** add styles for kendo-jquery table-list with grouping ([b126983](https://github.com/telerik/kendo-themes/commit/b12698372c03d33c33b467842372480f99193893))
* **table:** add styles for sticky table group header ([da9199f](https://github.com/telerik/kendo-themes/commit/da9199f4de94ad95b297beb5b65e1f0df6252390))
* **table:** group row should be absolutely positioned in virtualization ([aa83b3a](https://github.com/telerik/kendo-themes/commit/aa83b3ace98ffd816c9469cd09c5be5fd348bb7d))
* **table:** table header and footer should inherit border color ([bd09c9d](https://github.com/telerik/kendo-themes/commit/bd09c9d31f53e988b68cc351d29e0d363e4e0494))
* **tabstrip:** Fix tab overflow when scrollable is set to false ([a0d314b](https://github.com/telerik/kendo-themes/commit/a0d314baa63c2372a92dd9a52525936f67a16324))
* **tabstrip:** scrollable tabstrip should not wrap items ([5be3a4c](https://github.com/telerik/kendo-themes/commit/5be3a4cfca8c07f98fffe46aa6407ead0b77da66))
* **tabstrip:** unify tabstrip content padding ([d35feb9](https://github.com/telerik/kendo-themes/commit/d35feb9f605622c3470a6de9bfcccce5f823ba03))
* **textarea:** text area should be block level element ([a0b7426](https://github.com/telerik/kendo-themes/commit/a0b7426a777a2316c9449970ca517f146e2d4d15))
* **timeselector:** remove outline ([d9bd390](https://github.com/telerik/kendo-themes/commit/d9bd390f3119ee75c9ddecf1ebe282b582bdbf3e))
* **toolbar:** add menu component as dependency to toolbar component ([90eeb13](https://github.com/telerik/kendo-themes/commit/90eeb136f5907b860d46fdc3c1f9f8307620e6a6))
* **toolbar:** move styles for toolbar overflow container in toolbar files ([148a0ab](https://github.com/telerik/kendo-themes/commit/148a0ab0543b81f6fa8d98a37efb100c308e043e))
* **treeview:** add styles for treeview filter container ([dd5c257](https://github.com/telerik/kendo-themes/commit/dd5c257d2300489816d36d70caf220e4d6a4c23a))
* **treeview:** checkboxes need margin on both horizontal sides ([396d720](https://github.com/telerik/kendo-themes/commit/396d720947e31711be2715a543aeaa53d63664bc))
* **treeview:** streamline treeview styles to match design better ([23a80f3](https://github.com/telerik/kendo-themes/commit/23a80f38e3ab7e679c17a04c75c0a6bf8b0641b8))
* **treeview:** use correct variable values for treeview and items ([37f271a](https://github.com/telerik/kendo-themes/commit/37f271a22eb9fae1e22db1461e5d53d4d73dcee5))
* use correct font-size for inputs ([f59582f](https://github.com/telerik/kendo-themes/commit/f59582f1275f3dac2644adb88ea8096bb1d9e3df))
* use smaller font size for table list and grid list group labels ([0d9a4a3](https://github.com/telerik/kendo-themes/commit/0d9a4a386717945f8503d083d059d2b30acac098))
* **utils:** replace circle and pill with full border-radius option ([4bf37c6](https://github.com/telerik/kendo-themes/commit/4bf37c6b16b29ccad4581e43c52f205309cc160f))
* **window:** use correct line-height for titlebar ([3b88d41](https://github.com/telerik/kendo-themes/commit/3b88d412802d07cf99cae32bf4b59955ae93106e))


### Features

* **date-input:** extract date input styles into a separate folder ([061868a](https://github.com/telerik/kendo-themes/commit/061868a44f4c6970f3d2d2a34a673583f0de5710))
* **date-picker:** extract date picker styles into a separate folder ([c3633bd](https://github.com/telerik/kendo-themes/commit/c3633bdc34bf2c4b469b894553cfde4253b147bc))
* **datetime-picker:** extract datetime picker styles into a separate folder ([e269119](https://github.com/telerik/kendo-themes/commit/e269119f023f258a956c3d6c759243dd58359ced))
* **html:** add floatingactionbutton html helper ([ecf47ea](https://github.com/telerik/kendo-themes/commit/ecf47ea84b8f36649388a22e55c0d49df8922327))
* **html:** add helper for no-data component ([457c7db](https://github.com/telerik/kendo-themes/commit/457c7db2c2da878a818f1c9a9af8b435f5aa4821))
* **html:** add html helper for chip and chip-list ([5bb16aa](https://github.com/telerik/kendo-themes/commit/5bb16aaf55b769bcfde72906cf10c71351cb3642))
* **html:** add html helper for list ([5360947](https://github.com/telerik/kendo-themes/commit/5360947c446f63969ea3cbf42a6442b4176be5dd))
* **html:** add html helper for menu button ([334e7aa](https://github.com/telerik/kendo-themes/commit/334e7aab1f31a40eb453d8d46e3bad11bdd3c6be))
* **html:** add html helper for menu list and menu item ([a79f4c1](https://github.com/telerik/kendo-themes/commit/a79f4c19a196aa5842f975c1cbdafe3f357a9658))
* **html:** add html helper for popup component ([bcbabce](https://github.com/telerik/kendo-themes/commit/bcbabce95668a5b74e9913c9a133521bfd0bc9f4))
* **html:** add html helper for split button ([82ca86e](https://github.com/telerik/kendo-themes/commit/82ca86edfc9c7c13af76665518dcab50dfad1730))
* **html:** add html helper for treeview ([857453a](https://github.com/telerik/kendo-themes/commit/857453a915485d1f43a362e9f68d504a2573f0bd))
* **list:** extract styles for list component ([bff7748](https://github.com/telerik/kendo-themes/commit/bff7748940888055efd36b1a76af7b4698ed6fc8))
* **panelbar:** adds variables to allow customization when expanding panelbar ([37215ea](https://github.com/telerik/kendo-themes/commit/37215ea1ac7ab95d13c35fc20c7c7154fcb1735b))
* **slider:** convert slider layout to flexbox ([16ee221](https://github.com/telerik/kendo-themes/commit/16ee221a3a1d1edb73b6520c4ccf8571d84817bd))
* **table:** add styles for table component ([639ea3f](https://github.com/telerik/kendo-themes/commit/639ea3fd84a07968f366da8950b630bd911d6ea0))
* **time-picker:** extract time picker styles into a separate folder ([d5e5888](https://github.com/telerik/kendo-themes/commit/d5e58886b895798bfac52e041da140dcfa09c428))
* **time-selector:** extract time selector styles into a separate folder ([d16b90c](https://github.com/telerik/kendo-themes/commit/d16b90c90d26ad600e452f9bd7b6ff21c89a10d4))


### Reverts

* revert d9ca91e24c5ab5dee9736bdc8888bcb37147f3c7 ([acfc62b](https://github.com/telerik/kendo-themes/commit/acfc62bb4ebc5e69aeb3d3491c66596b201eef31))





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
