<template>
<b-container fluid>
    <b-row style="margin-top: 25px; ">
        <b-col>
            <teacher-list :listItems="teachers"></teacher-list>
        </b-col>
    </b-row>
</b-container>
</template>
<script>
import TeacherList from "@/components/comp/misc/TeacherList.vue";
export default {
    name: 'TeacherTab',
    components:{
      TeacherList,
    },
    data: function(){
        return{
            teachers:[
                {image: 'ava1.png', name:'Mirnalini', contact:'8975442356'},
                {image: 'ava2.png', name:'Roselyn', contact:'rose123@gmail.com'},
                {image: 'ava3.png', name:'Surya', contact:'surya30@example.com'},
                {image: 'ava1.png', name:'Mirnalini', contact:'8975442356'},
                {image: 'ava2.png', name:'Roselyn', contact:'rose123@gmail.com'},
                {image: 'ava3.png', name:'Surya', contact:'surya30@example.com'},
                {image: 'ava1.png', name:'Mirnalini', contact:'8975442356'},
                {image: 'ava2.png', name:'Roselyn', contact:'rose123@gmail.com'},
                {image: 'ava3.png', name:'Surya', contact:'surya30@example.com'},
            ],
        }
    }
};
</script>
