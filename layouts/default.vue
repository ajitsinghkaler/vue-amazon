<template>
  <div>
    <Navbar/>
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
body{
  font-size: 13px;
  line-height: 19px;
  color: #111;
}
</style>
<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
