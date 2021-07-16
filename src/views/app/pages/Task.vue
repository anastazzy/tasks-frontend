<template>
	<template v-if="task">
		<span>
		  Id
		</span>
		<el-input
		  v-model="task.id"
		  :disabled="true">
		</el-input>
		<span>
		  Name
		</span>
		<el-input
		  v-model="task.name"
		  :disabled="!isEditable">
		</el-input>
		<span>
		  Description
		</span>
		<el-input
		  v-model="task.description"
		  :disabled="!isEditable">
		</el-input>

	</template>
  <el-button size="mini" type="danger" @click="onSaveButtonClick()">
    {{isEditable? "Save":"Edit"}}
  </el-button>
</template>

<script>
    import { useRoute } from 'vue-router'
	import { ref, onMounted} from 'vue'
	import Axios from 'axios'
	export default {
	  name: 'Task',
	  setup(){
		const route = useRoute();
		let task = ref({});
		const loadDate = async(id)=> {
		  const response = await Axios.get('tasks/'+route.params.id);
		  task.value = response.data;
		  console.log(task);
		}
		onMounted(async()=>{
		  await loadDate();
		})
    let isEditable = ref(false);
    const startEdit = () => {
      isEditable.value = true;
    }
    const onSaveButtonClick = async () => {
      if (!isEditable.value) {
        startEdit();
      } else {
          //await update();
        }
    }

		return{
		  loadDate,
      onSaveButtonClick,
		  task,
      isEditable,
		}
	  }
	}
</script>

