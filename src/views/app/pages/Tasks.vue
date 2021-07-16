<template>
  <el-button size="mini" type="danger" @click="handleNew()">
    New Task
  </el-button>
	<el-table
    :data="tasks"
    style="width: 100%">
		<el-table-column
		  fixed
		  prop="id"
		  label="ID"
		  width="150">
		</el-table-column>
		<el-table-column
		  fixed
		  prop="name"
		  label="Name"
		  width="150">
		</el-table-column>
		<el-table-column
		  fixed
		  prop="description"
		  label="Description"
		  width="150">
		</el-table-column>
		<el-table-column
		  fixed
		  prop="user.username"
		  label="Username"
		  width="150">
		</el-table-column>
		<el-table-column
		  label="Operations">
		  <template  #default="scope">
			<el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">
			  Delete
			</el-button>
		  </template>
		</el-table-column>
		<el-table-column
		  label="Operations">
		  <template  #default="scope">
			<el-button size="mini" @click="handleView(scope.row.id)">
			  View
			</el-button>
		  </template>
		</el-table-column>
	</el-table>
</template>

<script>
	import { useRouter } from 'vue-router'
	import { ref, onMounted} from 'vue'
	import Axios from 'axios'
	export default {
	  name: 'App',
	  setup(){
	    const handleDelete = async(id) => {
		  const response = await Axios.delete('tasks/'+id);
		  console.log(id);
		  loadDate();
		};
	  const router = useRouter();
	  const handleNew = async(id) => {
        await router.push({name: 'TaskNew'})
    };
		const handleView = (id) =>{
		  router.push({name: 'Task',params: {id: id}})
		};
		const loadDate = async()=> {
		  const response = await Axios.get('tasks');
		  tasks.value = response.data;
		}
		const date = ref(null);
		let tasks = ref([]);
		onMounted(async()=>{
		  const response = await Axios.get('tasks');
		  tasks.value = response.data;
		  console.log(tasks);
		})
		return {
		  date,
		  tasks,
		  handleDelete,
		  loadDate,
		  handleView,
      handleNew,
		}
	  
	  }
	}
</script>

