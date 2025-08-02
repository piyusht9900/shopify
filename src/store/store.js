import {configureStore} from "@reduxjs/toolkit";
import cartsystem  from "./slice"


const store  = configureStore({

    reducer:{
        cart:cartsystem
    }
})

export default store