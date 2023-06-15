import Image from "next/image";
export default function CardLoker() {
  return (
    <>
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Loker</h2>
                <p>Silahkan Ajukan Lamaran Sesuai Dengan Persyaratan</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="product-image">
                      <Image
                        src="/dist/img/LogoIndomaret.png"
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <h4>Indomaret</h4>
                      <p className="text-dark text-bold">Persyaratan</p>
                      <span className="category m-2">
                        Rapi <br />
                        jujur <br />
                        disiplin <br />
                        bertanggung jawab <br />
                      </span>
                      <div className="button">
                        <a href="product-details.html" className="btn">
                          <i className="lni lni-cart" /> Ajukan Berkas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="product-image">
                      <Image
                        src="/dist/img/LogoIndomaret.png"
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <h4>Indomaret</h4>
                      <p className="text-dark text-bold">Persyaratan</p>
                      <span className="category m-2">
                        Rapi <br />
                        jujur <br />
                        disiplin <br />
                        bertanggung jawab <br />
                      </span>
                      <div className="button">
                        <a href="product-details.html" className="btn">
                          <i className="lni lni-cart" /> Ajukan Berkas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="product-image">
                      <Image
                        src="/dist/img/LogoIndomaret.png"
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <h4>Indomaret</h4>
                      <p className="text-dark text-bold">Persyaratan</p>
                      <span className="category m-2">
                        Rapi <br />
                        jujur <br />
                        disiplin <br />
                        bertanggung jawab <br />
                      </span>
                      <div className="button">
                        <a href="product-details.html" className="btn">
                          <i className="lni lni-cart" /> Ajukan Berkas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="product-image">
                      <Image
                        src="/dist/img/LogoIndomaret.png"
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <h4>Indomaret</h4>
                      <p className="text-dark text-bold">Persyaratan</p>
                      <span className="category m-2">
                        Rapi <br />
                        jujur <br />
                        disiplin <br />
                        bertanggung jawab <br />
                      </span>
                      <div className="button">
                        <a href="product-details.html" className="btn">
                          <i className="lni lni-cart" /> Ajukan Berkas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
