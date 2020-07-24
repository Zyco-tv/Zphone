<template>
  <div class="phone_app">
    <PhoneTitle :title="'9 GAG (' + currentSelectPost + ')'" backgroundColor="#000" @back="quit"/>  
    <div class='phone_content' @click="onClick">
      
    </div>
  </div>
</template>



<style scoped lang="scss">
.post{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  .post-title {
    padding-left: 12px;
    font-size: 18px;
    height: 18px;
    overflow: hidden;
  }

  .post-content{
    display: flex;
    width: 390px;
    height: 670px;
  }

  .post-video, .post-image{
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
  }
}


.loading{
  height: 100%;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    text-align: center;
    margin-bottom: 36px;
  }
}
</style>
