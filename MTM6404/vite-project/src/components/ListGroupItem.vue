<template>
<li class="list-group-item">
    <input type="checkbox" class="form-check-input me-2" v-model="completed" @change="$emit('update-item', index, completed)">
        <span>{{text}}</span>
</li>
</template>

<script>
export default {
    name: 'ListGroupItem',
    props: ['index', 'text', 'initialCompleted'],
    data: function () {
        return {
            completed: this.initialCompleted
        }
    }
}
</script>

<style scoped>
input:checked ~ span{
    color: #999;
    text-decoration: line-through;
}
</style>








