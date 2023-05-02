import { createContext } from "react";

// an empty central space has been created
export const StoreContext = createContext();

// central state has been exported
export default StoreContext;

// import { StoreContext } from "./store"; ==> if exported as variable must be imported that way
// import Store from "./store/index.js"; ==> if exported as default can be imported that way