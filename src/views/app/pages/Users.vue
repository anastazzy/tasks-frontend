<template>
    <el-button size="mini" type="danger" @click="handleNew()">
      New User
    </el-button>
	<el-table
    :data="users"
    style="width: 100%">
		<el-table-column
		  fixed
		  prop="id"
		  label="ID"
		  width="150">
		</el-table-column>
		<el-table-column
		  fixed
		  prop="username"
		  label="Username"
		  width="150">
		</el-table-column>
		<el-table-column
		  fixed
		  prop="email"
		  label="Email"
		  width="150">
		</el-table-column>
		<el-table-column
		  prop="tasks"
		  label="Tasks">
		  <template #default="scope">
			<template v-for="task in scope.row.tasks" :key="task.id">
			  <el-tag>{{task.name}} - {{task.id}}</el-tag>
			</template>
		  </template>
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
	import { ref, onMounted} from 'vue'
	import Axios from 'axios'
  import {useRouter} from "vue-router";
	export default {
	  name: 'App',
	  setup(){
		const handleDelete = async(id) => {
		  const response = await Axios.delete('users/'+id);
		  console.log(id);
		  await loadDate();
		};
    const router = useRouter();
    const handleView = async(id) => {
      await router.push({name: 'User', params: {id: id}})
		};
    const handleNew = async(id) => {
      await router.push({name: 'UserNew'})
    };
		const loadDate = async()=> {
		  const response = await Axios.get('users');
		  users.value = response.data;
		}
		const data = ref(null);
		let users = ref([]);
		onMounted(async()=>{
		  await loadDate();
		})
		return {
		  date: data,
		  users,
		  handleDelete,
		  loadDate,
		  handleView,
      handleNew,

		}
	  
	  }
	}
</script>

