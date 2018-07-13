<template>
  <b-container style="padding:0 0 0 0;">
      <b-row style="margin-top: 25px; ">
          <b-col class="text-center">
            <img src="/static/images/avatar.png" alt="" />
          </b-col>
      </b-row>
      <b-row style="margin-top: 25px; ">
          <b-col>
              <div class="input-group mb-3">
              <div class="input-group-prepend" >
                  <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  </span>
              </div>
              <input type="text" class="form-control" placeholder="first and last name" style="border-radius:  0px 50px 50px 0px;">
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <div class="input-group mb-3">
              <div class="input-group-prepend" >
                  <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                  <i class="fa fa-envelope" aria-hidden="true"></i>
                  </span>
              </div>
              <input type="text" class="form-control" placeholder="email" style="border-radius:  0px 50px 50px 0px; ">
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
              <div class="input-group mb-3">
              <div class="input-group-prepend" >
                  <span class="input-group-text" style="border-radius: 50px 0px 0px 50px; width: 40px;">
                  <i class="fa fa-phone-square" aria-hidden="true"></i>
                  </span>
              </div>
              <input type="text" class="form-control" placeholder="mobile number" style="border-radius:  0px 50px 50px 0px;">
              </div>
          </b-col>
      </b-row>
      <b-row>
          <b-col>
          <hr>
          <div class="float-right">
              <button class="btn btn-1 border" @click="showProfileSettingsModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Skip</button>
              <button class="btn btn-1 btn-2 px-2">Update</button>
          </div>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default{
  name:'ProfileTab',
  data:function(){
  return{
  }
  }
};
</script>

<style>
</style>
