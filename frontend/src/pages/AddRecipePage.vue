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
        <AppTextField :defaultMessage="defaultMessageName"/> 
      </div>
      <div class="secondaryContainer">
        <div class="subtitleContainer">
          <div class="subTitle">
            <h1> INGREDIENTS</h1>
          </div>
        </div>
        <AppFoodMultiSelect/> 
      </div>
            <div class="secondaryContainer">
        <div class="subtitleContainer">
          <div class="subTitle">
            <h1> TYPE OF THE RECIPE</h1>
          </div>
        </div>
        <AppTextField :defaultMessage="defaultMessageType" /> 
      </div>
    </div>
  </div>
</template>



<script>
import AppFoodMultiSelect from '@/components/AppFoodMultiSelect.vue';
import AppTextField from '@/components/AppTextField.vue';
import '../assets/styles/appStyles.css';
export default {
    components: { AppFoodMultiSelect, AppTextField },
data() {
  return {
    defaultMessageName:"Introduce a name for your recipe",
    defaultMessageType:"Introduce a type for your recipe"
  };
},
};
</script>

<style scoped>

</style>
