<template>
  <span>
    Name
  </span>
  <el-input v-model="task.name">
  </el-input>
  <span>
    Description
  </span>
  <el-input v-model="task.description">
  </el-input>
  <span>
    UserId
  </span>
  <el-select v-model="task.userId" placeholder="Select User">
    <el-option
        v-for="item in usersList"
        :key="item.id"
        :label="item.username"
        :value="item.id">
    </el-option>
  </el-select>
  <el-button size="mini" type="danger" @click="handleSave">
    Save
  </el-button>
</template>


<script>
import { useRouter, useRoute } from 'vue-router'
import {onMounted, ref} from "vue"
import Axios from "axios"

export default {
  name: 'TaskNew',
  setup() {

    const router = useRouter();
    const route = useRoute();
    const usersList = ref(null);
    onMounted(async()=>{
      await loadUsersList();
    })
    const loadUsersList = async () => {
      const response = await Axios.get('users');
      usersList.value = response.data;
    }
    const createTask = async () => {
      const response = await Axios.post('tasks', task.value);
      return response.data;
    }
    const handleSave = async () => {
      const id = await createTask();
      await router.push({name: 'Task', params: {id: id}})
    }
    let task = ref({
      'name': '',
      'description': '',
      'userId': null
    });
    return {
      task,
      createTask,
      usersList,
      handleSave,
    };
  },
}
</script>