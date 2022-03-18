import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export const modalSlice = createSlice({
    name: "modals",
    initialState: {
        editCardItemModal: false
    },
    reducers: {
        showEditCardItemModal: (state) => {
            console.log("çalıştı reducer")
            state.editCardItemModal = true
        },
        hideEditCardItemModal: (state) => {
            state.editCardItemModal = false
        },
        
    }
})

export const {showEditCardItemModal , hideEditCardItemModal } = modalSlice.actions
export default modalSlice.reducer