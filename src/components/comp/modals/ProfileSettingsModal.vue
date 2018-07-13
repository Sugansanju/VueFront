<template>
<b-container>
    <b-modal id="profileSettingsModal"
    title="Profile Setting"
    hide-footer
    no-close-on-backdrop
    no-close-on-esc
    centered
    v-model="showProfileSettingsModal">
       <b-container style="padding:0 0 0 0;">
            <b-row>
                <b-col >
                  <b-tabs vertical nav-wrapper-class="w-2" style="margin-left:-31px;margin-top:-16px;">
   <b-tab title="Profile" active>
  <profile-tab></profile-tab>
   </b-tab>
   <b-tab title="Contact">
    <contact-tab></contact-tab>
   </b-tab>
   <b-tab title="Language & Region">
  <language-tab></language-tab>
   </b-tab>
   <b-tab title="Advanced">
<advanced-tab></advanced-tab>
   </b-tab>
   <b-tab title="Privacy & Terms">
     Tab Contents 5
   </b-tab>
 </b-tabs>
    <!-- <b-tabs>
                    <b-tab title="Profile Settings">
                        <b-container>
                            <b-row style="margin-top: 25px; ">
                                <b-col>
                                    Account Setting
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
                    </b-tab>
                  </b-tabs> -->
                </b-col>
            </b-row>
  </b-container>
</b-modal>
</b-container>
</template>
<script>
import ProfileTab from "@/components/comp/modals/tabs/ProfileTab.vue"
import ContactTab from "@/components/comp/modals/tabs/ContactTab.vue"
import LanguageTab from "@/components/comp/modals/tabs/LanguageTab.vue"
import AdvancedTab from "@/components/comp/modals/tabs/Advancedtab.vue"
    export default {
        name: 'ProfileSettingsModal',
        components:{
          ProfileTab,
          ContactTab,
          LanguageTab,
          AdvancedTab,
        },
        data: function() {
            return {
                showProfileSettingsModal: false,
            }
        }
    };

</script>
<style>
.modal-backdrop {
    background-color: var(--main-primary-color);
}
.modal-content {
    border-radius: 25px;
}
.btn-1 {
    border-radius: 20px;
    width: 95px;
    padding: 3px;
    margin: auto;
    background-color: #fff;
}
.btn-2 {
    background-color: var(--main-primary-color);
    color: #fff;
}
 /* .nav-pills .nav-link.active, {
  color:var(--main-primary-color);
  background-color:var(--main-mainfont-color);
} */
</style>
