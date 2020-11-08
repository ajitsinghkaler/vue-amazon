<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="mainResults">
            <ul class="s-result-list">
              <li
                class="s-result-item celwidget"
                :key="product.id"
                v-for="product in products"
              >
                <nuxt-link :to="`products/${product.id}`">
                  <div class="s-item-container">
                    <div class="a-spacing-micro">
                      <div class="bestSeller">
                        <a href="#">Best Seller</a>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-3 text-center">
                        <a href="#">
                          <img
                            style="width: 150px"
                            :src="product.photo"
                            alt=""
                            class="img-fluid"
                          />
                        </a>
                      </div>
                      <div class="col-sm-9">
                        <div class="a-row a-spacing-small">
                          <a href="#" class="a-link-normal">
                            <h2 class="a-size-medium">
                              {{ product.title }}
                              <span class="a-letter-space"></span>
                              <span class="a-letter-space"></span>
                            </h2>
                          </a>
                        </div>
                        <div class="a-row a-spacing-small">
                          <span class="a-size-small a-color-secondary">by</span>
                          <span class="a-size-small a-color-secondary"
                            ><a class="a-link-normal a-text-normal" href="#">{{
                              product.author.name
                            }}</a></span
                          >
                        </div>

                        <div class="row">
                          <div class="col-sm-7">
                            <div class="a-row a-spacing-none">
                              <a href="#" class="a-link-normal a-text-normal">
                                <span class="a-color-base sx-zero-spacing">
                                  <span class="sx-price sx-price-large">
                                    <span class="sx-price-currency">$</span>
                                    <span class="sx-price-whole">
                                      {{ product.price }}
                                    </span>
                                    <sup class="sx-price-fractional">00</sup>
                                  </span>
                                </span>
                              </a>
                              <span class="a-letter-space"></span>
                            </div>
                            <div class="a-row a-spacing-none">
                              <span class="a-size-small a-color-secondary"
                                >Free with Audible Trial</span
                              >
                            </div>
                            <hr />
                            <span class="a-size-small a-color-secondary"
                              >Category:
                              <span class="a-letter-space"></span>
                              <a
                                href="#"
                                class="a-size-small a-link-normal a-text-normal"
                                >{{ product.category.type }}</a
                              >
                            </span>
                          </div>
                          <div class="col-sm-5">
                            <div class="a-row a-spacing-mini"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  watchQuery: ["title"],
  async asyncData({ $axios, query }) {
    // debugger
    try {
      console.log(query.title, "tile is here");
      const response = await $axios.$get(`/products?title_like=${query.title}`);
      // debugger
      console.log(response);
      return {
        products: response,
      };
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
