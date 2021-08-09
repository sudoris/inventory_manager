import { api } from 'boot/axios'

export async function addItem({}, item) {
  const jwt = localStorage.getItem('inventory-manager-jwt')

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
    productIdentifier: { id }, 
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
  console.log(payload)

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
  // console.log(tag)

  if (tag) {
    const tagRes = await api.get('/api/product/search', {
      headers: {
        'Authorization': `Bearer ${jwt}`
      },
      params: {
        tags: tag
      }
    })

    // console.log(tagRes)

    if (tagRes.data && tagRes.data.products) {
      for (const product of tagRes.data.products) {
        results.push(product)
      }
    }      
  }

  if (category) {
    // console.log('category', category)
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
        const duplicate = results.find(item => item.productIdentifier.id === product.id)
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
        const duplicate = results.find(item => item.productIdentifier.id === product.id)
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
  // console.log(results)

  commit('setSearchResults', filteredResults)
}

//   return api.post('/createUser', 
//     {
//       accountName: 'test'
//     },
//     {
//       auth: {
//         username,
//         password
//     }  
//   })
//     .then(res => {
//       return res
//     })
//     .catch(err => {
//       return(err)
//     })
// }

