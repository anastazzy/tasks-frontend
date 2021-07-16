<template>
   <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
	  <el-menu-item index="Tasks">Tasks</el-menu-item>
	  <el-menu-item index="Users">Users</el-menu-item>
	  <el-menu-item index="AboutMe">About Me</el-menu-item>
	  <el-menu-item index="Description">Description</el-menu-item>
	</el-menu>
  <router-view/>
</template>

<script>
 import { defineComponent, ref } from 'vue';
 import { useRouter } from 'vue-router'

  export default defineComponent({
    setup() {
      const router = useRouter();
      const handleSelect = (key, keyPath) => {
	    router.push({name: key})
      };
      return {
        handleSelect,
      };
    },
  });
</script>