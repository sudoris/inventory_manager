<template>
  <q-page>   
    <div class="split">
      <div class="left q-pa-md relative-position">
        <div class="left-header row">
          <q-space />
          <q-btn icon="add_circle_outline" outline color="accent" label="Intake" @click="showIntake = true"/>
        </div>
        <Search v-model="search" class="q-mt-md" />
        <Results :search="search" class="q-mt-md" />
        <!-- <q-pagination
          class="pagination"
          v-model="currentPage"
          :max="5"
          boundary-links
          direction-links
          color="teal"
        />     -->
      </div>
      <div class="right q-pa-md">
        <!-- <div class="left-header row">
          <q-space />
          <q-btn 
            :icon="edit ? 'edit' : 'save'" 
            outline 
            color="accent" 
            :label="edit ? 'Edit' : 'Save'"
            @click="edit = !edit"
          />
          <q-btn class="q-ml-xs" flat color="red" icon="delete" />
        </div> -->
        
        <!-- {{currentItem}} -->
        <div v-if="currentItem">
          <ItemDetails :currentItem="currentItem" :edit="edit" />    
        </div>                  
        <!-- <img class="product-image" src="../assets/screw.jpg" alt="Image of a screw"> -->
      </div>      
    </div>      

    <q-dialog 
      v-model="showIntake"
      transition-show="jump-right"
      transition-hide="jump-left"      
    >
      <AddItem @close-intake="showIntake = false" />      
    </q-dialog>
  </q-page>
</template>

<script>
import Search from '../components/inventory/Search.vue'
import Results from '../components/inventory/Results.vue'
import ItemDetails from '../components/inventory/ItemDetails.vue'
import AddItem from '../components/inventory/AddItem.vue'

import mockData from './mockData.js'

export default {
  name: 'PageInventory',

  components: {
    Search,
    Results,
    ItemDetails,
    AddItem
  },

  data() {
    return {
      showIntake: false,
      search: '',
      data: null,
      edit: false      
    }
  },

  created() {
    this.data = mockData
  },

  computed: {
    currentItem() {      
      return this.$store.state.inventory.currentItem
    }
  },

  methods: {
    
  }
}
</script>

<style scoped>
.split {
  width: 100%;
  height: calc(100vh - 50px);
  display: flex;  
}

.left {
  background-color: white;
  width: 50%;
  border-right: 2px dashed green;
}

.right {
  /* background-color: rgb(246, 246, 246); */
  background-color: white;
  width: 50%;
}

.pagination {
  position: absolute;
  left: 50%;
  bottom: 16px;
  transform: translateX(-50%)
}

.product-image {
  width: 250px;
}
</style>
