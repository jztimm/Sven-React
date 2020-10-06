export const initialState = {
   cart: [],
};

function reducer(state, action) {
   switch (action.type) {
      case 'ADD_TO_CART':
         // Logic for Adding items to cart
         break;
      case 'REMOVE_FROM_CART':
         // Logic for Removing items to cart
         break;
      default:
         return state;
   }
}

export default reducer;


