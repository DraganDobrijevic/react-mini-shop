import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

// --------------------------------------
// const selectCart = (state) => state.cart;
// --------------------------------------

export const selectCurrentUser = createSelector(
  // --------------------------------------
  //   [selectUser, selectCart],
  //   (user, cart) => user.currentUser

  // or
  //   selectUser,
  //   selectCart,
  //   (user, cart) => user.currentUser
  // --------------------------------------
  [selectUser],
  (user) => user.currentUser
);
