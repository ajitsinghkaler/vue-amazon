<template>
  <main>
    <div class="registerAddress mt-3">
      <div class="container-fluid c-section">
        <div class="row">
          <div class="col-sm-3"></div>
          <div class="col-sm-6">
            <div class="a-section a-spacing-medium">
              <div class="a-subheader a-breadcrumb a-spacing-small">
                <ul>
                  <li>
                    <a href="#">
                      <span>Your Account</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li>
                    <a href="#">
                      <span>Your Adresses</span>
                    </a>
                  </li>
                  <li class="a-breadcrumb-divider">›</li>
                  <li class="active">
                    <a href="#">
                      <span>Update Address</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="a-section">
              <h2>Update address</h2>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b>
                  Or pick up your packages at your convenience from our
                  self-service locations. To add an Amazon Pickup Point or
                  Locker, click
                  <a href="#">here</a>.
                </b>
              </div>
              <div class="a-section a-spacing-none a-spacing-top-small">
                <b></b>
              </div>
              <form>
                <div class="a-spacing-medium a-spacing-top-medium">
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Country/Region</label>
                    <select class="a-select-option" v-model="country">
                      <option
                        :key="country.alpha3Code"
                        v-for="country in countries"
                        :value="country.name"
                      >
                        {{ country.name }}
                      </option>
                    </select>
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Full Name</label>
                    <input
                      v-model="fullName"
                      type="text"
                      :placeholder="address.fullName"
                      class="a-input-text"
                      style="width: 100%"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Street Address</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="streetAddress1"
                      :placeholder="address.streetAddress1"
                    />
                    <input
                      type="text"
                      class="a-input-text a-spacing-top-small"
                      style="width: 100%"
                      v-model="streetAddress2"
                      :placeholder="address.streetAddress2"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">City</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="city"
                      :placeholder="address.city"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >State / Province / Region</label
                    >
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="state"
                      :placeholder="address.state"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Zip Code</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="zipCode"
                      :placeholder="address.zipCode"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Phone Number</label>
                    <input
                      type="text"
                      class="a-input-text"
                      style="width: 100%"
                      v-model="phoneNumber"
                      :placeholder="address.phoneNumber"
                    />
                    <div class="a-section a-spacing-none a-spacing-top-micro">
                      <span class="a-size-mini"
                        >May be used to assist delivery</span
                      >
                    </div>
                  </div>
                  <div class="a-spacing-base a-spacing-top-medium">
                    <h3>Add delivery instructions</h3>
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >Do we need additional instructions to find this
                      address?</label
                    >
                    <textarea
                      v-model="deliveryInstructions"
                      :placeholder="address.deliveryInstructions"
                      style="height: 6em; width: 100%"
                    ></textarea>
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px"
                      >Do we need a security code or a call box number to access
                      this building?</label
                    >
                    <input
                      type="text"
                      v-model="securityCode"
                      class="a-input-text"
                      style="width: 100%"
                      :placeholder="address.securityCode"
                    />
                  </div>
                  <div class="a-spacing-top-medium">
                    <label style="margin-bottom: 0px">Weekend delivery</label>
                    <a href="#">
                      <i class="fas fa-angle-down"></i> Which days can you
                      receive packages?
                    </a>
                  </div>
                  <div class="a-spacing-top-medium"></div>
                  <hr />
                  <div class="a-spacing-top-medium">
                    <span>
                      <b>Make sure your address is correct</b>
                    </span>
                  </div>
                  <div>
                    <span
                      >If the address contains typos or other errors, your
                      package may be undeliverable.</span
                    >
                  </div>

                  <div class="a-spacing-top-large">
                    <span class="a-button-register">
                      <span class="a-button-inner">
                        <span @click="onUpdateAddress" class="a-button-text"
                          >Update address</span
                        >
                      </span>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="col-sm-3"></div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.$get("https://restcountries.eu/rest/v2/all");
      const singleAddress = await $axios.$get(`/addresses/${params.id}`);
      // console.log(response, singleAddress);
      const [countriesResponse, addressResponse] = await Promise.all([
        response,
        singleAddress,
      ]);
      // console.log(countriesResponse, addressResponse);
      return {
        countries: response,
        address: singleAddress,
      };
    } catch (error) {
      console.log(error);
    }
  },
  data() {
    return {
      country: "India",
      fullName: "",
      streetAddress1: "",
      streetAddress2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: "",
      deliveryInstructions: "",
      securityCode: "",
    };
  },
  methods: {
    async onUpdateAddress() {
      try {
        const data = {
          country: this.country || this.address.country,
          fullName: this.fullName || this.address.fullName,
          streetAddress1: this.streetAddress1||this.address.streetAddress1,
          streetAddress2: this.streetAddress2||this.address.streetAddress2,
          city: this.city||this.address.city,
          state: this.state||this.address.state,
          zipCode: this.zipCode||this.address.zipCode,
          phoneNumber: this.phoneNumber||this.address.phoneNumber,
          deliveryInstructions: this.deliveryInstructions||this.address.deliveryInstructions,
          securityCode: this.securityCode||this.address.securityCode,
        };
        const response = await this.$axios.$put(`addresses/${this.address.id}`, data);
        console.log(response);
        if (response) {
          this.$router.push("/address");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
