import Image from "@oly_op/react-image"
import { createBEM, BEMInput } from "@oly_op/bem"
import { createElement, FC, Fragment, ButtonHTMLAttributes } from "react"

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
	spanClassName,
	iconClassName,
	textClassName,
	imageClassName,
	rightIconClassName,
	transparent = false,
	...props
}) => (
	<button
		type="button"
		onClick={onClick}
		title={title || text}
		{...props}
		className={bem(
			className,
			icon && !text ? "square" : "PaddingLeftRightHalf",
			transparent ? "transparent" : null,
			"",
			"FlexRowCenter Rounded",
		)}
		children={(
			<Fragment>
				{icon && (
					<i
						children={icon}
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
						className={bem(
							textClassName,
							spanClassName,
							"text",
							"BodyTwo UpperCase",
						)}
					/>
				)}
				{rightIcon && (
					<i
						children={rightIcon}
						className={bem(
							rightIconClassName,
							spanClassName,
							"icon-right",
							"icon",
							{ ignore: true, className: "material-icons" },
						)}
					/>
				)}
			</Fragment>
		)}
	/>
)

type HTMLButtonPropTypes =
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "title">

export interface ButtonPropTypes extends HTMLButtonPropTypes {
	icon?: string,
	text?: string,
	image?: string,
	title?: string,
	rightIcon?: string,
	className?: BEMInput,
	transparent?: boolean,
	spanClassName?: BEMInput,
	iconClassName?: BEMInput,
	textClassName?: BEMInput,
	imageClassName?: BEMInput,
	rightIconClassName?: BEMInput,
	onClick?: () => void | Promise<void>,
}

export default Button