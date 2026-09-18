import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CirclePlus,
  Heart,
  createElement,
} from "lucide";

const iconMap = {
  heart: Heart,
  "chevron-right": ChevronRight,
  "chevron-left": ChevronLeft,
  "circle-plus": CirclePlus,
  "arrow-up-right": ArrowUpRight,
};

export function createIconNode(name, classList = "") {
  const iconData = iconMap[name];
  if (!iconData) {
    return document.createElement("span");
  }
  const svgNode = createElement(iconData);
  if (classList) svgNode.classList.add(classList);
  svgNode.dataset.lucide = name;
  return svgNode;
}
