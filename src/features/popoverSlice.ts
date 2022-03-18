import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const popoverSlice = createSlice({
    name: "popover",
    initialState: {
        
        toolbarLabelsMenuPopover: false,
        toolbarChecklistPopover: false
    },
    reducers: {
        
        showToolbarLabelsMenuPopover: (state) => {
            state.toolbarLabelsMenuPopover = true
        },
        hideToolbarLabelsMenuPopover: (state, action: PayloadAction<any>) => {
            state.toolbarLabelsMenuPopover = false
        },
        showToolbarChecklistPopover: (state) => {
            state.toolbarChecklistPopover = true
        },
        hideToolbarChecklistPopover: (state, action: PayloadAction<any>) => {
            state.toolbarChecklistPopover = false
        }
        
    }
})

export const {showToolbarLabelsMenuPopover , hideToolbarLabelsMenuPopover } = popoverSlice.actions
export default popoverSlice.reducer