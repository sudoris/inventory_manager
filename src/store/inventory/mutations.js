export function setSearchResults (state, searchResults) {  
  state.searchResults = searchResults
}

export function setCurrentItem (state, currentItem) { 
  // console.log(currentItem) 
  state.currentItem = currentItem
}

export function resetSearchResults (state) { 
  // console.log(currentItem) 
  state.searchResults = null
}
