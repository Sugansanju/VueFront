<template>
  <b-container >
  <!-- <div class="dropdown">
      <div class="parent-dropbtn" id="drop">
        <b-img :src="'/static/images/'+item.image"></b-img>
        <b-popover show target="drop" >
             <template slot="title">
               <strong>Roselyn(Mother)</strong>
               <button type="button" class="close" @click="showSubjectModal=false" aria-label="Close" style="margin-left:25px;margin-top:-9px;" float-right>
                   <i class="fa fa-sort-desc" aria-hidden="true"></i>
               </button>
             </template>
                <div class="row">
                   <div class="p-1 m-1 grow">
                     <b-img :src="'/static/images/'+selectedParent"></b-img>
                   </div>
                   <div>
                   <div>
                     <strong>Roselyn</strong>
                   </div>
                   <div>
                     <a class="mainfont" style="font-size:12px;">rose12@gmail.com</a>
                   </div>
                 </div>
             </div>
           </b-popover>
    </div>
    <div class="dropdown-content">
        <b-container>
            <b-row>
                <b-col>
                  <a class="btn" href="#" v-for="parent in parents" v-bind:key="parent" @click="selectedParent=parent">
                  <a class="btn" href="#" v-for="parent in parents" v-bind:key="parent">
                    <b-img :src="'/static/images/'+item.image">
                    </b-img>
                  </a>
                </b-col>

            </b-row>
        </b-container>
    </div>
  </div> -->
  <div class="dropdown">
      <div class="parent-dropbtn">
        <div class="d-flex flex-row justify-content-start">
        <div class="p-1">
            <b-img :src="'/static/images/'+selectedParent"></b-img>
        </div>
        <div class="d-flex flex-column text-left">
            <div class="p-0 m-0 "><strong>Suganya</strong></div>
            <div class="p-0 m-0 mainfont">sugan@gmail.com</div>
        </div>
        <i class="fa fa-caret-down" style="color: #999;"></i>
      </div>
    </div>
    <div class="dropdown-content">
        <b-container>
            <b-row>
                <b-col>
                  <div class="btn d-flex flex-row justify-content-start" href="#" v-for="parent in parents" v-bind:key="avatar" @click="selectedParent=parent">
                    <div class="p-1">
                    <b-img :src="'/static/images/'+parent">
                    </b-img>
                  </div>
                    <div class="d-flex flex-column text-left">
                        <div class="p-0 m-0 "><strong>Suganya</strong></div>
                        <div class="p-0 m-0 mainfont">sugan@gmail.com</div>
                    </div>
                  </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
  </div>
  </b-container>
</template>

<script>
export default {
    name:'ParentSelector',
    props:['defaultParent','parents'],
    created:function(){
        this.selectedParent=this.defaultParent;
    },
    data: function(){
        return{
            selectedParent:'',
        }
    },
};

</script>

<style>
.parent-dropbtn {
    cursor: pointer;
}
</style>
