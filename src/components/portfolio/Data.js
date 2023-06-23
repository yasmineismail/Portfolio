import React from "react";
import Work1 from "../../assets/images/acceuilPage.png";
import Workk from "../../assets/images/Homepage.png";

import ProfilAcountant from "../../assets/images/profilComptable.png";
import AddAcountant from "../../assets/images/ajoutcomptable.png";
import Login from "../../assets/images/login.png";

import AddAgent from "../../assets/images/Ajoutagent.png";
import AddClient from "../../assets/images/AjoutClient.png";
import Addfourisseur from "../../assets/images/ajoutFournisseur.png";
import Emailverif from "../../assets/images/emailVerification.png";
import listFournisseur from "../../assets/images/listFournissuer.png";
import listClients from "../../assets/images/listClients.png";
import listeAgents from "../../assets/images/listeAgents.png";
import ajoutAgentForClient from "../../assets/images/ajoutAgentForClient.png";
import ajoufacture from "../../assets/images/ajoufacture.png";
import SelctZones from "../../assets/images/SelctZones.png";
import selectZones from "../../assets/images/selectZones.png";

import Work2 from "../../assets/images/ecomHome.png";
import HomeEc from "../../assets/images/HomeEc.png";
import products from "../../assets/images/products.png";
import CartHome from "../../assets/images/CartHome.png";

import Work3 from "../../assets/images/NoteAppList.png";
import noteapp from "../../assets/images/noteapp.png";
import Note from "../../assets/images/Note.png";
import newnote from "../../assets/images/newnote.png";

import Work4 from "../../assets/images/work4Portfolio.png";
import Home from "../../assets/images/HomeY.png";
import about from "../../assets/images/about.png";
import services from "../../assets/images/services.png";
import experience from "../../assets/images/experience.png";
import contact from "../../assets/images/contact.png";
import works from "../../assets/images/works.png";
import personal from "../../assets/images/Personal.png";

import portfHome from "../../assets/images/portofhome.png";
import homepor from "../../assets/images/homepor.png";
import experiencePor from "../../assets/images/experiencePor.png";
import contactPort from "../../assets/images/contactPort.png";
import portfolioPor from "../../assets/images/portfolioPor.png";
import projPo from "../../assets/images/projPo.png";
import aboutPort from "../../assets/images/aboutPort.png";

import techstoreCarousel from "../../assets/images/techstoreCarousel.png";
import techProduct from "../../assets/images/techProduct.png";
import shoppingCart from "../../assets/images/shoppingCart.png";
import shippingAdr from "../../assets/images/shippingAdr.png";
import paypalCredit from "../../assets/images/paypalCredit.png";
import placeOrder from "../../assets/images/placeOrder.png";
import PlaceOrdpay from "../../assets/images/PlaceOrdpay.png";
import Deliver from "../../assets/images/Deliver.png";
import adminUsers from "../../assets/images/adminUsers.png";
import userProfile from "../../assets/images/userProfile.png";
import ordersAdmin from "../../assets/images/ordersAdmin.png";
import prodAdmin from "../../assets/images/prodAdmin.png";
import editProduct from "../../assets/images/editProduct.png";
import SignIn from "../../assets/images/SignIn.png";
import register from "../../assets/images/register.png";
import review from "../../assets/images/review.png";

import Mp1 from "../../assets/images/mp1.png";
import Mp2 from "../../assets/images/mp2.png";
import Mp3 from "../../assets/images/mp3.png";

import Dash1 from "../../assets/images/Dash1.png";
import Dash2 from "../../assets/images/Dash2.png";
import Dash3 from "../../assets/images/Dash3.png";

const Data = [
  {
    id: 1,
    title: "Web application for an accounting firm",
    description:
      "web application for an accounting firm to facilitate efficient management of agents, customers, bills, and invoices",
    image: Work1,
    images: [
      Work1,
      AddAcountant,
      Login,
      ProfilAcountant,
      AddAgent,
      listeAgents,
      AddClient,
      listClients,
      Addfourisseur,
      listFournisseur,
      Emailverif,
      ajoutAgentForClient,
      ajoufacture,
      SelctZones,
      selectZones,
    ],
    technologies: "Django, Reactjs, MongoDB, Django Rest Framework, Git",
    category: "ReactJS, Django",
  },
  {
    id: 2,
    title: "Dashboard Design",
    description: "Design for admin dashboard",
    image: Dash1,
    images: [Dash1, Dash2, Dash3],
    technologies: "ReactJS, sccs",
    category: "ReactJS",
  },
  {
    id: 3,
    title: "Music Player App",
    description:
      "A Music Player App enables users to listen to and search for music while also providing access to top artists and charts.",
    image: Mp1,
    images: [Mp1, Mp2, Mp3],
    technologies: "ReactJS, Redux, Tailwind CSS, RapidApi",
    category: "ReactJS, Redux",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "A portfolio website presents an individual's skills, provides information about them and their experience, and offers a means to get in touch with them.",
    image: Home,
    images: [Home, about, services, experience, works, personal, contact],
    technologies: "javascript, Reactjs",
    category: "ReactJS",
  },
  {
    id: 5,
    title: "Portfolio",
    description:
      "A portfolio website presents an individual's skills, provides information about them and their experience, and offers a means to get in touch with them.",
    image: portfHome,
    images: [
      homepor,
      aboutPort,
      experiencePor,
      portfolioPor,
      projPo,
      contactPort,
    ],
    technologies: "Reactjs, Gsap.js, Figma",
    category: "ReactJS",
  },
  {
    id: 6,
    title: "TechStore",
    description: "An e-commerce website",
    image: techstoreCarousel,
    images: [
      techstoreCarousel,
      techProduct,
      review,
      shoppingCart,
      SignIn,
      shippingAdr,
      paypalCredit,
      placeOrder,
      PlaceOrdpay,
      Deliver,
      adminUsers,
      prodAdmin,
      editProduct,
      userProfile,
      register,
      ordersAdmin,
    ],
    technologies:
      "ReactJs, Django, ReactBootstrap, Redux, PostgreSQL, Django Rest Framework, Git",
    category: "ReactJS, Django",
  },
];
export default Data;
