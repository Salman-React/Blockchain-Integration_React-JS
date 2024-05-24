import React from "react";
import eth from "../assets/eth.png";
import dapp from "../assets/dapp.png";
import crypt from "../assets/crypto.png";

const Pricing = () => {
  return (
    <section id="pricing" className="pricing pt-20">
      <br />
      <br />
      <div className="container" data-aos="fade-up">
        <div className="" style={{ textAlign: "center", paddingTop: "80px" }}>
          <h2 className="text-4xl font-bold pb-1">About Blockchain</h2>
          <hr />
          <p className="pt-4 text-lg font-semibold text-white/45">
            Utilizing blockchain technology, our DApp enables secure and
            decentralized transactions. Powered by Infura's infrastructure, it
            connects seamlessly to the Ethereum blockchain. Experience the
            future of trustless transactions with our DApp, revolutionizing
            industries with immutable ledgers and transparent processes.
          </p>
        </div>
        <div className="row gap-3 pt-10">
          <div
            className="w-[500px] flex"
            style={{
              borderRadius: "35px",
              height: "300px",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(158, 12, 194, 0.308)",
              boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
            }}
          >
            <img src={eth} alt="" className="w-40" />
            <div className="" style={{ marginTop: "0px" }}>
              <h3 className="text-2xl font-bold text-white/90">
                About Ethereum
              </h3>
              <hr />
              <p className="text-sm font-semibold text-white/60">
                Ethereum, a decentralized blockchain, facilitates smart
                contracts and decentralized applications, powered by its native
                cryptocurrency, Ether (ETH), transforming digital finance.
              </p>

              <div className="items-center pl-24 pt-2">
                <div>
                  <div className="bg-black w-32 rounded-lg h-8 pt-1">
                    <a
                      style={{ color: "white" }}
                      href="https://www.investopedia.com/terms/e/ethereum.asp"
                      target="_blank"
                      className="buy-btn"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[500px] flex"
            style={{
              borderRadius: "35px",
              height: "300px",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(158, 12, 194, 0.308)",
              boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
            }}
          >
            <img src={dapp} alt="" className="w-40" />
            <div className="" style={{ marginTop: "0px" }}>
              <h3 className="text-2xl font-bold text-white/90">
                Decenteralized
              </h3>
              <hr />
              <p className="text-sm font-semibold text-white/60">
                Decentralized apps (DApps) run on blockchain networks, offering
                transparent, secure, and censorship-resistant functionality
                without reliance on central authorities.
              </p>

              <div className="items-center pl-24 pt-2">
                <div>
                  <div className="bg-black w-32 rounded-lg h-8 pt-1">
                    <a
                      style={{ color: "white" }}
                      href="https://www.investopedia.com/terms/d/decentralized-applications-dapps.asp#:~:text=Decentralized%20applications%20(dApps)%20are%20digital,transparent%2C%20and%20resistant%20to%20censorship."
                      target="_blank"
                      className="buy-btn"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-[500px] flex"
            style={{
              borderRadius: "35px",
              height: "300px",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "rgba(158, 12, 194, 0.308)",
              boxShadow: "rgba(0, 0, 0, 0.5) 5px 10px 15px",
            }}
          >
            <img src={crypt} alt="" className="w-40" />
            <div className="" style={{ marginTop: "0px" }}>
              <h3 className="text-2xl font-bold text-white/90">Crypto</h3>
              <hr />
              <p className="text-sm font-semibold text-white/60">
                Cryptocurrency, digital or virtual currency, uses cryptographic
                technology for secure transactions, operating independently of
                central banks and traditional financial institutions.
              </p>

              <div className="items-center pl-24 pt-2">
                <div>
                  <div className="bg-black w-32 rounded-lg h-8 pt-1">
                    <a
                      style={{ color: "white" }}
                      href="https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency#:~:text=Blockchain%20describes%20the%20way%20transactions,a%20two%2Dfactor%20authentication%20process."
                      target="_blank"
                      className="buy-btn"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </section>
  );
};

export default Pricing;
