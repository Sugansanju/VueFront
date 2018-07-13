<template>
  <b-container fluid style="padding:0 0 0 0;margin-top:20px;">
    <b-row>
      <b-col>
    <parent-list :items="student"></parent-list>
    </b-col>
  </b-row>
</b-container>
</template>
<script>
import ParentList from "@/components/comp/misc/ParentList.vue";
export default{
  name:'ParentTab',
  components:{
    ParentList,
  },
  data:function(){
    return{
      student:[
                {
                  image: '01.png',
                   name:'Priya Dharshini',
                    count:'3 parents connected',
                  },
                {
                  image: '02.png',
                  name:'Divya Shri',
                  count:'1 parents connected'
                },
                {
                  image: '03.png',
                  name:'Ram Kumar',
                  count:'2 parents connected'
                },
                {
                  image: '04.png',
                  name:'Shri Hari',
                  count:'2 parents connected'
                },
                {
                  image: '05.png',
                  name:'Nithya Kalayani',
                  count:'4 parents connected'
                },
                {
                  image: '06.png',
                  name:'Muhamed Farook',
                  count:'1 parents connected'
                },
      ],
    }
  }
};
</script>

<style>

</style>
