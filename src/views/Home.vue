<template>
  <div class="home">
    <!-- Landing Carousel -->
    <LandingCarousel />
    <!-- Categories -->
    <!-- Store Overview -->
    <StoreOverviewCarousel />
    <StoreOverview />
  </div>
</template>
<script>
// @ is an alias to /src
import LandingCarousel from "@/components/home/LandingCarousel.vue";
import StoreOverview from "@/components/home/StoreOverview.vue";
import StoreOverviewCarousel from "@/components/home/StoreOverviewCarousel.vue";


export default {
  name: "home",
  components: {
    LandingCarousel,
    StoreOverview,
    StoreOverviewCarousel
  }
};
</script>
