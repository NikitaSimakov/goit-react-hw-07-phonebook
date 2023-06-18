import { contactsState } from './state';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunks';
// import { Notify } from 'notiflix';

const handlePending = state => (state.isLoading = true);
const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload
        );
        state.contacts.splice(index, 1);
      })
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts.push(payload.data);
      })
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
