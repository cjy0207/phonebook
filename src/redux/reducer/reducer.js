let initialState = {
  contactList: [],
  searchKeyword: "",
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "ADD_CONTACT":
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };

    case "SEARCH_BY_USERNAME":
      return {
        ...state,
        searchKeyword: payload.search,
      };

    case "RESET_CONTACT":
      return {
        ...state,
        searchKeyword: "",
      };

      case "DELETE_CONTACT":
      return {
        ...state,
        contactList: state.contactList.filter(
          (contact) => contact.name !== payload
        ),
      };

    default:
      return { ...state };
  }
}

export default reducer;
