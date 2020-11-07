<template>
  <!--MAIN-->
  <main>
    <!--REGISTER ADDRESS-->
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-1"></div>
          <div class="col-sm-10">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                </ul>
              </div>
              <h1 class="a-spacing-medium a-spacing-top-medium">
                Your Addresses
              </h1>
              <!-- Message from Server -->
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>{{message}}</b>
              </div>
              <div class="a-spacing-double-large">
                <div class="row a-spacing-micro">
                  <div class="col-lg-4 col-md-5 col-sm-12 pb-2">
                    <nuxt-link
                      to="/address/add"
                      class="a-link-normal add-new-address-button"
                      style="text-decoration: none"
                    >
                      <div class="a-box first-desktop-address-tile">
                        <div class="a-box-inner a-padding-extra-large">
                          <i class="far fa-plus"></i>
                          <h2 class="a-color-tertiary">Add Address</h2>
                        </div>
                      </div>
                    </nuxt-link>
                  </div>
                  <div
                    v-for="(address,index) in addresses"
                    :key="address.id"
                    class="col-lg-4 col-md-4 col-sm-12 pl-md-0 pb-2"
                  >
                    <div
                      class="a-box a-spacing-none normal-desktop-address-tile"
                    >
                      <div class="a-box-inner a-padding-none">
                        <div class="address-section-no-default">
                          <div class="a-spacing-small">
                            <ul class="a-unordered-list a-nostyle a-vertical">
                              <li>
                                <h5>
                                  <b>{{ address.fullName }}</b>
                                </h5>
                              </li>
                              <li>
                                {{
                                  address.streetAddress1 +
                                  "," +
                                  address.streetAddress2
                                }}
                              </li>
                              <li>
                                {{ address.city }}, {{ address.state }}
                                {{ address.zipCode }}
                              </li>
                              <li>{{ address.country }}</li>
                              <li>Phone number: {{ address.phoneNumber }}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- Delete Button -->
                      <div class="edit-address-desktop-link">
                        <nuxt-link :to="`address/${address.id}`">Edit</nuxt-link>
                        &nbsp; | &nbsp;
                        <a @click="onDeleteAddress(address.id,index)" href="#">Delete</a>
                        &nbsp; | &nbsp;
                        <!-- Set Address as Default -->
                        <a @click="setDefault(address)" href="#">Set as Delivery Address</a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-3 col-sm-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/REGISTER ADDRESS-->
  </main>
  <!--/MAIN-->
</template>

<script>
import { mapActions } from "vuex";

export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get("addresses");
      console.log(response);
      return {
        addresses: response,
      };
    } catch (error) {
      console.log(error);
    }
  },

  data() {
    return {
      message: "",
    };
  },

  methods: {
    ...mapActions(["addUserAddress"]),
    async onDeleteAddress(id, index) {
      try {
        const response = await this.$axios.$delete(`addresses/${id}`);
        if (response) {
          this.message = "Address successfully deleated";
          this.addresses.splice(index, 1);
        }
      } catch (error) {
        this.message = "Error wile deleting  address";
        console.log(error);
      }
    },
    async setDefault(data) {
      try {
        const response = await this.$axios.$post(`userAddress`, data);
        if (response) {
          this.addUserAddress(data)
          this.message = "Address successfully set as default";
        }
      } catch (error) {
        this.message = "Error while setting default address";
        console.log(error);
      }
    },
  },
};
</script>
