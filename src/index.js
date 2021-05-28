import { createElement, Fragment } from "react";
import { createBem } from "@oly_op/bem";
import "./index.scss";
var bem = createBem("Button");
var Button = function (_a) {
    var icon = _a.icon, text = _a.text, onClick = _a.onClick, tabIndex = _a.tabIndex, disabled = _a.disabled, className = _a.className, spanClassName = _a.spanClassName, iconClassName = _a.iconClassName, textClassName = _a.textClassName;
    return (createElement("button", { title: text, type: "button", onClick: onClick, disabled: disabled, tabIndex: tabIndex, className: bem(className, ""), children: (createElement(Fragment, null,
            createElement("i", { children: icon, className: bem(iconClassName, spanClassName, "icon", { ignore: true, className: "material-icons" }) }),
            icon && text && (createElement("div", { className: bem("spacer") })),
            createElement("span", { children: text, className: bem(textClassName, spanClassName, "text") }))) }));
};
export default Button;
