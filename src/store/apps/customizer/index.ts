// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit'

export const customizerSlice = createSlice({
  name: 'customizer',
  initialState: {
    drawer : false
  },
    reducers: {
        setDrawer: (state, action) => {
            state.drawer = action.payload;
      }
  }
})

export default customizerSlice.reducer;

export const { setDrawer } = customizerSlice.actions;
