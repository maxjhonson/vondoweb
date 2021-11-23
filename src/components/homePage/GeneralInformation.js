import React from "react";

function GeneralInformation(props) {
  return (
    <section className="py-6">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 px-5 position-relative">
            <p className="advantage-number">1</p>
            <div className="ps-lg-5">
              <h6 className="text-uppercase">Travel</h6>
              <p className="text-muted text-sm mb-5 mb-lg-0">
                One morning, when Gregor Samsa woke from troubled dreams, he
                found himself transformed in his bed into a horrible vermin. He
                lay on his.
              </p>
            </div>
          </div>
          <div className="col-lg-4 px-5 position-relative">
            <p className="advantage-number">2</p>
            <div className="ps-lg-5">
              <h6 className="text-uppercase">Relax</h6>
              <p className="text-muted text-sm mb-5 mb-lg-0">
                The bedding was hardly able to cover it and seemed ready to
                slide off any moment. His many legs, pitifully thin compared
                with the size .
              </p>
            </div>
          </div>
          <div className="col-lg-4 px-5 position-relative">
            <p className="advantage-number">3</p>
            <div className="ps-lg-5">
              <h6 className="text-uppercase">Explore</h6>
              <p className="text-muted text-sm mb-5 mb-lg-0">
                His room, a proper human room although a little too small, lay
                peacefully between its four familiar walls. A collection of
                textile samp.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GeneralInformation;
