declare const Mocha : typeof import('mocha');
declare const chai : typeof import('chai');

declare function $( selector: string ) : HTMLElement;
declare function $$( selector: string ) : NodeListOf<HTMLElement>;

declare function loadFixture( url: string ) : void;
declare function clearFixture() : void;
