<template>
  <ul class="list-group list-group-flush">
    <router-link class="task-link" :to="{name: 'TaskDetails', params:{id: task.id}}">
    <li class="list-group-item"><b>{{task.title}}</b> on the {{task.date}} @ {{task.time}}</li>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: 'Task Card',

  props: {
    task: Object
  }

}
</script>
