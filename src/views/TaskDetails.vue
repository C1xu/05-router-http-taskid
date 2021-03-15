<template>
    <div v-if="task" class="task-details">
        <h1>{{task.title}}</h1>
        <p>{{task.time}} on {{task.date}} @ {{task.location}}</p>
        <p>{{task.description}}</p>
    </div>
</template>

<script>
import TasksService from '@/services/TasksService.js'
export default {
  props: ['id'],
  data () {
    return {
      task: null
    }
  },
  created () {
    TasksService.getTask(this.id)
      .then(response => {
        console.log('task: ', response.data)
        this.task = response.data
      })
      .catch(error => {
        console.log('Errors' + error)
      })
  }
}
</script>

<style scoped>
    .task-details{
        border: 1px solid black;
        width: 40%;
        margin: 15px auto;
        padding: 10px;
    }
</style>
