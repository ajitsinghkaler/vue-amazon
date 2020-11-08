<template>
  <body>
    <!--SHIPPING ADDRESS-->
    <div class="container-fluid">
      <div class="shipping-address">
        <div class="a-row">
          <div class="a-size-large a-text-bold a-spacing-mini">
            Review your order
          </div>
          <div class="a-row a-spacing-small a-size-mini"></div>
        </div>
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-md-9 col-sm-12">
            <div class="spc-top a-box a-spacing-small">
              <div class="a-box-inner">
                <div class="row">
                  <div class="col-xl-4 col-lg-6 col-sm-6 col-6">
                    <div class="a-spacing-base">
                      <div class="a-row">
                        <strong>
                          Shipping address
                          <small>
                            <nuxt-link to="address">Change</nuxt-link>
                          </small>
                        </strong>
                      </div>
                      <div class="a-row">
                        <div class="displayAddressDiv">
                          <!-- User's address -->
                          <ul class="displayAddressUL">
                            <li>{{ getUserAddress.fullName }}</li>
                            <li>
                              {{
                                getUserAddress.streetAddress1 +
                                " " +
                                getUserAddress.streetAddress2
                              }}
                            </li>
                            <li>{{ getUserAddress.city }}</li>
                            <li>{{ getUserAddress.country }}</li>
                            <li>
                              Phone:
                              <span dir="ltr">{{ getUserAddress.phoneNumber }}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="spc-orders a-box">
              <div class="a-box-inner">
                <div class="shipping-group">
                  <div class="row">
                    <!-- Cart -->
                    <div class="col-xl-6 col-lg-7 col-sm-6 col-12">
                      <div
                        v-for="product in getCart"
                        :key="product.id"
                        class="a-row a-spacing-base"
                      >
                        <div class="row">
                          <!-- Product's photo -->
                          <div class="col-sm-3 col-3">
                            <img :src="product.photo" style="width: 100px" />
                          </div>
                          <!-- Product's Title -->
                          <div class="col-sm-9 col-9">
                            <div class="a-row">
                              <strong>{{ product.title }}</strong>
                            </div>
                            <!-- Product's owner name -->
                            <div class="a-row a-size-small">
                              by {{ product.author.name }}
                            </div>
                            <div class="a-row">
                              <!-- Product's price -->
                              <span class="a-color-price a-spacing-micro">
                                <strong dir="ltr"
                                  >${{
                                    product.price * product.quantity
                                  }}</strong
                                >
                              </span>
                            </div>

                            <div class="a-row">
                              <!-- Product's quantity -->
                              <strong>Quantity: {{ product.quantity }}</strong>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-lg-4 col-md-3 col-sm-12 pl-0">
            <div class="a-box-group">
              <div class="a-box a-first">
                <div class="a-box-inner">
                  <div class="a-row a-spacing-small a-size-small a-text-center">
                    By placing your order, you agree to Amazon's
                    <a href="#">privacy notice</a>
                    and
                    <a href="#">conditions of use</a>.
                  </div>
                  <div class="a-row">
                    <h3 class="a-spacing-micro a-size-base">Order Summary</h3>
                    <div class="order-summary" style="font-size: 12px">
                      <div class="row">
                        <!-- Cart's total price -->
                        <div class="col-sm-6">Items:</div>
                        <div class="col-sm-6 text-right">
                          USD ${{ getTotalPrice }}
                        </div>
                      </div>

                      <!-- Total Price with Shipping -->

                      <hr />
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="a-color-price a-size-medium a-text-bold">
                            Order total:
                          </div>
                        </div>
                        <div class="col-sm-6 text-right">
                          <!-- Total Price with Shipping -->
                          <div class="a-color-price a-size-medium a-text-bold">
                            USD ${{ getTotalPrice }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!--/SHIPPING ADDRESS-->
  </body>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCart", "getTotalPrice","getUserAddress"]),
  },
};
</script>
