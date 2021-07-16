<template>
  <div v-if="user" :key="user.id">
		<template v-if="user.id">
      <span>
        Id
      </span>
      <el-input
          v-model="user.id"
          :disabled="true">
      </el-input>
    </template>
    <span>
		  Username
		</span>
    <el-input
        v-model="user.username"
        :disabled="!isEditable">
    </el-input>
    <span>
      Email
    </span>
    <el-input
        v-model="user.email"
        :disabled="!isEditable">
    </el-input>

      <el-button size="mini" type="danger" @click="onSaveButtonClick()">
        {{isEditable? "Save":"Edit"}}
      </el-button>

  </div>
</template>

<script>
import {useRoute, useRouter} from 'vue-router'
import {ref, onMounted, computed} from 'vue'
import Axios from 'axios'
export default {
  name: "User",
  setup(){
    const router = useRouter();
    const onSaveButtonClick = async () => {
      if (!isEditable.value) {
        startEdit();
      } else {
        if (user.value.id){
          await update();
        } else {
          const id = await createUser();
          await router.push({path: '/users/'+id});
        }
      }
    }
    const createUser = async () => {
      const response = await Axios.post('users', user.value);
      return response.data;
    }
    const route = useRoute();
    let user = ref({});
    const startEdit = () => {
      isEditable.value = true;
    }
    const update = async()=>{
      const response = await Axios.patch('users/'+user.value.id, user.value);
      isEditable.value = false;
    }
    const loadDate = async()=> {
      const response = await Axios.get('users/'+route.params.id);
      user.value = response.data;
    }
    onMounted(async()=>{
      if (route.name === "User") await loadDate()
        else isEditable.value = true;
    })
    let isEditable = ref(false);
    return{
      loadDate,
      user,
      startEdit,
      isEditable,
      update,
      createUser,
      onSaveButtonClick,
    }
  }
}
</script>

