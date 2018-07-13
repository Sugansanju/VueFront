<template>
  <div>
    <b-navbar toggleable="md" variant="info" class="bg-light">
      <b-navbar-brand href="#/">
        <b-img src="/static/images/dexter.png" width="45" height="45" alt="Dexter" /> Dexter Dojo
      </b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">   
        <b-navbar-nav class="ml-auto">          
        <b-nav-item>
          <a href="#" class="notification-counter" data-counter="51" >
            <span class="fa fa-bell-o" color="red"></span>
          </a>      
        </b-nav-item>
          <b-nav-item-dropdown right>           
            <template slot="button-content">
              <b-img src="/static/images/img1.png" width="35px" height="35px" />Roselyn
            </template>
            <b-dropdown-item v-b-modal.profileSettingsModal>              
                <i class="fa fa-user" aria-hidden="true"></i> Profile
            </b-dropdown-item>
            <b-dropdown-item v-b-modal.otpModal>
              <i class="fa fa-sign-out" aria-hidden="true"></i> Signout
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>         
    <profile-settings-modal></profile-settings-modal>
    <otp-modal></otp-modal>
  </div>    
</template>
<script>
import ProfileSettingsModal from "@/components/comp/modals/ProfileSettingsModal.vue"
import OtpModal from "@/components/comp/modals/OtpModal.vue"
  export default{
    name: 'MainHeader',
    components:{
        ProfileSettingsModal,
        OtpModal,    
    },
    data: function(){
      return{

      }
    },
  };
</script>
<style scoped>
.notification-counter {
  position: relative;
  font-size:2em;
  color: #333;
  transition: all .2s ease-in-out;
}
.notification-counter[data-counter]:after {
  content: attr(data-counter);
  position: absolute;
  top: -0px;
  left: 50%;
  font-size: .4em;
  font-weight: bold;
  background:var(--main-primary-color);
  color: #fff;
  text-align: center;
  border-radius:50%;
  padding: 3px 5px;
}
.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover{
  color: var(--main-primary-color);
  cursor: pointer;
}
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav .nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light .navbar-nav .show>.nav-link{
  color: var(--main-primary-color);
}
::-webkit-scrollbar {
  display: none;
}

/*::-moz-scrollbars-horizontal {
    display: none; 
}
::-moz-scrollbars-vertical{
    display: none;  
}
html{
  overflow: -moz-scrollbars-none;
}*/
</style>
