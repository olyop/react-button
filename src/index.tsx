import {
	FC,
	ReactNode,
	createElement,
	CSSProperties,
	ButtonHTMLAttributes,
} from "react"

import Image from "@oly_op/react-image"
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
		{...props}
		className={bem(
			className,
			icon && !text ? "square" : undefined,
			transparent ? "transparent" : null,
			"",
			"FlexRowCenter Rounded",
		)}
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
			<Image
				url={image}
				className={bem(
					imageClassName,
					spanClassName,
					"image",
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

export interface ButtonPropTypes
	extends
	HTMLButtonPropTypes,
	ButtonStylePropTypes,
	ButtonClassNamePropTypes {
	icon?: string,
	image?: string,
	title?: string,
	text?: ReactNode,
	rightIcon?: string,
	transparent?: boolean,
	onClick?: () => void | Promise<void>,
}

export default Button