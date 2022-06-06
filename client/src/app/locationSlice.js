import { createSlice } from '@reduxjs/toolkit'
const userLocaltion = JSON.parse(localStorage.getItem('location'))
let initialStateObj = userLocaltion ? userLocaltion : { state: 'DC', zip: '20500'} 
export const stateLocSlice = createSlice ({
    name: 'location',
    initialState: initialStateObj,
    reducers: {
        changeLocation: (state, action) => {
            const location = action.payload
            return state = {...state, state: location.state, zip: location.zip}
        } 
    }
})

export const { changeLocation } = stateLocSlice.actions
export const selectLocState = state => state.location.state
export const selectLocZip = state => state.location.zip

export default stateLocSlice.reducer