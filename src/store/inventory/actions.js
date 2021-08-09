import { api } from 'boot/axios'
// import 'form-data'


export function deleteItem({}, item) {
  const jwt = localStorage.getItem('inventory-manager-jwt')

  const url = `/api/product?id=${item.productIdentifier.id}${getCategories()}${getTags()}&origin=${formatSpace(item.origin)}`

  function formatSpace(str) {
    return str.replace(' ', '+')
  }

  function getCategories() {
    let str = ''
    for (const category of item.categories) {
      str = str + `&categories=${formatSpace(category)}`
    }
    return str
  }

  function getTags() {
    let str = ''
    for (const tag of item.tags) {
      str = str + `&tags=${formatSpace(tag)}`
    }
    return str
  }

  return api.delete(url, 
    {      
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    }   
  )
}

export function addItem({}, item) {
  const jwt = localStorage.getItem('inventory-manager-jwt')  

  // const form = new FormData();  

  const words = item.name.split(' ')
  const tags = []
  for (let i = 0; i < words.length; i++) {
    tags.push(words[i])
    tags.push(words[i].toLowerCase())
  }

  let id
  if (item.id) {
    id = item.id
  } else {
    id = new Date().getTime()
  }
 
  const payload = {
    productIdentifier: { id: parseInt(id) }, 
    name: item.name,
    categories: [item.category],
    tags: tags,
    origin: item.origin,
    intermediateDestinations: ['N/A'],
    endDestinations: ['N/A'], 
    totalQuantity: item.quantity,
    unit: item.unit,
    localProductFamily: {}        
  }

  return api.post('/api/product', 
    payload,
    {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    }  
  )
}

export async function search({commit}, {tag, category, origin}) { 
  const results = []

  const jwt = localStorage.getItem('inventory-manager-jwt')

  if (tag) {
    const tagRes = await api.get('/api/product/search', {
      headers: {
        'Authorization': `Bearer ${jwt}`
      },
      params: {
        tags: tag
      }
    })

    // console.log(tagRes, 'tag')

    if (tagRes.data && tagRes.data.products) {
      for (const product of tagRes.data.products) {
        if (!product.productIdentifier) continue

        results.push(product)
      }
    }      
  }

  if (category) {
    const tagRes = await api.get('/api/product/search', {
      headers: {
        'Authorization': `Bearer ${jwt}`
      },
      params: {
        categories: category
      }
    })

    // console.log(tagRes, 'category')

    if (tagRes.data && tagRes.data.products) {
      for (const product of tagRes.data.products) {
        const duplicate = results.find(item => item.productIdentifier && item.productIdentifier.id === product.id)
        if (!duplicate) results.push(product)        
      }
    }      
  }

  if (origin) {
    const tagRes = await api.get('/api/product/search', {
      headers: {
        'Authorization': `Bearer ${jwt}`
      },
      params: {
        origin
      }
    })

    // console.log(tagRes, 'origin')

    if (tagRes.data && tagRes.data.products) {
      for (const product of tagRes.data.products) {
        const duplicate = results.find(item => item.productIdentifier && item.productIdentifier.id === product.id)
        if (!duplicate) results.push(product)    
      }
    }      
  }

  const filteredResults = []
  for (const product of results) {
    if ((!tag || product.tags.includes(tag)) &&
        (!category || product.categories.includes(category)) &&
        (!origin || product.origin === origin)
    ) {
      filteredResults.push(product)
    }
  }

  commit('setSearchResults', filteredResults)
}



