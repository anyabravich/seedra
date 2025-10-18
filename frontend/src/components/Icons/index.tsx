import styles from "./page.module.scss";
import { IIcons } from "./types";

import Instagram from "./Icons/Instagram";
import Facebook from "./Icons/Facebook";
import Search from "./Icons/Search";
import Basket from "./Icons/Basket";
import All from "./Icons/All";
import Menu from "./Icons/Menu";
import Arrow from "./Icons/Arrow";
import RangeLine from "./Icons/RangeLine";
import Filter from "./Icons/Filter";
import Available from "./Icons/Available";
import Tomato from "./Icons/Tomato";
import Herbs from "./Icons/Herbs";
import Minus from "./Icons/Minus";
import Plus from "./Icons/Plus";
import Bundles from "./Icons/Bundles";
import Fruits from "./Icons/Fruits";
import Supplies from "./Icons/Supplies";
import Flowers from "./Icons/Flowers";
import Calling from "./Icons/Calling";
import Message from "./Icons/Message";
import Close from "./Icons/Close";

const Icons = ({ iconName, className }: IIcons) => {
  let icon;

  switch (iconName) {
    case "instagram":
      icon = <Instagram />;
      break;
    case "facebook":
      icon = <Facebook />;
      break;
    case "search":
      icon = <Search />;
      break;
    case "msg":
      icon = <Message />;
      break;
    case "basket":
      icon = <Basket />;
      break;
    case "calling":
      icon = <Calling />;
      break;
    case "all":
      icon = <All />;
      break;
    case "menu":
      icon = <Menu />;
      break;
    case "arrow":
      icon = <Arrow />;
      break;
    case "range-line":
      icon = <RangeLine />;
      break;
    case "filter":
      icon = <Filter />;
      break;
    case "available":
      icon = <Available />;
      break;
    case "vegetables":
      icon = <Tomato />;
      break;
    case "bundles":
      icon = <Bundles />;
      break;
    case "fruits":
      icon = <Fruits />;
      break;
    case "supplies":
      icon = <Supplies />;
      break;
    case "flowers":
      icon = <Flowers />;
      break;
    case "herbs":
      icon = <Herbs />;
      break;
    case "minus":
      icon = <Minus />;
      break;
    case "plus":
      icon = <Plus />;
      break;
    case "close":
      icon = <Close />;
      break;
    default:
      icon = <i>Иконка не найдена</i>;
  }

  return <i className={`${styles.icon} ${className || ""}`}>{icon}</i>;
};

export default Icons;
