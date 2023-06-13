import visa from "../images/BankLink/visa.png";
import mastercard from "../images/BankLink/mastercard.png";
import paypal from "../images/BankLink/paypal.png";
import banktransfer from "../images/BankLink/banktransfer.png";
import skrill from "../images/BankLink/skrill.png";
import ideal from "../images/BankLink/ideal.png";
import bpay from "../images/BankLink/bpay.png";
import karna from "../images/BankLink/karna.png";
import giropay from "../images/BankLink/giropay.png";
import trustly from "../images/BankLink/trustly.png";
import parzelevy24 from "../images/BankLink/parzelevy24.png";
import multibank from "../images/BankLink/multibank.png";
import blik from "../images/BankLink/blik.png";

import android from "../images/Platforms/android.png";
import windows from "../images/Platforms/windows.png";
import webEngine from "../images/Platforms/webEngine.png";

import supportLogo from "../images/supportLogo.png";

import monitor from "../images/monitor.png";

import phone from "../images/PhoneRotate.png";

import firstPhone from "../images/takeFirstPhone.png";
import secondPhone from "../images/takeSecondPhone.png";

import safe from "../images/TradeWitchTrust/safe.png";
import bank from "../images/TradeWitchTrust/bank.png";
import lock from "../images/TradeWitchTrust/lock.png";

import {
  Platforms,
  SupportObjType,
  FooterObjType,
  AssociationObjType,
  TakeControlObjType,
  TradeWithTrustObjType,
} from "../../Types/type";

export const names: string[] = ["Instruments Categories", "Tools", "Company"];
export const languages: string[] = ["UA", "Eng"];

export const StartTrade = {
  title: "Trade CFDs on Shares, Indices, Forex and Cryptocurrencies",
  description:
    "Reliable, Simple, Innovative. Join millions who have already traded with Nordic Association of Brokers.",
  btn1: "Start Trading Now",
  btn2: "Try Free Demo",
};

export const TradeWithTrustObj: TradeWithTrustObjType = {
  title: "Trade with Trust",
  content: [
    {
      text: "Nordic Association of Brokers Ltd is a FTSE 250 company listed on the London Stock Exchange’s Main Market for Listed Companies",
      image: bank,
    },
    { text: "Your funds are kept in segregated bank accounts", image: safe },
    { text: "Secured by SSL", image: lock },
  ],

  btn1: "Read More About Us",
};


export const PlayLinksImg: string[] = [
  visa,
  mastercard,
  paypal,
  banktransfer,
  skrill,
  ideal,
  bpay,
  karna,
  giropay,
  trustly,
  parzelevy24,
  multibank,
  blik,
];

export const PaymentText =
  "* Some of the payment methods may not be available in your country";

export const TakeControlObj: TakeControlObjType = {
  title: "Take Control",
  description:
    "Use our advanced tools and features to gain control on your account:",
  content: [
    { title: "Stop Limit / Stop Loss / Trailing Stop" },
    { title: "Guaranteed Stop" },
    { title: "Negative balance protection" },
    { title: "FREE email & push notifications on market events" },
    { title: "Alerts on price movements, Change % & Traders’ Sentiments" },
  ],
  btn1: "Go to Risk Management",
  btn2: "Go to Alerts",
  firstImage: firstPhone,
  secondImage: secondPhone,
};

export const ExploreMarketsObj = {
  title: "Explore Markets",
  description:
    "Trade the world’s most popular markets and explore endless trading opportunities.We offer + 2000 financial instruments, FREE real tim quotes and dedicated round - the - clock customer support.",
  content: {
    item1: "Discover our Sector Indices",
    item2: "News and Market Insights",
  },
  btn1: "Learn More",
  btn2: "Watch Video",
  image: phone,
};

export const TradersGuideObj = {
  title: "Traders Guide",
  description:
    "Discover the basics of CFD trading and understand commonly-used terms by accessing our free and intuitive video guide.",
  btn: "Watch Videos",
  image: monitor,
};

export const AssociationObj: AssociationObjType = {
  title: "Nordic Association of Brokers",
  description: "in 2020",
  links: [
    {
      title: "82+",
      description: "Million",
      subTitle: "Positions opened",
    },
    {
      title: "430+",
      description: "Thousand",
      subTitle: "Active customers",
    },
    {
      title: "1700+",
      description: "Billion $",
      subTitle: "Traded value",
    },
  ],
};

export const TradingPlatformsObj: Platforms = {
  title: "Trading at your fingertips",
  description: "Trade anywhere, anytime using our various platforms.",
  links: [
    { image: android, text: "Android App" },
    { image: windows, text: "Windows 10 Trader" },
    { image: webEngine, text: "WebTrader" },
  ],
};

export const SupportObj: SupportObjType = {
  title: "Need Help?",
  btn: "Support",
  image: supportLogo,
};

export const FooterObj: FooterObjType = {
  title: "Уведомление о рисках:",
  description: `Операции, предлагаемые данным сайтом, могут осуществляться только совершеннолетними(18+) и полностью дееспособными лицами.Операции с финансовыми инструментами, которые выполняются посредством этого
	сайта, могут относиться к операциям с высоким уровнем риска и повлечь
	за собой потерю вложенных средств.Перед принятием решения о начале
  торговли вы обязаны ознакомиться с Условиями и соглашениями об
  оказании услуг, а также с Уведомлением о рисках, Политикой
  конфиденциальности, Политикой AML и Политикой KYC.`,
  subTitle: "Neroport business center in 2300 Copenhagen, Denmark",
  subDescription: "© 2015-2021",
};
