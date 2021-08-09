<template>
  <div>    
    <q-form
      @submit="handleSearch">
      <q-input
        v-model="searchInput"
        debounce="500"
        outlined
        filled
        clearable
        label="Enter your search..."
      >    
        <template v-slot:prepend>
          <q-btn type="submit" flat round color="primary" icon="search" @click="handleSearch" />
        </template>
      </q-input>

      <div class="filters">      
        <q-select class="filter-item" clearable filled color="purple-12" v-model="category" :options="categories" label="Category" />
        <!-- <q-select class="filter-item" clearable filled color="purple-12" v-model="location" :options="locations" label="Location" />   -->
        <q-select class="filter-item" clearable filled color="purple-12" v-model="origin" :options="countries" label="Origin" />  
        <!-- <q-select class="filter-item" clearable filled color="purple-12" label="" />                  -->
      </div>   
      <div class="row">
        <q-space></q-space>
        <q-btn type="submit" push color="primary" label="Search" class="submit-btn" />
      </div>

      <!-- <q-btn type="submit" flat round color="primary" icon="search" @click="handleSearch" /> -->
    </q-form>    
   
     
  </div>  
</template>

<script>
export default {
  name: 'Search',
  components: {
    
  },
 
  data() {
    return {
      searchInput: '',
      lorem: '',      
      lorems: ['Lorem', 'Ipsum'],
      restock: false,
      locations: [
        'Springfield', 'Seattle', 'Austin', 'Chicago'
      ],
      categories: ['Raw Material', 'Components', 'WIP', 'Finished Goods', 'Packing Materials'],
      countries: [
        'USA', 'Canada', 'Mexico', 'Japan', 'Taiwan', 'Germany'
      ],
      location: '',
      category: '',
      origin: ''      
    }
  },
  
  methods: {
    handleSearch() {
      this.$store.dispatch('inventory/search', {
        tag: this.searchInput,
        category: this.category,
        origin: this.origin
      })
      .then(res => {
        this.$emit('input', this.searchInput)
      })      
    }
  }
}
</script>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.filter-item {
  width: 49%;
  margin-top: 16px;
}

.submit-btn {
  margin-top: 12px;  
}
</style>
