<template>
  <div class="">
    <!-- {{results}} -->
    <p>{{showText}}</p>
    <q-list>
      <template v-for="result in paginatedResults">
        <q-item :key="result.productIdentifier.id" class="result-item" :class="{ 'active-item': isActive(result.productIdentifier.id) }" :active="isActive(result.productIdentifier.id)" clickable @click.stop="selectResult(result)">
          <q-item-section>
            <q-item-label>{{result.name}}</q-item-label>
            <!-- <q-item-label caption>Categories: {{result.categories.join(', ')}}</q-item-label> -->
            <q-item-label caption>Category: {{result.categories[0]}}</q-item-label>
            <q-item-label caption>Origin: {{result.origin}}</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <div class="row">
              <span>Stock:</span>
              <q-badge class="q-ml-xs" color="teal" :label="result.totalQuantity" />
            </div>          
          </q-item-section>
        </q-item>

        <q-separator spaced :key="result.productIdentifier.id + 'separator'" />
      </template>          
    </q-list>   
    <q-pagination
        class="pagination"
        v-model="currentPage"
        :max="getMax()"
        boundary-links
        direction-links
        color="teal"
      />     
  </div>  
</template>

<script>
export default {
  name: 'Results',
  props: {   
    search: {
      type: String,
      default() {
        return ''
      }
    }
    // selected: {
    //   type: Number,
    //   default() {
    //     return null
    //   }
    // }
  },
  components: {
    
  },
  data() {
    return {
      currentPage: 1,
      showPerPage: 5,
      selected: null
    }
  },
  methods: {
    isActive(id) {
      if (this.selected === id) return true
    },
    getMax() {
      if (this.results) {
        return Math.ceil(this.results.length / this.showPerPage)
      }

      return 0      
    },
    selectResult(product) {
      this.$store.commit('inventory/setCurrentItem', product)
      this.selected = product.productIdentifier.id
    }
  },
  computed: {
    showText() {
      if (!this.results) return `Showing 0 results for \"${this.search ? this.search : ''}\"`
      else if (this.results) {
        const firstNum = 1 + ((this.currentPage-1)*this.showPerPage)
        let secondNum = 0 + (this.currentPage*this.showPerPage)
        if (secondNum > this.results.length) secondNum = this.results.length
        return `Showing ${firstNum}-${secondNum} of ${this.results.length} results for \"${this.search ? this.search : ''}\"`
      }    
      
      return ''
    },
    results() {
      return this.$store.state.inventory.searchResults
    },
    paginatedResults() {      
      if (this.results) return this.results.slice(0 + ((this.currentPage-1)*this.showPerPage), 0 + (this.currentPage*this.showPerPage))
      else return []
    }
  }
}
</script>

<style scoped>
.pagination {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%);
}

.active-item {
  border: dashed 2px orangered;
}

.result-item {
  /* border-bottom: 1px solid lightslategrey; */
}
</style>
