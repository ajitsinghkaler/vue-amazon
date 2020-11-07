<template>
  <div class="mainContent">
    <div class="unified_widget pageBanner">
      <h1>Books</h1>
      <p>
        <b>
          Browse for more Books
        </b>
      </p>
    </div>
    <div class="bx-root">
      <nuxt-link to="products/1">
        <div class="row">
          <div class="col-sm-5 text-center">
            <div class="bx-root-image">
              <img
                src="https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?w=800&quality=85"
                class="img-fluid"
              />
            </div>
          </div>
          <div class="col-sm-7 m-auto">
            <div class="bx-root-dtls">
              <div class="bx-root-heading">The Program</div>
              <div class="bx-root-subtext">
                Inside the mind of the legandary author JK Rowling
              </div>
              <div class="bx-root-link">
                <span>Order Now</span>
              </div>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
a:hover {
  text-decoration: none;
  color: initial;
}
</style>
