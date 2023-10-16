<template>
  <div>
    <div class="mainContainer">
      <div class="secondaryContainer">
        <div class="titleContainer">
          <div class="mainTitle">
            <h1> ADD A NEW RECIPE</h1>
          </div>
        </div>
      </div>
      <div class="secondaryContainer">
        <div class="subtitleContainer">
          <div class="subTitle">
            <h1> NAME OF THE RECIPE</h1>
          </div>
        </div>
        <AppTextField/> 
      </div>
      <div class="secondaryContainer">
        <div class="subtitleContainer">
          <div class="subTitle">
            <h1> INGREDIENTS</h1>
          </div>
        </div>
        <AppFoodMultiSelect/> 
      </div>
    </div>
  </div>
</template>



<script>
import AppFoodMultiSelect from '@/components/AppFoodMultiSelect.vue';
import AppTextField from '@/components/AppTextField.vue';
import '../assets/styles/appStyles.css';
export default {
    components: { AppFoodMultiSelect, AppTextField }
};
</script>

<style scoped>

</style>
