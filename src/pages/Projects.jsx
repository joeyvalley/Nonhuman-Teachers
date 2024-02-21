import { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import CopyFooter from "../components/CopyFooter";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Footnote from "../components/Footnote"
import footNotes from "../api/footnotes";


export default function Project() {
  // Set up states for content visibilty.
  const defaultFootnote = { page: 'projects', number: 0, content: `"The world is now dominated by an animal that doesn't think it's an animal"<br /><br /><span class="footnote-italic">Melanie Challenger, author</span>`, type: 'text', caption: '' };

  const [footnoteContent, setFootnoteContent] = useState(defaultFootnote);
  const [showFootnote, setShowFootnote] = useState(true);
  const [footnoteShowing, setFootnoteShowing] = useState(false);

  function openFootnote(footnoteNumber) {
    setShowFootnote(false);
    let footnote = footNotes.find(item => item.page === "projects" && item.number === footnoteNumber);
    if (showFootnote && footnoteContent.number === footnoteNumber) {
      setTimeout(() => {
        setFootnoteContent(defaultFootnote);
        setShowFootnote(true);
      }, 300);
    } else {
      setTimeout(() => {
        setFootnoteContent(footnote);
        setShowFootnote(true);
      }, 300);
    }
    checkForMobile();
  }

  function checkForMobile() {

    if (!footnoteShowing) {
      setFootnoteShowing(true);
    }
    else {
      setFootnoteShowing(false)
    }
  }

  const [copyLoaded, setCopyLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setCopyLoaded(true)
    }, 500);
  }, [])


  // Set up image carousels.
  const projectSlider = useRef(null);
  const botanicalSlider = useRef(null);
  const mediaSlider = useRef(null);

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    fade: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const eventsImages = [
    "https://previews.dropbox.com/p/thumb/ACKi36Dxa9dgY55X97unLIW8WrL8s8_qrx-9gCiECDKjtVfph32y48RPA_PWhjGNyG315Vy49CC5OvajXpgZuoVWF6AQMboku9x8JGzyunOFARZateRJWLvGfzK2LGl-t9NTC5ebNrHigJ89uTxveY9uFInM1J1O_HqeYANHxmlt9vdzC3Y0R7GJSad6Pb2GpUnCJZpLsP-yazD1t7e84RiP_Hs9TywveeKqbl76_Kqd4vacTokwtnJcS-oV_s0bX4mzRBGKRN1Ubcsjw9gG9zRZkjnH9-0aCm5x41yj3b314HezDM_EkpfDI-mHRTOH1M2VhyvrNwVmZMmEbJsoE4W7/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACLRux-tz9kd3W1hBCXfvqe8TdcVt4kV1LNboqn3IY0ctyDEcqvBUYUDzdqCDOgYcNLANh2uluCWzjmSC6ORv5a27OJNr6R34Vw-QLG08Aepad7dkAkOUvsEdou4OXQMKzpeXNIUP7JMYHfGQDyrWt__r2IVCYzEtpKuCf6jQp50zQR8x1YJs-0c_BltgDel1W1WPIFfo5uRkXQwf_FQsazwTPGBt14XGGqrGzyn7g5LnwXH9UnkqWHmOwG_u82o0-a74Gfrqis3q4GkfWSJTsG_L1Rf6RDr6jIwYZqXvXbjg4AMHkAKEwdhsALyhu06yYpRrDaZ0M5m_K_QHomev4CG/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACLyyHhfDHY-sVcMdlRFkWrr-ammmpqaw1_UdvcgC4kVAd2ClAQu9imbR3qCJyxKf9lnUNgJM_2l_rL6RzXeadw2ZkYedVKNGrQC6_03ahUQRdkG4ymlsBvd6aFqaA3LLHHs3n_GE-v7JmxHCA9DCQv2irUAjQWEkMo2C8ELCqyPm1vb5Ozi2pcbBRtlYuMvj-uZVhpTaXQHuAYvSAQP3kJXXctZ4TA98DZ_r2qf_UWgie4dTmrWCYzO5E6BeHw5y_ZEIBDg3j1J779dLIYfVOXD-azeL6W0m1Ir6AqES-VvjnKE0bmN5YRj8ITbVKn9BVZGJuNIvijZx1ZtJbrucwlF/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACK5PyyzZMiSd3cTmAtaIb-P1_v80TdvOnrcpeZCSC06ZpeXeE37e07XasKsVGh5tFIu3tumFPN1NhxU6EWgum2OkI7t_AVGMBV4QqVzuhwcFdw4pwk2qQ0ybiCCitgkqrDRpl6MTjhBiQ9AHTjDz55BQirG1B85a5vrBhNWOwZWQ0vr28IrYtgzys6dJ0d3YoeX4ioS-SWbXlK8W5gBn2ofY3XPe3vwsAe7TEn92_eHjlzPsAjjyYgnyj_Zj9f8KB91UnE0fbvEFrKv4vQGr-l_iXqepC_CObsaOEo_pyZ9juJ_3Drl_ZVHC--R7gDNEGV_6CdWctZz7Ns3RDIJBcyW/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACI6Z4Pl2yoirTgLsLqzqgLaFwfZi-TdZuB9exO_DTF98OxY0pvz4hSCYPm2YaTkt_SwUc0kZWgJBmB7lFx8o6vzRvNNjZMEbHXfUqq7FGGdwVTiXBlhLxU99zu1WkjsqYsIHaYdOEJe2KD7A2NBp4jZW9FDJTgWW_pEjj_Dc_Zu05iarE85lehRN3SDBT2xo_8ND_zNI3c6eO7GoiGtsn5zxwMnrZdPPmVZ4B0ul45G3ojs5N8Rxx_64I3K34OgeX-R5iLhJC5Izl_44IiWgxbJldgtq1-zqWUj19cLND7kEEblq56DONIcYsuC8FBpV3kTf3DZLTvpIkU6p65u8F3E/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACLAYyMUImq72htElpZyM24BMdYyX1oh3vDkLI6ifcqAzDJM78mwwrjLgXpXtf4xZCPf7PY1TwDf5B_Dly9SO7I037BVYX0mpNUW5GpZY6ntBI4iOZ32bA1YMAOpeRgtv1xuKFBf87GGRqEZrpVNAIMKXWffiDIROUmB4O6djTX0ZKVa87gxUMaeuQl6lRINHxX8BzK6dC9ZWOlawu4xviRnGvy6t59DsDX92r0G5ARdEaFoJWprUSs1pmZTYaVHV4gQj3t6tuESTOM411Vsm7jKVv_vzU49lEXKwhveGCZ014nJ8HAt5EiZddjZHoznb0weCCHdKpUDfDOv-A6w3CJ0/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACJu5-WZAkFeBMF42Ca8UpLNDI-9V0Q007_4a4-I5bolE2AZhJl5hTY_YMiZ6cQAoPAiXpm0y65ii_66Nmo6go8pyQ-tnCfXGRZR6A3VJqOMfEmWhgf7fN3fmcpSwVIoEhIk1kHdF0mShhQWJzExALKOHf7aFWeIicfSYkAbCJx7KD25ggdtZ74f3_Ni_eGZ9Upacf79DfPpPJRRX8LmD0Nhqbvw_ikncrO8HCDI5bg3Po5crtenOIn-Q4N5LI73GOCbgIpzaygm1JxymSqGWf_MCAH3GI178AHlFYTkviWwmSGgN6wATxfAQBm3VigtIJyUKNhvRCh_JOX71e4blVZE/p.jpeg"
  ];

  const botanicalImages = [
    "https://previews.dropbox.com/p/thumb/ACK67BRi15jbxFehdgmrKEn6xoFv4iJvE1TVtQp6F-MNsuLcwZfW_3UwVZeQqiUUPCavxHBSZHZfXRgL8zAXV27uXrNWUCgSJG24iTt32EAIVe7fQ9mp13oJ7zq28uuOGUyVMj8NL4ADvt1cbl0RJPGn_Nc3U84yCqGuii2-KxpJiPhxCcsVE2r-8LLuwJ19vy-sVLelsJIk1oSintMiA1_Ed070C5yGLNR58x8Xr_VpL6hjbyLUMZXQ6TSAjvVJY_z_bIDc3iTZUlS3Fw3WFveTh-ByDEfTlP-jELdklV06MaQWA8fRdXGYFmKHsQ5UCPG8VcFJGaPr-FIpH9hx92Id/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACKnMOcdJ3H8NetjeOcQ48UDKoQ7bCRpbG9PpG3M8ZmxS4OqO7GCtCOYILpEb5z9Zc79nvYS3KM-SnhBM-JASxHVOOWRhkry9Qa8LeXJphWX65zgwEs9lLgvtsVShHyU6MWicIdTDrFYDTUXUREXKn6CsXOp4P5q284Oz2w1ZApXW2wCxOvzmoNKd5mvnWHqrO_vAxgAUdE43cOQ3D63KLMHzwCznKC5DbsF2vAJ8szp4Wk0hwT1Q1c7_q2Vhuc7QV1rft3qIda6pJ61TkcXZLuMQ-iijqkaKpNOtHjR3BR4NQ5HerT_9tbqsUkWipmtX2BsKMofGVbYJu45JgbOubu7/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACIxgbl059kde4Wzf60YOyLQTPxcEqkmVOjiocMIp2-69VUU4-lqwat2qk3YN9dgsxogU4okDpDESUh7I_icRgLsnoZRk1FI3YyEsqqPGdxRkLILaY_XmAFRA1SqKESEIERJVhaWDeb5UNHFbK0wz3ljgBQ8-qicei9ihDnOl8GgP1782YAbvSNnlIHD_B0VaYJmVqKBfDQ-7HCK-02CMAsi9BNcaGLWBN0DHS-eKbHymDB6asFQPoUp2WPEmBeoR9cdgD1fqNCOJZQRRWJybNHgEDJZn8KpcFgcR500IeUFa2F_f8iLbmYvxdssskqM1u1uQMu4rZxflMDvO7zspJ1g/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACKvQLSVecBpFiK-NvxKkwP5oXTpeLPCy0QSMsWz4bPNbmNbbqr4Z7OuOS3yI3txEKskR3g68iHgD8hgviLqCrgowu7MO-AAATvUabPh0yF8GHmEMaoDXRGPA9KZZA3wlLpRO42evvwd8RAKwTGN5k7x1kwZMjBQmaVbyjcLG5fEycfdsBOyPxRLC1DxdTL4Z_CJz6hHvNryztMraNiXgUHQLvJy3iW5481_K1h1h7fJMxgQSfRKN0BVlw9sxAVMyZzH1uuFiQpXnzKfJNOO11_hGjv_jdE6IcmgvEo2K_HZBj63X5ETPJNH6tXb5AEHVvA2h1EB_d734NKf7hbXC6J1/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACI2Q6HRfVk5yKD-HZXohvM_sDg3v8-nDF7wjSGwudQ8_fe_4O4GSpG3gae_E1-ADoyeTDzR8OKkx1Sfo65tpxcbBxC4tw33uh1QEw7mT2NXs7VRRiw3fk79KyaBH8y2iKOdE2lXyqV6LkvUdLgOL19xunlaPxMo_i8-oNjif8OuJJ415FBLRZ7Zjj2312wSxNX6ld8_P1zDFsDVwnBJcbBpIZzha-jQMi4lIQNxvoOyzDlVhSAcobF5kaiPwijEIW2xeaGI06qsvT1AVR8b-k4J3J58eHn-Mjby_6GEjAF9gV3S9KpggIaSWg-yM1HPZpLL8xA7skqtXkCMUtwuDbmk/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACKnyinBe8QUXmlXGRWvyI1hk1SVfxf5I3gwcegFOIgRZuGjZmz8Qig0bQD-DKc2L4G7js4idNzIoMB8dfnUPatziPdpv98bcLYFEbYS_5P28BypXpwqyEYddW4aqxZu8qW_A4lB428SEPL9MXeQz_JfXjKK20TfItt2CikXzQYinZbWJxpTlqLhnlMGz84z4asnPWsmgOA8lz7LevB7J0-lkuC11iwxaylpXjsrrGjF77vIwxC6NBHlJJouOUXGCCd7j88uITYYVt8lHCXq5ifn4O8HuJ_2vURbuudkorFQdCjFc-OR7lu3-uF0BbqAfxE22U2aMXmOwfsXokllL67I/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACJdXFtyJ6gQ8K0G7Ofhyvwc0ROIzntWk71xeECasL0UZjE1WDLk3jUOr1cCl5h3J6cldUuZPAa5O53DaYX4Ik03GNMHdd8de5RF_wAd_i8fVikC0YNrzNRaOCwIt4MtMBMxpkDQmfaBmwNlRuufxWJuHVV7Tc4aAcNb2keaE3qz3IsxTH01WvyCHl5FwUKtxVP2A-d3q7BEmFbl03MR4DB0rXa9sJEF3z2jfPDL1A_BHHEbIBt77VmRFY0YQOAVapMGzZeiKbRCqwhNnTYgqa2g-vtKb2MbwNTxtLPYQ3F1x93rkuxfFkGLmZ7Am3k9F6coRKB5JQGvVUE3d0gjf_Fw/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACKCJCJA1cHRWTzTOZUfMbVKVMmgUp0t4sPjFzohLOndhNOVuMukXUxsfKLsssmdVjBLSoqJhXZn2YBjjjd7EGn-0R1PgVbPnVNP3DnVfQhvXfdvdth9fa2fomDYh69Qjsn6CdCb8QVXYZ-kNpSGZgYhUYzqUvYC8UYqsk_Fet_w-rIoBpHu2_FKdZkujLCzQYId6tuUMGCPpxruuBzd2jTbk_u9oLRPThDju0IAmVdhqbN7mEKW-zIC6mkVRJt4wiO6XokBBdCuL7DgAVLfjv_6OxIZyiJQAByeQlQLRiwxywofyL8pyRVoUwhfLzn2jExuoykQi-v9rWC7yY-gv3Et/p.jpeg",
  ];

  const mediaImages = [
    "https://previews.dropbox.com/p/thumb/ACKCf2gn3Ge1RYZoxYZ419gDliTVinE7oOB4MIik8sgxVifBiq5HJcep7YjhiizF1LMrUdWVzqtUa3VTtuXShR3CA6JtSlRNyuc_62eN0Af11-d4pPDPrWExu1jyaHA8Z3nrv67VUJZbzVnOqUSsRVg64-w1aHYsotdpzh_719wON5YSDST0L-3evReG6wvUo0RbzPMoAkY9_yJPgymJ07k-ULoNPVH8g-5VtKnSD15o2SnH_O4vM5QmVyq8iyM1L0a-rwwU7ahjgCqiQf04DfFi5nSA3xVZhdFbF519-g-DareFueHDnvFpv7rF8X_ircak0o5nzN_NonDDwoRwZ9Iz/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACLIfoTI0eNMjHIGvOcA1lOfIBWgNVE30NIIA0J7doYvGIBD0OmnVPs4hWmlhhixRWwNkXOLBEW0dFFWeYRcXWWnsH0kV1vpaEdpY1dxr4xpNqXT29EF4IxGVYFJbLSegvCCVzZ6RKj9jfB2lHVILM3Rw3nbzQgFESd-1mRCD1FGezUJhrIVM1mqoesHwaUhxkHAZCeRY7TEn4bS_mdGfhHtx489yK0oLMUxA4fC2LqQUeva9yLJ3Q_YCwdxF4FZBx-Ibo2Pf7K86-CR-Hvl_rn3JwAG6IfjhaQ5ZzsCP3QecSFx7qufN2dLLZ4C9AoMYdvCIqmvrQwKAvEZhUTOaGt6/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACJQhfxOaq-4gW8fCjeDigevjD2uNeclVdy8doeDmDnlczAGptEVCWU-pcI86fRX_xutaoY97OR3SLC8ObySxSBa1n_nZ7J3fLJuVYYdimrRy6gFBitiL3OvJ4ogdVp_lNff6uDFaiEMathZnuSGDOAxnjO6Krr-S797KJbbYXtaStmfVnAly02BqT-370XKFGdd0YoItdzwClgER7ZJMvBMHeaW_yhj_Zd9pom45Gilny_4UBxLyQH8OhOTD0Dm-KAyIOf-846kaW3_lPET5oPMwLQ9YEMeY08JD0EPsBX-HcewfDihnTAflWM0pqHJ6DJgYkCX8j6BEIvCJjy4f2GA/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACKTpvgrVKgothEBU830A2gfLnP-oxf1NJlrC0C07qCjcbPNk1yVRJuu_Zx89GXkifI2z2BJDdUgobIQ0DaqT7h8YzT2fazEwxDXb_ppVXU5NACCaBxzFkX_XAVPRtngAchTPwmHWVYLWo_Q5cG40lfAWJZmT5P2LQKRMsv4rC82lB6pKvYH5bwzG8OTZegFGMAFjFqUDdDKdoishfaz4qRndRm_20_oIKuS_IueGUUnJDpmtMXHCsDWDkvlzwRWrqPmB9uC7MFbMkbQug--i5mB93QwJMw6gsjm20iZX4rQ3RRL7-Zisbo66oDLjB1IvwNsyPMSgZxgaBJYk5JDwxf5/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACJ7yMVbOsM-kad2bFzVGqoEnfsKIS2s-JlMVtm-PLAuuiQc_wvJtAH_XRl_53Kl8e75gADGXoscp8TjKcnN_85CC7dOOifYpevbkAlT6weTCcOciimc7Gn0Ffng4Ic07n8MqoH6faU-r9EPsuwVVFdFSObMxZ8MSSA0QUSTHy4BoizfYKvxnCeuNXlMaKZtut6u2OgOgU69UEJwImGQfnI3flRMtic8_I-vly9zRX9JOJxMHCn_8O--bEfTBCjh7xMUlnouQ7RgHBYuQwybzCmjRjKWI78l1r_paZUWs-rPPbOBnZc7VCCmIsQni6XA8r-j2ImS1mvtBtxytFcrWKI1/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACLH44XA5oz4jxBuDsBIFy0pk7bEkSeJjvmWLqJ62szKOWViNfSGn4eIGfUh2yiEWw30b7kTeJpTpz5VOVlXGFQsL6G6ODypGlG8ZE4o1glrinvQ2T8pkJhZR83to8nNpa037tXQVy8ZmQutRvbLKSiwNw6Si7gSVR36p8rPu6cZPIDNyVGBApIT0c3f8MiDDwweFHrVqg3xkSDd4uLp9xQGbr0afUJ-0uC89Lnkt70X7Ln_-X9mdXxN6Ysgtdn-vgq92aAHQegKT_NjnOveCw4wjZg7Ko0JeqSI-F13EdZi3hIPgFwWx0m2AYbwqwPBl7ep1-CUQdl2N0aqRRCEij7X/p.jpeg",
    "https://previews.dropbox.com/p/thumb/ACJSAxssDp0f75w-FORJ5dTjrLnBYpJ3zAoTVH1RjFXyZ9OCRZ9JpF4qPSbbVcyUV6_UhHA4TQTNALy0GoMFVwpaRCTcTNFkstgrCLEeRBbvtbE0b3offuqsDhgmisOF24gr2ZC7zPW4GRpHKYeF0eIqebtuUTnWqmwxXlG_2fCnQ2tpfO_hTtyDFwo9diAnE7-SEkQcqpwZusxuK980F5aOJEjMHBdJBR0tjR_1T5BmSQyzpjO_TVN36ueEBUq9kEAnbsCQ7i15zaEGKl8VqprI_bREpGoTd-_MPjIPd84p_6bZz6fIrkePXGK2JNSXrCiUjYaCEdvZK6HVVurVhoGu/p.jpeg"

  ];

  return (
    <>
      <div id="projects-container" className="section">
        <div id="projects-content" className={`copy ${copyLoaded ? 'loaded' : ''}`}>
          <div id="public-programming" className="section-heading">
            <div className="event">
              <h2>Public Programming</h2>
              <p>Our multidisciplinary events in LA and NYC<span className="footnote-number" onClick={() => openFootnote(1)}>[1]</span> include lectures, workshops, book and plant clubs, movie screenings, and all kinds of performances.<span className="footnote-number" onClick={() => openFootnote(2)}>[2]</span> We feel strongly that connecting with the natural world should be a social and inclusive endeavor.</p>
              <Slider {...settings} ref={projectSlider}>
                {eventsImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div id="botanical-spaces" className="section-heading">
            <div className="event">
              <h2>Immersive Botanical Spaces</h2>
              <p>These are experiments in what the evolution of a botanical garden can look like;<span className="footnote-number" onClick={() => openFootnote(3)}>[3]</span> unlikely urban oases for rare and unusual plants that are also hubs for citizen science, education, experimentation, and community. Every plant, just like every human, comes with a story. Learning these stories can have a transformative effect on people, changing a green leafy thing into a fully realized being worthy of human care and compassion.<span className="footnote-number" onClick={() => openFootnote(4)}>[4]</span></p>
              <Slider {...settings} ref={botanicalSlider}>
                {botanicalImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Botanical Spaces ${index}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div id="new-media" className="section-heading">
            <div className="event">
              <h2><a href="projects/media">New Nature Media</a></h2>
              <p>We believe that an updated approach to how science and the natural world are represented in media is long overdue. One that tracks better with the issues of our time.<span className="footnote-number" onClick={() => openFootnote(5)}>[5]</span> Our goal with the media side of things is to tell relevant and surprising new stories<span className="footnote-number" onClick={() => openFootnote(6)}>[6]</span> about our wondrous blue marble while taking full advantage of today's media tools with the aim of broadcasting our signal far and wide.<span className="footnote-number" onClick={() => openFootnote(7)}>[7]</span></p>
              <Slider {...settings} ref={mediaSlider}>
                {mediaImages.map((img, index) => (
                  <div key={index}>
                    <img src={img} alt={`Events ${index}`} className="carousel-image" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <CopyFooter></CopyFooter>
        </div>

        {/* Footnotes */}
        <div className={`footnotes-container ${copyLoaded ? 'loaded' : ''} ${footnoteShowing ? 'visible' : ''}`}>
          <div className="footnotes">
            <div className="footnotes-header">
              <h1>References</h1>
              <span className='footnotes-close' onClick={() => {
                setFootnoteShowing(false);
                setTimeout(() => {
                  setFootnoteContent(defaultFootnote);
                }, 500)
              }}>Close</span>
            </div>
            <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
            <Footer></Footer>
          </div>
        </div>
      </div >
    </>
  );
};