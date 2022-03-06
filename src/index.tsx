import {
	FC,
	ReactNode,
	createElement,
	CSSProperties,
	ImgHTMLAttributes,
	ButtonHTMLAttributes,
} from "react"

import { createBEM, BEMInput, BEMClassType } from "@oly_op/bem"

import "./index.scss"

const materialIconClassName: BEMClassType =
	{ ignore: true, className: "material-icons" }

const isString =
	(value: unknown): value is string =>
		typeof value === "string"

const bem =
	createBEM("Button")

const Button: FC<ButtonPropTypes> = ({
	icon,
	text,
	image,
	title,
	onClick,
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
	type = "button",
	leftIconClassName,
	iconTextClassName,
	rightIconClassName,
	transparent = false,
	...props
}) => (
	<button
		// eslint-disable-next-line react/button-has-type
		type={type}
		onClick={onClick}
		title={title || (isString(text) ? text : undefined)}
		className={bem(
			className,
			icon && !text ? "square" : undefined,
			transparent ? "transparent" : null,
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
				style={imageStyle}
				alt={image.description}
				crossOrigin={image.crossOrigin || "anonymous"}
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

type HTMLButtonPropTypes =
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "className" | "title" | "onClick">

interface ButtonStylePropTypes {
	iconStyle?: CSSProperties,
	textStyle?: CSSProperties,
	imageStyle?: CSSProperties,
	iconTextStyle?: CSSProperties,
	leftIconStyle?: CSSProperties,
	rightIconStyle?: CSSProperties,
}

interface ButtonClassNamePropTypes {
	className?: BEMInput,
	iconClassName?: BEMInput,
	textClassName?: BEMInput,
	imageClassName?: BEMInput,
	iconTextClassName?: BEMInput,
	leftIconClassName?: BEMInput,
	rightIconClassName?: BEMInput,
}

export interface ButtonImageOptions
	extends Pick<ImgHTMLAttributes<HTMLImageElement>, "crossOrigin"> {
	src: string,
	description: string,
}

export interface ButtonPropTypes
	extends
	HTMLButtonPropTypes,
	ButtonStylePropTypes,
	ButtonClassNamePropTypes {
	icon?: string,
	title?: string,
	text?: ReactNode,
	rightIcon?: string,
	onClick?: () => void,
	transparent?: boolean,
	image?: ButtonImageOptions,
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"],
}

export default Button