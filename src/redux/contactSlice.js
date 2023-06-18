import { contactsState } from './state';
import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from './thunks';
// import { Notify } from 'notiflix';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts = payload;
        state.isLoading = false;
      })
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        const index = state.contacts.findIndex(
          contact => contact.id === payload
        );
        state.contacts.splice(index, 1);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.contacts.push(payload.data);
      });
  },
  // reducers: {
  //   fetching(state) {
  //     state.isLoading = true;
  //   },
  //   fetchingSuccess(state, { payload }) {
  //     state.isLoading = false;
  //     state.contacts = payload;
  //     state.error = '';
  //   },

  //   fetchingError(state, { payload }) {
  //     state.error = payload;
  //   },
  // addContact(state, { payload }) {
  //   if (state.some(contact => contact.name === payload.name)) {
  //     Notify.failure(`${payload.name}, is already in contact`);
  //   } else {
  //     state.push(payload);
  //   }
  // },
  // deleteContact(state, action) {
  //   const idx = state.findIndex(contact => contact.id === action.payload.id);
  //   state.splice(idx, 1);
  // },
});

export const contactsReducer = contactsSlice.reducer;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export const { fetching, fetchingSuccess, fetchingError } =
//   contactsSlice.actions;
