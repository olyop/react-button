import {
	FC,
	ReactNode,
	createElement,
	CSSProperties,
	ImgHTMLAttributes,
	ButtonHTMLAttributes,
} from "react"

import { createBEM, BEMInput } from "@oly_op/bem"

import "./index.scss"

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
	spanStyle,
	iconStyle,
	textStyle,
	imageStyle,
	spanClassName,
	iconClassName,
	textClassName,
	leftIconStyle,
	imageClassName,
	rightIconStyle,
	rightIconClassName,
	transparent = false,
	...props
}) => (
	<button
		type="button"
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
					...spanStyle,
					...iconStyle,
					...leftIconStyle,
				}}
				className={bem(
					iconClassName,
					spanClassName,
					"icon-left",
					"icon",
					{ ignore: true, className: "material-icons" },
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
					spanClassName,
					"icon",
				)}
			/>
		)}
		{text && (
			<span
				children={text}
				style={{
					...spanStyle,
					...textStyle,
				}}
				className={bem(
					textClassName,
					spanClassName,
					"text",
					"UpperCase",
				)}
			/>
		)}
		{rightIcon && (
			<i
				children={rightIcon}
				style={{
					...spanStyle,
					...iconStyle,
					...rightIconStyle,
				}}
				className={bem(
					rightIconClassName,
					spanClassName,
					"icon-right",
					"icon",
					{ ignore: true, className: "material-icons" },
				)}
			/>
		)}
	</button>
)

type HTMLButtonPropTypes =
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style" | "className" | "title" | "onClick">

interface ButtonStylePropTypes {
	style?: CSSProperties,
	textStyle?: CSSProperties,
	iconStyle?: CSSProperties,
	spanStyle?: CSSProperties,
	imageStyle?: CSSProperties,
	leftIconStyle?: CSSProperties,
	rightIconStyle?: CSSProperties,
}

interface ButtonClassNamePropTypes {
	className?: BEMInput,
	spanClassName?: BEMInput,
	iconClassName?: BEMInput,
	textClassName?: BEMInput,
	imageClassName?: BEMInput,
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
	transparent?: boolean,
	image?: ButtonImageOptions,
	onClick?: () => void | Promise<void>,
}

export default Button