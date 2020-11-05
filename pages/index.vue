<template>
  <main class="listingPage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-4 col-lg-3 col-xl-2">
          <!-- Sidebar -->
        </div>
        <!-- Main Content -->
        <div class="col-sm-8 col-lg-8 col-xl-10">
          <FeaturedProduct />
          <div class="mainResults">
            <ul class="s-result-list">
              <li
                class="s-result-item celwidget"
                :key="product._id"
                v-for="product in products"
              >
                <div class="s-item-container">
                  <div class="a-spacing-micro">
                    <div class="bestSeller">
                      <a href="#">Best Seller</a>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-sm-3 text-center">
                      <a href="#">
                        <img style="width: 150px;" :src="product.photo" alt="" class="img-fluid" />
                      </a>
                    </div>
                    <div class="col-sm-9">
                      <div class="a-row a-spacing-small">
                        <a href="#" class="a-link-normal">
                          <h2 class="a-size-medium">
                            {{ product.title }}
                            <span class="a-letter-space"></span>
                            <span class="a-letter-space"></span>
                            <span class="a-size-small a-color-secondary"
                              >Nov 3, 2020</span
                            >
                          </h2>
                        </a>
                      </div>
                      <div class="a-row a-spacing-small">
                        <span class="a-size-small a-color-secondary">by</span>
                        <span class="a-size-small a-color-secondary"
                          ><a class="a-link-normal a-text-normal" href="#">{{
                            product.author
                          }}</a></span
                        >
                      </div>
                      <div class="a-row">
                        <span class="a-size-small">Ships to USA</span>
                      </div>
                      <div class="row">
                        <div class="col-sm-7">
                          <div class="a-row a-spacing-none">
                            <a href="#" class="a-link-normal a-text-normal">
                              Hardcover
                            </a>
                          </div>
                          <div class="a-row a-spacing-none">
                            <a href="#" class="a-link-normal a-text-normal">
                              <span class="a-offscreen"
                                >${{ product.discounted_price }}</span
                              >
                              <span class="a-color-base sx-zero-spacing">
                                <span class="sx-price sx-price-large">
                                  <span class="sx-price-currency">$</span>
                                  <span class="sx-price-whole">
                                    {{ product.discounted_price }}
                                  </span>
                                  <sup class="sx-price-fractional">00</sup>
                                </span>
                              </span>
                            </a>
                            <span class="a-letter-space"></span>
                            <span
                              class="a-size-base-plus a-color-secondary a-text-strike"
                              >${{product.price}}.00</span
                            >
                          </div>
                          <div class="a-row a-spacing-none">
                            <span class="a-size-small a-color-secondary"
                              >Free with Audible Trial</span
                            >
                          </div>
                          <hr />
                          <span class="a-size-small a-color-secondary"
                            >Other Formats:
                            <span class="a-letter-space"></span>
                            <a
                              href="#"
                              class="a-size-small a-link-normal a-text-normal"
                              >Audio CD</a
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import FeaturedProduct from "~/components/FeaturedProduct";
export default {
  components: {
    FeaturedProduct,
  },
  async asyncData({ $axios }) {
    try {
      let response = await $axios.$get("/products");
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

<style>
</style>
