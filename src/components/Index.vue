<template>
<div>
  <main-header></main-header>
  <page-footer></page-footer> 
<b-container>
    <b-row>
      <b-col cols="6" class="text-center" style="margin-top: 10%">
        <img src="/static/images/classrom.png">
            <h1> Happier Classrooms</h1>
            <h3>The simple way to build an amazing classroom community</h3>
        </b-col>
      <b-col style="margin-top: 10%">
        <div class="card card-style">
          <div class="card-body text-center">
          <input class="form-control input" type="text"  placeholder="Email/phone">
          <input class="form-control input" type="password"  placeholder="Password">
          <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6 float-right">
              <a href="#" class="btn btn-3">forgot password?</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
            </div>
            <div class="col-md-6 float-right">
              <!-- <a href="#" class="btn btn-2" data-toggle="modal" data-target="#modal">Signup</a> -->
              <b-link class="btn" v-b-modal.loginSignupModal>Signup</b-link>
              <a href="#/home" class="btn btn-1 btn-white">login</a>
            </div>
          </div>
        </div>
      </div>
      </b-col>
    </b-row>
  <!-- <b-modal id="modal1" title="Bootstrap-Vue">
    <p class="my-4">Hello from modal!</p>
  </b-modal> -->
    <login-signup-modal></login-signup-modal>
</b-container>

</div>
</template>

<script>
import MainHeader from "@/components/comp/MainHeader.vue";
import CoverBanner from "@/components/comp/CoverBanner.vue";
// import SubMenu from "@/components/comp/SubMenu.vue";
import PageFooter from "@/components/comp/PageFooter.vue";
import LoginSignupModal from "@/components/comp/modals/LoginSignupModal.vue";


export default {
  name: "Index",
  components: {
    MainHeader,
    CoverBanner,
    // SubMenu,
    PageFooter,
    LoginSignupModal,
  },
  data() {
    return {
        // menuItems:[
        //     {name: 'Stories', link:'#', icon: 'fa fa-newspaper-o', active: ''},
        //     {name: 'Class', link:'#', icon: 'fa fa-users', active: 'active'},
        //     {name: 'Staff', link:'#', icon: 'fa fa-user-o', active: ''},
        //     {name: 'Student', link:'#', icon: 'fa fa-graduation-cap', active: ''},
        //     {name: 'Event', link:'#', icon: 'fa fa-calendar-o', active: ''},
        //     {name: 'Message', link:'#', icon: 'fa fa-commenting-o', active: ''},
        //     {name: 'Settings', link:'#', icon: 'fa fa-cog', active: ''},
        //   ],
    };
  }
};
</script>
<style scoped>
.card-style {
  box-shadow: 1px 1px #888888;
  border-radius: 25px;
}
/*.nav {
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  position: relative;
}
.button {
  fill: #fff;
  background: #fff;
}*/
.input {
  font-size: 15px;
  margin: 15px 0;
  padding: 10px 20px;
  border: none !important;
  border-radius: 25px;
  background-color: #eee;
}
.btn-1 {
  color: #000;
  border-radius: 20px;
  /* box-shadow: 2px 2px #000; */
  box-shadow: 2px 2px 3px 1px #000;
  font-size: 18px;
  margin: auto;
}
.btn-1:hover {
  background: #68b8b6;
  color: #fff;
  box-shadow: 1px 1px 1px 1px #000;
}
a {
  color: #68b8b6;
}
a:hover {
  color: #b8bbbb;
}
.btn-3 {
  color: #b8bbbb;
}
</style>
