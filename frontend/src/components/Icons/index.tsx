import { FC } from "react";

import All from "./Icons/All";
import Arrow from "./Icons/Arrow";
import Available from "./Icons/Available";
import Basket from "./Icons/Basket";
import Bundles from "./Icons/Bundles";
import Calling from "./Icons/Calling";
import Close from "./Icons/Close";
import Facebook from "./Icons/Facebook";
import Filter from "./Icons/Filter";
import Flowers from "./Icons/Flowers";
import Fruits from "./Icons/Fruits";
import Herbs from "./Icons/Herbs";
import Instagram from "./Icons/Instagram";
import Menu from "./Icons/Menu";
import Message from "./Icons/Message";
import Minus from "./Icons/Minus";
import Plus from "./Icons/Plus";
import RangeLine from "./Icons/RangeLine";
import Search from "./Icons/Search";
import Supplies from "./Icons/Supplies";
import Tomato from "./Icons/Tomato";
import styles from "./page.module.scss";
import { IIcons } from "./types";

const Icons: FC<IIcons> = ({ iconName, className }) => {
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
export type { IIcons } from "./types";
