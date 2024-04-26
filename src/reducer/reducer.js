const initialState = {
  lang: localStorage.getItem("lang")
}

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_LANG":
      return {
        lang: action.langCode,
      }
    default:
      return state
  }
}
export default likeReducer

