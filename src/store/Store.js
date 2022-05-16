import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../components/features/userSlice"
import appBarReducer from "../components/features/appBarSlice"
import userProjectsReducer from "../components/features/userProjectsSlice"
import { combineReducers } from 'redux'
import projectReducer from "../components/features/projectSlice"
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";



const persistConfig = {
    key: "root",
    storage,
  };

const reducer = combineReducers({
    userReducer,
    appBarReducer,
    userProjectsReducer,
    projectReducer
  })

  const persistedReducer = persistReducer(persistConfig, reducer);

  
export default configureStore ({

    reducer : persistedReducer ,
    
})