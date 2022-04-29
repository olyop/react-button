import { FC, createElement } from "react"
import { createBEM, BEMClassType } from "@oly_op/bem"

import { PropTypes, ImageOptions } from "./types"

import "./index.scss"

const materialIconClassName: BEMClassType = {
	ignore: true,
	className: "material-icons",
}

const isString =
	(value: unknown): value is string =>
		typeof value === "string"

const bem =
	createBEM("Button")

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
	iconTextStyle,
	imageClassName,
	rightIconStyle,
	leftIconClassName,
	iconTextClassName,
	rightIconClassName,
	transparent = false,
	...props
}) => (
	<button
		type="button"
		title={title || (
			isString(text) ? text : undefined
		)}
		className={bem(
			className,
			icon && !text && "square",
			transparent && "transparent",
			"",
			"FlexRowCenter Rounded",
		)}
		{...props}
	>
		{icon && (
			<i
				children={icon}
				style={{
					...iconTextStyle,
					...iconStyle,
					...leftIconStyle,
				}}
				className={bem(
					leftIconClassName,
					iconClassName,
					iconTextClassName,
					"icon-left",
					"icon",
					materialIconClassName,
				)}
			/>
		)}
		{image && (
			<img
				src={image.src}
				alt={image.description}
				crossOrigin={image.crossOrigin || "anonymous"}
				style={{
					...iconTextStyle,
					...imageStyle,
				}}
				className={bem(
					imageClassName,
					iconTextClassName,
					"icon",
				)}
			/>
		)}
		{text && (
			<span
				children={text}
				style={{
					...iconTextStyle,
					...textStyle,
				}}
				className={bem(
					textClassName,
					iconTextClassName,
					"UpperCase",
					"text",
				)}
			/>
		)}
		{rightIcon && (
			<i
				children={rightIcon}
				style={{
					...iconTextStyle,
					...iconStyle,
					...rightIconStyle,
				}}
				className={bem(
					rightIconClassName,
					iconClassName,
					iconTextClassName,
					"icon-right",
					"icon",
					materialIconClassName,
				)}
			/>
		)}
	</button>
)

export {
	PropTypes as ButtonPropTypes,
	ImageOptions as ButtonImageOptions,
}

export default Button