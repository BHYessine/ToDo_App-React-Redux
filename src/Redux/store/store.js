import { createStore } from "@reduxjs/toolkit";

import { reducers } from "../Reducers/reducers";

const store = createStore(reducers);

export default store;