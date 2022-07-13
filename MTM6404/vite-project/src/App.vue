<!-- Template (html) -->
<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1 class="display-4 py-4">
          Grocery List
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ListGroup>
          <ListGroupItem 
            v-for="(item, index) in items"
            :key="index"
            :index="index"
            :text="item.text"
            :initial-completed="item.completed"
            @update-item="updateItem"
          />
        </ListGroup>
      </div>
    </div>
  </div>
</template>



<!-- Logic (js) -->
<script>
  import ListGroupItem from './components/ListGroupItem.vue'
  import ListGroup from './components/ListGroup.vue'

  export default {
    name: 'App',
    components: { ListGroupItem, ListGroup },
    data: function () {
      return {
        items: [
          { text: 'Milk', completed: false},
          { text: 'Egg', completed: false},
          { text: 'Bees', completed: false},
          { text: 'Rice', completed: false},
          { text: 'Cereal', completed: false},
          { text: 'Bones', completed: false},
          { text: 'Goose', completed: true},
          { text: 'Chicken', completed: false}
        ]
      }
    },
    methods: {
      updateItem: function (index,completed){
        this.items[index].completed = completed
      }
    }
  }
</script>


<!-- Style -->

<style>

</style>