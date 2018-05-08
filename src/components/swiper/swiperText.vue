<template>
    <div>
        <swiper class="swiper"
            :options="swiperOption">
            <swiper-slide class="text">
                <div class="centent">
                    5月7日至8日，中共中央总书记、国家主席习近平同朝鲜劳动党委员长、国务委员会委员长金正恩在大连举行会晤。新华社记者 鞠鹏 摄 新华社大连5月8日电（记者 李忠发）5月7日至8日，中共中央总书记、国家主席习近平同朝鲜劳动党委员长、国务委员会委员长金正恩在大连举行会晤。 中共中央政治局常委、中央书记处书记王沪宁参加有关活动。 5月的大连，青山萦翠，碧海流云。习近平同金正恩举行会谈，并为金正恩举行欢迎晚宴，一同散步、出席午宴，在亲切友好的气氛中，两党两国最高领导人就中朝关系及共同关心的重大问题全面深入交换意见。 习近平指出，委员长同志在当前朝鲜半岛局势深刻复杂演变的关键时刻，时隔40多天再次专程来华同我举行会晤，体现了委员长同志和朝党中央对中朝两党两国关系的高度重视，对两党两国战略沟通的高度重视，我予以高度评价。我同委员长同志首次会晤以来，中朝关系和朝鲜半岛形势均取得积极进展，我对此感到高兴，愿同委员长同志再次举行会晤，共同为推动中朝关系健康稳定发展、实现朝鲜半岛长治久安、促进地区和平稳定繁荣作出努力。 金正恩表示，今年3月以来，朝中友谊和朝鲜半岛形势都取得了富有意义的进展，这是我同总书记同志历史性会晤的积极成果。在当前地区形势快速发展的关键时期，我再次来到中国同总书记见面并通报情况，希望同中方加强战略沟通和合作，推动朝中友谊深入发展，促进地区和平稳定。
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
    data() {
        return {
            swiperOption: {
                direction: "vertical",
                slidesPerView: "auto",
                freeMode: true,
                mousewheel: true
            }
        };
    },
    components: {
        swiper,
        swiperSlide
    }
};
</script>

<style scoped>
.swiper {
    height: 300px;
    overflow: hidden;
}
.text {
    font-size: 18px !important;
    text-align: left;
    padding: 30px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
</style>