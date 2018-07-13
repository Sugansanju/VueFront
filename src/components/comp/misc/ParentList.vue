<template>
    <b-container class="p-0 m-0" style="height: 300px; overflow: auto; overflow-y: scroll; overflow-y: scroll;">
      <b-row >
        <b-col>
          <b-list-group v-for="item in items" v-bind:key="item.name">
               <b-list-group-item  href="#" style="border: none;">
                   <div class="d-flex flex-row justify-content-start">
                             <div class="p-2">
                                 <b-img :src="'/static/images/monsters/'+item.image" width="35px"/>
                             </div>
                             <div class="d-flex flex-column text-left">
                                 <div class="p-0 m-0 control-text"><strong>{{item.name}}</strong></div>
                                 <div class="p-0 m-0 control-text mainfont">{{item.count}}</div>
                             </div>
                             <div class="p-2">
                             </div>
                             <div class="p-3">
                                 <i class="fa fa-caret-right" aria-hidden="true"></i>
                           </div>
                             <div>
                                <parent-selector :parents="parents" :default-parent="defaultParent"></parent-selector>
                             </div>
                           </div>
                       </b-list-group-item>
                   </b-list-group>
                 </b-col>
               </b-row>
           </b-container>
         </template>

     <script>
         import ParentSelector from "@/components/comp/misc/ParentSelector.vue";
         export default{
           name:'ParentList',
           props:['items'],
           components:{
             ParentSelector,
           },
           data:function(){
             return{
               defaultParent:'ava1.png',
               parents:[
                 'ava1.png',
                 'ava2.png',
                 'ava3.png',
               ],
             }
           }
         };
    </script>

    <style>
    .control-text{
        display:inline-block;
        width:100%;
        white-space: nowrap;
        overflow:hidden !important;
        text-overflow: ellipsis;
    }
    /* .parent-list{
    margin-bottom:20px;
    height:350px;
    overflow: auto;
} */
    </style>
