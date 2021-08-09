export function setSearchResults (state, searchResults) {  
  state.searchResults = searchResults
}

export function setCurrentItem (state, currentItem) { 
  state.currentItem = currentItem
}

export function resetSearchResults (state) { 
  state.searchResults = null
}
