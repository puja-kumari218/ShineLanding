import Header from "../components/Header/Header";
import NavLinks from "../components/NavLinks/NavLinks";
import ProAccountContainer from "../components/ProAccountContainer/ProAccountContainer";
import Services from "../components/Services/Services";
import CustomerReviews from "../components/CustomerReviews/CustomerReviews";
import SmootherManagement from "../components/SmootherMangement/SmootherManagement";
import Discover from "../components/Discover/Discover";
import Footer from "../components/Footer/Footer";
import styles from "./ShineLandingPageAssignment.module.css";

const ShineLandingPageAssignment = () => {
  return (
    <div className={styles.shineLandingPageAssignment}>
      <div className={styles.frame}>
        <div className={styles.frame1}>
          <Header />
          <NavLinks />
        </div>
      </div>
      <ProAccountContainer />
      <div className={styles.frame2}>
        <div className={styles.frame3}>
          <div className={styles.withSuperfast5g}>
            <div className={styles.openAccount}>OPEN ACCOUNT</div>
          </div>
          <div className={styles.withSuperfast5g1}>
            <div className={styles.compareOurOffers}>COMPARE OUR OFFERS</div>
          </div>
        </div>
      </div>
      <div className={styles.frame4}>
        <div className={styles.frame5}>
          <div className={styles.monthFreeParent}>
            <div className={styles.monthFree}>1 Month Free</div>
            <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
          </div>
          <div className={styles.opensIn5}>Opens in 5 Mins</div>
          <div className={styles.withoutEngagement}>Without Engagement</div>
          <img className={styles.vectorIcon1} alt="" src="/vector2.svg" />
          <img className={styles.vectorIcon2} alt="" src="/vector3.svg" />
        </div>
      </div>
      <div className={styles.frame6}>
        <div className={styles.frame7}>
          <Services />
          <div className={styles.withSuperfast5g2}>
            <div className={styles.discoverOurServices}>
              DISCOVER OUR SERVICES
            </div>
          </div>
          <div className={styles.desServicesBancaires}>
            Des services bancaires pour vous accompagner tous les jours,
            accessibles partout et des cartes physiques ou virtuelles pour vos
            dépenses pro.
          </div>
          <b className={styles.littleThingsThat}>
            The cards in hand to go further
          </b>
          <div className={styles.littleThingsThat1}>
            More agile than a traditional bank more human than an online bank
          </div>
          <CustomerReviews />
          <div className={styles.divcssF7b18q}>
            <div className={styles.divcssJoj902}>
              <div className={styles.divchakraStack}>
                <div className={styles.divchakraStack1}>
                  <img
                    className={styles.svgchakraIcon}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.svgchakraIcon1}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.svgchakraIcon2}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.svgchakraIcon3}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.divcss1r9c4q2Icon}
                    alt=""
                    src="/divcss1r9c4q2.svg"
                  />
                </div>
                <div className={styles.divchakraText}>
                  <div className={styles.div}>4.8</div>
                  <div className={styles.appStore}>App Store</div>
                  <img
                    className={styles.svgchakraIcon4}
                    alt=""
                    src="/svgchakraicon1.svg"
                  />
                </div>
              </div>
              <div className={styles.divchakraStack2}>
                <div className={styles.divchakraStack1}>
                  <img
                    className={styles.svgchakraIcon}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.svgchakraIcon1}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.svgchakraIcon2}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.svgchakraIcon3}
                    alt=""
                    src="/svgchakraicon.svg"
                  />
                  <img
                    className={styles.divcss1r9c4q2Icon}
                    alt=""
                    src="/divcss1r9c4q2.svg"
                  />
                </div>
                <div className={styles.divchakraText1}>
                  <div className={styles.div}>4.6</div>
                  <div className={styles.googlePlay}>Google Play</div>
                  <img
                    className={styles.svgchakraIcon9}
                    alt=""
                    src="/svgchakraicon2.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.hrchakraDivider} />
            <div className={styles.divcssGasozw}>
              <div className={styles.satisfiedCustomers}>
                + 100 000 Satisfied Customers
              </div>
              <div className={styles.seeMoreReviews}>{`See more reviews `}</div>
              <div className={styles.div2}>→</div>
            </div>
          </div>
          <b className={styles.shine}>SHINE</b>
          <SmootherManagement />
          <div className={styles.withSuperfast5gParent}>
            <div className={styles.withSuperfast5g3}>
              <div className={styles.discoverOurServices}>
                DISCOVER OUR TOOLS
              </div>
            </div>
            <div className={styles.desServicesBancaires1}>
              Des services bancaires pour vous accompagner tous les jours,
              accessibles partout et des cartes physiques ou virtuelles pour vos
              dépenses pro.
            </div>
            <b className={styles.littleThingsThat2}>Smoother Management</b>
          </div>
          <div className={styles.withSuperfast5g4}>
            <div className={styles.discoverOurServices}>
              DISCOVER OUR SUPPORT
            </div>
          </div>
          <div className={styles.desServicesBancaires2}>
            Des services bancaires pour vous accompagner tous les jours,
            accessibles partout et des cartes physiques ou virtuelles pour vos
            dépenses pro.
          </div>
          <b className={styles.littleThingsThat3}>A Partner more than a bank</b>
        </div>
      </div>
      <div className={styles.frame8}>
        <div className={styles.frame9}>
          <div className={styles.desServicesBancaires3}>
            Des services bancaires pour vous accompagner tous les jours,
            accessibles partout et des cartes physiques ou virtuelles pour vos
            dépenses pro.
          </div>
          <b className={styles.littleThingsThat4}>Instant cash deposit</b>
        </div>
      </div>
      <div className={styles.frame10}>
        <div className={styles.frame11}>
          <Discover />
          <img
            className={styles.unsplashrjqe64nmcOIcon}
            alt=""
            src="/unsplashrjqe64nmc-o@2x.png"
          />
          <div className={styles.withSuperfast5g5}>
            <div className={styles.discover}>DISCOVER</div>
          </div>
          <b className={styles.littleThingsThat5}>Adopted Bank Cards</b>
          <div className={styles.withSuperfast5g6}>
            <div className={styles.discover}>DISCOVER</div>
          </div>
          <div className={styles.sansEngagementSans}>
            Sans engagement. Sans paperasse. Sans frais cachés. Sans souci.
          </div>
          <b className={styles.littleThingsThat6}>Everything to save time</b>
          <img
            className={styles.unsplashexP4aabxbsIcon}
            alt=""
            src="/unsplashex-p4aabxbs@2x.png"
          />
          <div className={styles.withSuperfast5gGroup}>
            <div className={styles.withSuperfast5g7}>
              <div className={styles.discover}>DISCOVER</div>
            </div>
            <b className={styles.littleThingsThat7}>100% Online Pro Account</b>
          </div>
          <img
            className={styles.b089d20F6f04b209252569dceeIcon}
            alt=""
            src="/9b089d20f6f04b209252569dceeceea4-feature2020cardspng@2x.png"
          />
          <img
            className={styles.de693ad2Ea5e4be5B48d931a58Icon}
            alt=""
            src="/de693ad2ea5e4be5b48d931a580cf147-comptepro20featurepng@2x.png"
          />
        </div>
      </div>
      <div className={styles.frame12}>
        <Footer />
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
      <div className={styles.navchakraContainer}>
        <div className={styles.divcss1t2o4d4}>
          <div className={styles.divchakraStack4} />
          <div className={styles.divchakraStack5}>
            <div className={styles.divchakraStack6}>
              <img
                className={styles.divgatsbyImageWrapperIcon}
                alt=""
                src="/divgatsbyimagewrapper.svg"
              />
              <div className={styles.pchakraText}>
                <div className={styles.shineRespecteDes}>
                  Shine respecte des normes sociales et environnementales
                  élevées et s’inscrit dans une démarche de progrès.
                </div>
                <div className={styles.achakraLink}>
                  <div className={styles.enSavoirPlusContainer}>
                    <a
                      className={styles.enSavoirPlus}
                      href="https://www.shine.fr/mission/"
                      target="_blank"
                    >{`En savoir plus `}</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.divchakraStack7}>
              <img
                className={styles.divgatsbyImageWrapperIcon}
                alt=""
                src="/divgatsbyimagewrapper1.svg"
              />
              <div className={styles.pchakraText1}>
                <div
                  className={styles.chaqueAnneNous}
                >{`Chaque année, nous reversons 1 % de notre chiffre d'affaires à des associations environnementales. `}</div>
                <div className={styles.achakraLink1}>
                  <div className={styles.enSavoirPlusContainer}>
                    <a
                      className={styles.enSavoirPlus}
                      href="https://www.shine.fr/mission/"
                      target="_blank"
                    >{`En savoir plus `}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divchakraStack8}>
          <div className={styles.ulchakraWrapList}>
            <a
              className={styles.accueil}
              href="https://www.shine.fr/"
              target="_blank"
            >
              Accueil
            </a>
            <a
              className={styles.conditionsDutilisation}
              href="https://www.shine.fr/lp/cgu-ep-en-clair/"
              target="_blank"
            >
              Conditions d'utilisation
            </a>
            <a
              className={styles.protectionDesDonnes}
              href="https://www.shine.fr/privacy/fr/"
              target="_blank"
            >
              Protection des données
            </a>
            <div className={styles.paramtrerLesCookies}>
              Paramétrer les cookies
            </div>
            <a
              className={styles.mentionsLgales}
              href="https://www.shine.fr/mentions-legales/"
              target="_blank"
            >
              Mentions légales
            </a>
          </div>
        </div>
      </div>
      <div className={styles.frame13}>
        <div className={styles.frame14}>
          <div className={styles.divchakraStack9}>
            <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
          </div>
          <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <img className={styles.facebookIcon} alt="" src="/facebook.svg" />
        </div>
      </div>
    </div>
  );
};

export default ShineLandingPageAssignment;
