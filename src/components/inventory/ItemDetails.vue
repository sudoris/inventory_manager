<template>
  <div>
    <!-- <div class="row">
      <q-space />
      <q-btn 
        :icon="edit ? 'edit' : 'save'" 
        outline 
        color="accent" 
        :label="edit ? 'Edit' : 'Save'"
        @click="edit = !edit"
      />
      <q-btn class="q-ml-xs" flat color="red" icon="delete" />
    </div>
    <div class="q-mt-md q-mb-lg text-h6">Item #{{currentItem.productIdentifier.id}}</div> -->
    <q-form> 
      <div class="row">
        <div class="text-h6">Item #{{currentItem.productIdentifier.id}}</div>
        <q-space />
        <q-btn           
          :icon="edit ? 'save' : 'edit'" 
          outline 
          color="accent" 
          :label="edit ? 'Save' : 'Edit'"
          @click="handleClick"          
        />
        <q-btn        
          v-if="edit"   
          class="q-ml-sm"
          icon="clear" 
          outline 
          color="accent" 
          label="Reset"
          @click="initForm"          
        />
        <q-btn class="q-ml-xs" flat color="red" icon="delete" />
      </div>
      
      <q-input
        outlined              
        v-model="changes.name"               
        label="Name"    
        :readonly="!edit"      
        class="q-mt-md"    
      />      

      <div class="wrapped-container">      
        <q-select :readonly="!edit" class="wrapped-item" outlined color="purple-12" v-model="changes.category" :options="categories" label="Category" />
        <!-- <q-select class="filter-item" clearable filled color="purple-12" v-model="location" :options="locations" label="Location" />   -->
        <q-select :readonly="!edit" class="wrapped-item" outlined color="purple-12" v-model="changes.origin" :options="countries" label="Origin" />  
        <!-- <q-select class="filter-item" clearable filled color="purple-12" label="" />                  -->
        <q-input
          class="wrapped-item"
          v-model.number="changes.quantity"
          type="number"
          label="Stock"
          :readonly="!edit"
          outlined
        />

        <q-input
          outlined              
          v-model="changes.unit"               
          label="Unit"    
          :readonly="!edit"
          class="wrapped-item"      
        />  
      </div>         

      <div class="q-mt-lg">
        <q-input
          v-model="changes.description"
          outlined
          :readonly="!edit"
          type="textarea"
          label="Description"
        />
      </div>

      <div class="q-mt-lg shadow-4 q-pa-xs rounded-borders">
        <q-img
          class="item-img"
          src="../../assets/placeholder-image.png"             
        >
          <div class="bg-secondary absolute-top-left text-body2 text-center">
            Image
          </div>        
        </q-img>
      </div>


      <!-- <div v-if="edit">
        <q-btn label="Save" type="submit" color="primary"/>
      </div> -->
    </q-form>
    <!-- <p>Name: {{currentItem.name}}</p>          -->
    <!-- <p>Categories: {{currentItem.categories.join(', ')}}</p>  -->
    <!-- <p>Category: {{currentItem.categories[0]}}</p>                  
    <p>Quantity: {{currentItem.totalQuantity}}</p> 
    <p>Unit: {{currentItem.unit}}</p>  -->
  </div>
</template>

<script>
export default {
  name: 'ItemDetails',

  props: {
    currentItem: {
      type: Object,
      default() {
        return null
      }
    },
    // edit: {
    //   type: Boolean,
    //   default() {
    //     return false
    //   }
    // }
  },

  data() {
    return {
      changes: null,
      edit: false,
      categories: ['Raw Material', 'Components', 'WIP', 'Finished Goods', 'Packing Materials'],
      countries: [
        'USA', 'Canada', 'Mexico', 'Japan', 'Taiwan', 'Germany'
      ]      
    }
  },
  
  created() {

  },

  watch: {
    currentItem: {
      immediate: true,
      handler() {
        this.initForm()
      } 
    }    
  },

  methods: {
    updateItem() {
      console.log('updating item!')
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'save',
        message: `Item updated`
      })  
      this.$store.commit('inventory/resetSearchResults')

    },
    handleClick() {
      if (this.edit) {
        this.updateItem()
      }
      this.edit = !this.edit      
    },
    initForm() {
      this.changes = {
        name: this.currentItem.name,
        category: this.currentItem.categories[0],
        origin: this.currentItem.origin,
        unit: this.currentItem.unit,
        description: '',
        image: '',
        quantity: this.currentItem.totalQuantity
      }
      this.edit = false
    }
  },

  computed: {

  }
}
</script>

<style scoped>
.item-no {
  margin-top: 12px;
  color: red;
}

.wrapped-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.wrapped-item {
  width: 49%;
  margin-top: 24px;
}

.item-img {
  height: 250px;
  /* border: solid 2px rgba(0,0,0,0.24);
  border-radius: 4px; */
}

.img-label {
  background-color: rgba(0,0,0,0.24);
}
</style>