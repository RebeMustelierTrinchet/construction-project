import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    projectList: [],
}

export const projectReducer = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        getProjectsReducer: (state, action) => {
            state.projectList = action.payload.projectList
        }
    }
})

export const {getProjectsReducer} = projectReducer.actions;

export default projectReducer.reducer;