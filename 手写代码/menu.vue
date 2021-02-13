<template>
    <div>
        <div v-for="item in menuList" :key="item.id">
            {{item.value}}
            <mymenu :menuList="item.childrens"></mymenu>
        </div>
    </div>
</template>

<script>
export default {
    name: 'mymenu',
    data() {
        return {
            list: [1, 2, 3, 4],
            testObj: {
                a: 1
            }
        }
    },
    props: {
       menuList: {
           type: Array,
           default () {
               return [];
           }
       } 
    }
}
</script>