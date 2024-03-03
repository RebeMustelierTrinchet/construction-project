import {configureStore} from '@reduxjs/toolkit';
import projectReducer from "./slices/project-slices";

export const store = configureStore({
    reducer: {
        projects: projectReducer
    }
})