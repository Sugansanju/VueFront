<template>
<b-container>
    <b-modal id="staffModal" title="Add Staff" hide-footer no-close-on-backdrop no-close-on-esc centered v-model="showstaffModal">
        <div class="d-flex flex-row justify-content-end">
            <button class="btn button-1 btn-2" @click="isImport=!isImport" v-if="!isImport">
      <i class="fa fa-chevron-circle-down" aria-hidden="true" style="font-size:25px;cursor:pointer"></i>
    </button>
        </div>
        <b-container fluid style="margin-top:20px;margin-bottom:12px;" v-show="isImport">
            <div>
                <b-row>
                    <b-col>
                        <div class="input-group mb-3 col-10 offset-md-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;">
                            <i class="fa fa-user" aria-hidden="true"></i>
                          </span>
                            </div>
                            <input type="text" id="ex2" class="form-control " placeholder="first/last name" v-model="userData.name" style="border-radius:  0px 50px 50px 0px;" required>
                        </div>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <div class="input-group mb-3  col-10 offset-md-1">
                            <div class="input-group-prepend">
                                <span class="input-group-text" style="border-radius: 50px 0px 0px 50px;"><i class="fa fa-unlock" aria-hidden="true"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="email/mobile number" v-model="userData.contact" style="border-radius:  0px 50px 50px 0px;">
                        </div>
                        <div class="col-8 offset-md-4">
                            <button class="btn btn-1 border" @click="isImport=!isImport" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Bulk import</button>
                            <button class="btn btn-1 btn-2 px-2" @click.prevent="submitted">Add</button>
                        </div>
                    </b-col>
                </b-row>
            </div>
        </b-container>
        <b-container class="p-0 m-0" style="height: 300px; overflow: hidden; overflow-y: scroll; overflow-y: scroll;">
            <staff-list></staff-list>
            <div v-for=" (item,index) in staffList" v-bind:key="item.name">
                <b-list-group>
                    <b-list-group-item href="#" style="border:none">
                        <div>
                            <a class="close" data-dismiss="alert" href="#" @click="deleteList(index)">
                               <i aria-hidden="true" class="fa fa-times" style="font-size:15px;"></i>
                             </a>
                            <div class="d-flex flex-row justify-content-start">
                                <div class="p-2">
                                    <b-img :src="'/static/images/monsters/'+item.image" width="35px" />
                                </div>
                                <div class="d-flex flex-column text-left">
                                    <div class="p-0 m-0 control-text"><strong>{{item.name}}</strong></div>
                                    <div class="p-0 m-0 control-text mainfont">{{item.contact}}</div>
                                </div>

                            </div>
                        </div>

                    </b-list-group-item>
                </b-list-group>
            </div>
        </b-container>
        <div class="d-flex justify-content-end" style="margin-top:12px;">
            <div class="col-6 col-md-6">
                <a class="primary link" href="#">
                    Bulk import how to?
                  </a>
            </div>
            <button class="btn btn-1 border" @click="showstaffModal=false" style="color:var(--main-primary-color);border:2px solid black;margin-right:15px;">Cancel</button>
            <button class="btn btn-1 btn-2 px-2">Save</button>
        </div>
    </b-modal>
</b-container>
</template>

<script>
export default {
  name: "StaffModal",
  data: function() {
    return {
      showstaffModal: false,
      isImport: false,
      isSubmitted: false,
      staffList: [],
      userData: {
        name: "",
        contact: ""
      }
    };
  },
  methods: {
    submitted() {
      let data = {
        name: this.userData.name,
        contact: this.userData.contact,
        image: "03.png"
      };
      this.staffList.push(data);
      this.userData.name = "";
      this.userData.contact = "";
    },
    deleteList: function(index) {
      this.staffList.splice(index, 1);
    }
  }
};
</script>

<style>
a {
  color: #68b8b6;
}

a:hover {
  color: #b8bbbb;
}

.input-box {
  border-radius: 20px;
}

input::placeholder {
  text-align: center;
}

input {
  text-align: center;
}

.button-1 {
  border-radius: 45px;
  width: 55px;
  padding: 3px;
  background-color: #fff;
}

.btn-2 {
  background-color: var(--main-primary-color);
  color: #fff;
}

.modal-backdrop {
  background-color: var(--main-primary-color);
}

.modal-content {
  border-radius: 25px;
}

.staff-list {
  background-color: #f5f5f5;
  border: none;
  width: 100%;
  height: 250px;
  padding: 0 0 0 0px;
  overflow: auto;
}
</style>
