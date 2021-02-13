<template>
    <div :ref="containerId">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'LazyLoad',
    props: {
        containerId: {
            type: String,
            default: 'lazyLoadContainer'
        }
    },
    data () {
        return {
            hasLoaded: false            
        };
    },
    mounted () {
        document.addEventListener('touchmove', this.watchNeedLoad());
    },
    methods: {
        debounce (fn, delay) {
            var timer;
            return function (...arg) {
                var $this = this;
                clearTimeout(timer);
                timer = setTimeout(function () {
                    fn.apply($this, arg);
                }, delay);
            };
        },
        watchNeedLoad () {
            return this.debounce(this.judgeNeedLoad, 1000);
        },
        judgeNeedLoad () {
            if (this.hasLoaded) {
                document.removeEventListener('touchmove', this.watchNeedLoad());
                return;
            }
            // console.log(this.$refs[this.containerId]);
            const currentDom = this.$refs[this.containerId];
            // console.log('document卷上去的高度：', document.documentElement.scrollTop);
            // console.log('currentDom 距离 offsetparent 顶部距离', currentDom.offsetTop);
            // console.log('可视区域大小', document.documentElement.clientHeight);
            // 方法有点瑕疵 offsetTop 是距离最近的offsetparent（body、table、th、td）的内边距距离，
            // if (currentDom.offsetTop - document.documentElement.scrollTop < document.documentElement.clientHeight) {
            //     console.log('start lazy load');
            //     this.hasLoaded = true;
            // }

            if (currentDom.getBoundingClientRect().top < document.documentElement.clientHeight) {
                console.log('start lazy load');
                this.hasLoaded = true;
            }
        }
    },
    destroyed () {
        document.removeEventListener('touchmove', this.watchNeedLoad());
    }
}
</script>
<style lang="less" scoped>

</style>