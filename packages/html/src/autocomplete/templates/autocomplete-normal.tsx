import Autocomplete from "../autocomplete.spec";
import { nextId } from "../../misc";

export const AutocompleteNormal = (props) => <Autocomplete id={nextId('ac')} aria-label="Search" {...props} />;
