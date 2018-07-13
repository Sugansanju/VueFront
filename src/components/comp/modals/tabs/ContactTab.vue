<template>
  <b-container style="padding:0 0 0 0;">
  <div class="form-group profile-edit" style="">
            <label class="mainfont" for="email">Email</label>
            <b-form-input type="text" placeholder="sanjana@example.com" class="border" readonly></b-form-input>
            <!-- <input class="form-control input-box px-4 emailbox" type="text" placeholder="sanjana@gmail.com" readonly> -->
          </div>
          <div class="form-group profile-input">
            <label class="mainfont" for="mobno">Mobile Number</label>
            <b-form-input type="text" placeholder="Mobile number" class="border"></b-form-input>
              <!-- <input class="form-control input-box px-4" id="ex2" type="text" placeholder="mobile number"> -->
            </div>
          <div class="float-right">
            <button class="btn btn-1 btn-2 px-2 contact-button">Add</button>
          </div>
  </b-container>
</template>

<script>
export default{
  name:'ContactTab',
  data:function(){
      return{

      }
  }
};
</script>

<style>
.profile-edit{
  margin-top:30px;
}
.border{
  border-radius:50px 50px 50px 50px;
}
</style>
