import { BEMClassType, createBEM } from "@oly_op/bem";
import { ButtonHTMLAttributes, FC, Fragment, HTMLAttributes, createElement } from "react";

import "./index.scss";
import { ImageOptions, PropTypes } from "./types";

const materialIconClassName: BEMClassType = {
	ignore: true,
	className: "material-icons",
};

const isString = (value: unknown): value is string => typeof value === "string";

const bem = createBEM("Button");

const Button: FC<PropTypes> = ({
	icon,
	text,
	image,
	title,
	className,
	rightIcon,
	iconStyle,
	textStyle,
	imageStyle,
	iconClassName,
	textClassName,
	leftIconStyle,
	childrenStyle,
	imageClassName,
	rightIconStyle,
	leftIconClassName,
	childrenClassName,
	rightIconClassName,
	transparent = false,
	isHTMLButton = true,
	...props
}) =>
	createElement<ButtonHTMLAttributes<HTMLButtonElement> | HTMLAttributes<HTMLDivElement>>(
		isHTMLButton ? "button" : "div",
		{
			"type": isHTMLButton ? "button" : undefined,
			"title": title || (isString(text) ? text : undefined),
			"aria-label": title || (isString(text) ? text : undefined),
			"className": bem(
				className,
				icon && !text && "square",
				transparent && "transparent",
				"",
				"FlexRowCenter Rounded",
			),
			...props,
		},
		<Fragment>
			{icon && (
				<i
					children={icon}
					className={bem(
						leftIconClassName,
						iconClassName,
						childrenClassName,
						"icon-left",
						"icon",
						materialIconClassName,
					)}
					style={{
						...childrenStyle,
						...iconStyle,
						...leftIconStyle,
					}}
				/>
			)}
			{image && (
				<img
					src={image.src}
					alt={image.description}
					crossOrigin={image.crossOrigin || "anonymous"}
					className={bem(imageClassName, childrenClassName, "icon")}
					style={{
						...childrenStyle,
						...imageStyle,
					}}
				/>
			)}
			{text && (
				<span
					children={text}
					style={{
						...childrenStyle,
						...textStyle,
					}}
					className={bem(textClassName, childrenClassName, "UpperCase", "text")}
				/>
			)}
			{rightIcon && (
				<i
					children={rightIcon}
					className={bem(
						rightIconClassName,
						iconClassName,
						childrenClassName,
						"icon-right",
						"icon",
						materialIconClassName,
					)}
					style={{
						...childrenStyle,
						...iconStyle,
						...rightIconStyle,
					}}
				/>
			)}
		</Fragment>,
	);

export { PropTypes as ButtonPropTypes, ImageOptions as ButtonImageOptions };

export default Button;
