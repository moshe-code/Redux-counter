import { createSlice } from '@reduxjs/toolkit'




export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        isDarkMode: false
    },
    reducers:{
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    
    }
    
}
})


export const { increment, decrement, } = counterSlice.actions

export default theme.reducer