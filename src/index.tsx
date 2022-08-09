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
	childrenStyle,
	imageClassName,
	rightIconStyle,
	leftIconClassName,
	childrenClassName,
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
					...childrenStyle,
					...iconStyle,
					...leftIconStyle,
				}}
				className={bem(
					leftIconClassName,
					iconClassName,
					childrenClassName,
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
					...childrenStyle,
					...imageStyle,
				}}
				className={bem(
					imageClassName,
					childrenClassName,
					"icon",
				)}
			/>
		)}
		{text && (
			<span
				children={text}
				style={{
					...childrenStyle,
					...textStyle,
				}}
				className={bem(
					textClassName,
					childrenClassName,
					"UpperCase",
					"text",
				)}
			/>
		)}
		{rightIcon && (
			<i
				children={rightIcon}
				style={{
					...childrenStyle,
					...iconStyle,
					...rightIconStyle,
				}}
				className={bem(
					rightIconClassName,
					iconClassName,
					childrenClassName,
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