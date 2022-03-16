import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: "modals",
    initialState: {
        editCardItemModal: false
    },
    reducers: {
        showEditCardItemModal: (state) => {
            state.editCardItemModal = true
        },
        hideEditCardItemModal: (state, action: PayloadAction<any>) => {
            state.editCardItemModal = false
        },
        
    }
})

export const {showEditCardItemModal , hideEditCardItemModal } = modalSlice.actions
export default modalSlice.reducer