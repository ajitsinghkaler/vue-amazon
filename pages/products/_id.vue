<template>
  <main>
    <div class="a-spacing-top-medium"></div>
    <div class="container-fluid">
      <div class="wayfinding-breadcrumps-container">
        <ul class="a-unordered-list a-horizontal a-size-small">
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{product.category.type}}</a>
            </span>
          </li>
          <li>
            <span class="a-list-item">></span>
          </li>
          <li>
            <span class="a-list-item">
              <a class="a-link-normal a-color-tertiary" href="#">{{product.title}}</a>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="container-fluid">
      <div class="dp-contanier">
        <div class="row">
          <div class="col-sm-4 col-md-3">
            <div class="leftCol">
              <div class="imgBlock">
                <div class="eBooksimg">
                  <img
                    class="img-fluid"
                    :src="product.photo"
                    alt=""
                  />
                </div>
              </div>
              <div class="authorFollow">
                <hr class="a-divider-normal" />
                <h1 class="authorFollowHeading">Follow The author</h1>
                <div class="a-spacing-top-small">
                  <div class="row">
                    <div class="col-3">
                      <div class="smallAuthorImageContainer">
                        <a href="#">
                          <img src="/img/ajit.jpg" class="img-fluid" />
                        </a>
                      </div>
                    </div>
                    <div class="col-3 col-xl-4">
                      <div class="authorNameCol">
                        <a href="#">{{product.author.name}}</a>
                      </div>
                    </div>
                    <div class="col-6 col-xl-5">
                      <div class="authorBtn mt-2">
                        <a href="#">
                          <span class="btnFollow">
                            <span class="a-btn-inner">
                              <button class="a-btn-text">+ Follow</button>
                            </span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-8 col-md-6">
            <div class="centerCol">
              <div class="titleDiv">
                <h1 class="productTitle">
                  <span class="largeTitle">{{product.title}}</span>
                  <span class="smallTitle">Paperback</span>
                </h1>
              </div>
              <div class="buylineinfo">
                by
                <a href="#" class="authorName"
                  >{{product.author.name}}
                  <i
                    class="fas fa-chevron-down"
                    style="font-size: 8px !important; color: #555 !important"
                  ></i>
                </a>
                (Author)
              </div>
              <div class="reviewGroup"></div>
              <hr style="margin-top: 10px" />
              <div class="mediaMatrix">
                <div class="formats">
                  <a href="#" class="link-expander">
                    >
                    <span class="tmmShowPrompt"
                      >See All 18 formats and editions</span
                    >
                  </a>
                  <ul>
                    <li class="swatchElement" style="width: 115px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Kindle</span>
                              <br />
                              <span class="a-col-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                Read with Our

                                <span class="a-text-bold">Free App</span>
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <li class="swatchElement" style="width: 115px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>
                                <img
                                  src="/img/audiblelogo.png"
                                  class="img-fluid"
                                  style="width: 20px"
                                />
                                Audible</span
                              >
                              <br />
                              <span class="a-col-secondary">-</span>
                            </a>
                          </span>
                        </span>
                        <span class="tmm-olp-links"></span>
                        <span class="tmm-olp-links">
                          <a href="#" class="a-size-mini">
                            <span class="kcpAppBox">
                              <span class="a-declarative">
                                Read with Our

                                <span class="a-text-bold">Free App</span> with
                                your Audible Trial
                              </span>
                            </span>
                          </a>
                        </span>
                      </span>
                    </li>
                    <li class="swatchElement" style="width: 115px">
                      <span class="a-list-item">
                        <span class="a-button-toggle">
                          <span class="a-button-inner">
                            <a href="#" class="a-button-text">
                              <span>Paperback</span>
                              <br />
                              <span class="a-col-secondary">-</span>
                            </a>
                          </span>
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="bookDescription">
                <div class="bookDescriptionInner">{{product.description}}</div>
              </div>
              <div class="aboutEbooksFeature">
                <hr />
                <div class="row">
                  <div class="col-sm-4 mb-1">
                    <div class="a-declative">
                      Length:
                      <span
                        ><a href="#"
                          >306 Pages <i class="a-icon a-icon-popover"></i></a
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-3">
            <div class="combinedBuyBox">
              <div class="buyBox">
                <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input
                          type="radio"
                          name="radio-group checked"
                          id="test1"
                        />
                        <label for="test1">Buy Now</label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span
                        class="a-size-medium a-color-price offer-price a-text-normal"
                      >
                        ${{product.discounted_price}}
                      </span>
                    </div>
                  </div>
                </div>
                <div class="a-section a-spacing-none">
                  <div class="row">
                    <div class="col-5">
                      <select>
                        <option value="1">QTY: &nbsp; 1</option>
                        <option value="2">QTY: &nbsp; 2</option>
                        <option value="3">QTY: &nbsp; 3</option>
                        <option value="4">QTY: &nbsp; 4</option>
                        <option value="5">QTY: &nbsp; 5</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div class="a-section a-spacing-small a-spacing-top-micro">
                  <div class="row">
                    <span class="a-color-base buyboxShippingLabel"></span>
                  </div>
                </div>
                <div class="a-section a-spacing-small">
                  <div class="a-size-medium a-color-success">In Stock</div>
                </div>
                <div class="a-section a-spacing-mini">
                  Ships from and sold by Amazon.com
                </div>
                <div class="a-section">
                  <div class="a-button-stack">
                    <span
                      class="a-spacing-small a-button-primary a-button-icon"
                    >
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-cart"></i>
                        <input
                          type="submit"
                          name="submit.add-to-cart"
                          class="a-button-input"
                        />
                        <span class="a-button-text">Add to Cart</span>
                      </span>
                    </span>
                  </div>
                  <div class="a-button-stack">
                    <span
                      class="a-spacing-small a-button-primary a-button-icon"
                    >
                      <span class="a-button-inner">
                        <i class="a-icon a-icon-buynow"></i>
                        <input
                          type="submit"
                          name="submit.add-to-cart"
                          class="a-button-input"
                        />
                        <span class="a-button-text">Buy Now</span>
                      </span>
                    </span>
                  </div>
                </div>
                <div class="a-row">
                  <div class="a-section a-spacing-none">
                    <div class="a-section a-spacing-none a-spacing-top-mini">
                      This Item Ships to
                      <b>California</b>
                      <b>Get It by Monday, Nov 23 - Monday, Sept, 30</b>
                      Choose this date at checkout
                    </div>
                  </div>
                </div>
                <hr />
                <div class="a-declaratine">
                  <a href="#" class="a-link-normal">
                    <div class="a-row a-spacing-mini">
                      <i class="fal fa-map-market-alt"></i>
                      <span class="a-size-small">Deliver to Claifornia</span>
                    </div>
                  </a>
                </div>
                <br />
                <hr />
                <!-- <div class="a-section">
                  <div class="clearfix">
                    <div class="float-left">
                      <form>
                        <input type="radio" name="radio-group" id="test2" />
                        <label for="test2"></label>
                      </form>
                    </div>
                    <div class="float-right">
                      <span class="a-color-base offer-price a-text-normal"
                        >${{product.discounted_price}}</span
                      >
                    </div>
                  </div>
                </div> -->
              </div>
            </div>
            <div class="kcpAppBaseBox text-center">
              <img src="/img/readyondevice.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
        <br />
        <hr />
        <div class="books-entitity-teaser">
          <div class="bucket">
            <h2>More About the Author</h2>
            <div class="content">
              <div class="row">
                <div class="col-4 col-md-2">
                  <div class="authorContent">
                    <div class="authorImageSingle">
                      <a href="#">
                        <img src="/img/ajit.jpg" class="img-fluid" alt="" />
                      </a>
                      <div class="author-follow">
                        <button class="followButton">
                          <span class="pr-fb-icon"></span>
                          <span class="pr-fb-text">Follow</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-8 pl-0 col-md-10">
                  <div class="mainContent">
                    <h3>Biography</h3>
                    <div id="authorBin">{{product.author.about}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    try {
      const response = await $axios.get(`/products/${params.id}`);
      console.log(response.data);
      return {
        product: response.data
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
</style>
