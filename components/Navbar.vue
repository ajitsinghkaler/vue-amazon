<template>
  <div>
    <header class="nav-opt-sprite nav-locate-us nav-lang-en nav-ssl nav-unrec">
      <div class="container-fluid desktop-nav">
        <div class="row">
          <div class="col-sm-2">
            <div class="logo-area">
              <nuxt-link to="/">
                <img src="/img/logo.png" alt="logo" class="img-fluid" />
              </nuxt-link>
            </div>
          </div>
          <div class="col-sm-6 pt-0">
            <Search />
          </div>
        </div>
        <div class="row">
          <div class="col-sm-2 pl2">
            <div class="nav-global-location">
              <nuxt-link to="/address" class="nav-a nav-a-2">
                <div class="nav-sprite" id="nav-packard-glow-loc-icon"></div>
                <div id="glow-ingress-block">
                  <span class="nav-line-1" id="glow-ingress-line1"
                    >Deliver to</span
                  >
                  <span class="nav-line-2" id="glow-ingress-line2">{{getUserAddress.city}}</span>
                </div>
              </nuxt-link>
            </div>
          </div>

          <div class="col-sm-8 p-0">

          </div>

          <div class="col-sm-2 p-0">
            <div class="nav-tools">
              <nuxt-link to="/cart" class="nav-a nav-a-2" id="nav-cart">
                <span aria-hidden="true" class="nav-line-1"></span>
                <span aria-hidden="true" class="nav-line-2"> Cart</span>
                <span class="nav-cart-icon nav-sprite"></span>
                <span
                  id="nav-cart-count"
                  aria-hidden="true"
                  class="nav-cart-count nav-cart-0"
                  >{{ getCartLength }}</span
                >
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters,mapActions } from "vuex";
import Search from "~/components/Search";
export default {
  components: {
    Search,
  },
  computed: {
    ...mapGetters(["getCartLength","getUserAddress"]),
  },
  data(){
    return {
      address:{}
    }
  },
  methods:{
    ...mapActions(["addUserAddress"])
  },
  async mounted(){
    try {
      const response = await this.$axios.$get("/userAddress");
      console.log(response);
      this.addUserAddress(response);
    } catch (error) {
      console.log(error)
    }
  }
};
</script>

<style>
</style>
