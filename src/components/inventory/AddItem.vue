<template>
  <q-card class="intake-card q-pa-md">
    <q-card-actions align="right">
      <q-btn flat icon="close" color="" v-close-popup />
    </q-card-actions>

    <q-form
      @submit="addItem"
    >        
      <q-input
        outlined    
        type="number"          
        v-model="newItem.id"               
        label="Item ID"  
        hint="ID will be auto-generated if left blank"         
        class="q-mt-lg"    
      />  

      <q-input
        outlined              
        v-model="newItem.name"               
        label="Name"           
        class="q-mt-md" 
        :rules="[ val => val.length > 0 || 'Required' ]"   
      />      

      <div class="wrapped-container q-mt-sm">      
        <q-select 
          class="wrapped-item" 
          outlined 
          color="purple-12" 
          v-model="newItem.category" 
          :options="categories" 
          label="Category"   
          lazy-rules    
          :rules="[ val => val.length > 0 || 'Please select a category' ]"
        />
        <!-- <q-select class="filter-item" clearable filled color="purple-12" v-model="location" :options="locations" label="Location" />   -->
        <q-select 
          class="wrapped-item" 
          outlined color="purple-12" 
          v-model="newItem.origin" 
          :options="countries" 
          label="Origin" 
          :rules="[ val => val.length > 0 || 'Required' ]"
        />  
        <!-- <q-select class="filter-item" clearable filled color="purple-12" label="" />                  -->
        <q-input
          class="wrapped-item q-mt-sm"
          v-model.number="newItem.quantity"
          type="number"
          label="Stock"
          outlined
        />

        <q-input
          outlined              
          v-model="newItem.unit"               
          label="Unit"    
          class="wrapped-item q-mt-sm"      
        />  
      </div>         

      <div class="q-mt-lg">
        <q-input
          v-model="newItem.description"
          outlined
          type="textarea"
          label="Description"
        />
      </div>

      <q-file class="q-mt-lg" color="teal" filled v-model="newItem.image" label="Image">
        <template v-slot:prepend>
          <q-icon name="image" />
        </template>
      </q-file>

      <!-- <div class="q-mt-lg shadow-4 q-pa-xs rounded-borders">
        <q-img
          class="item-img"
          src="../../assets/placeholder-image.png"             
        >
          <div class="bg-secondary absolute-top-left text-body2 text-center">
            Image
          </div>        
        </q-img>
      </div> -->


      <div class="row q-mt-lg">
        <q-space />
        <q-btn label="Add" type="submit" color="primary" />
      </div>
    </q-form>        
  </q-card>
</template>

<script>
export default {
  name: 'AddItem',
  data() {
    return {
      newItem: {
        id: null,
        name: '',
        category: '',
        origin: '',
        unit: '',
        description: '',
        quantity: null,
        image: null
      },
      categories: ['Raw Material', 'Components', 'WIP', 'Finished Goods', 'Packing Materials'],
      countries: [
        'USA', 'Canada', 'Mexico', 'Japan', 'Taiwan', 'Germany'
      ]  
    }
  },
  methods: {
    addItem() {
      this.$store.dispatch('inventory/addItem', this.newItem)
        .then(res => {
          this.$q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'save',
            message: `Item added`
          })  
          this.$emit('close-intake')
        })
        .catch(err => {
          this.$q.notify({
            color: 'negative',
            position: 'top',
            message: 'Failed to add new item',
            icon: 'report_problem'
          })
        }) 
    }
  }
}
</script>

<style scoped>
.wrapped-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.wrapped-item {
  width: 49%;
  /* margin-top: 24px; */
}

/* .intake-card {  
  height: 80%;  
}

@media screen and (min-width: 1280px) {
  .intake-card {
    width: 50%;
  }
} */
</style>