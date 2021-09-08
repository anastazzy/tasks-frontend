<template>
	<span>
    Longitude
  </span>
  <el-input v-model="params.lon">
  </el-input>
  <span>
    Latitude
  </span>
  <el-input v-model="params.lat">
  </el-input>
  <span>Width and height of image in degrees</span>
  <el-slider v-model="params.dim"  :step="0.01" :min="0" :max="1" ></el-slider>
  <span>
    Date
  </span>
  <el-date-picker
      value-format="YYYY-MM-DD"
      v-model="params.date"
      type="date"
      placeholder="Pick a day">
  </el-date-picker>
  <div v-loading = 'loading' >
    <img width="400" height="400" :src="imageSrc" alt="asad"/>
  </div>
</template>

<script>
import {computed, ref} from 'vue';
import axios from "axios";
  export default {
  name: 'AboutMe',
  setup(){
    let loading = false;
    let params = ref({
      lon: 100.75,
      lat: 1.5,
      date: '2014-02-01',
      dim: 0.35,
    });
    const imageSrc = computed(() => {
      loading = true;
       return `api/earth-picture?lon=${params.value.lon}&lat=${params.value.lat}&date=${params.value.date}&dim=${params.value.dim}`;
    });
    return{
      params,
      imageSrc,
      loading,
    }
  }
}
</script>

