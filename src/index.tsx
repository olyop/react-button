import Image from "@oly_op/react-image"
import { createBEM, BEMInput, BEMPropTypes } from "@oly_op/bem"
import { createElement, FC, Fragment, ButtonHTMLAttributes } from "react"

import "./index.scss"

const isUndefined =
	(value: unknown): value is undefined =>
		value === undefined

const bem = createBEM("Button")

const Button: FC<ButtonPropTypes> = ({
	icon,
	text,
	image,
	onClick,
	className,
	spanClassName,
	iconClassName,
	textClassName,
	imageClassName,
	transparent = false,
	...props
}) => (
	<button
		title={text}
		type="button"
		onClick={onClick}
		className={bem(
			className,
			icon && !text ? "square" : "PaddingLeftRightHalf",
			transparent ? "transparent" : null,
			"",
			"FlexListCenter Rounded",
		)}
		children={(
			<Fragment>
				{!isUndefined(icon) && (
					<i
						children={icon}
						className={bem(
							iconClassName,
							spanClassName,
							"icon",
							{ ignore: true, className: "material-icons" },
						)}
					/>
				)}
				{!isUndefined(image) && (
					<Image
						url={image}
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
						className={bem(
							textClassName,
							spanClassName,
							"text",
							"UpperCase",
						)}
					/>
				)}
			</Fragment>
		)}
		{...props}
	/>
)

type HTMLButtonPropTypes =
	Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">

export interface ButtonPropTypes extends BEMPropTypes, HTMLButtonPropTypes {
	icon?: string,
	text?: string,
	image?: string,
	transparent?: boolean,
	spanClassName?: BEMInput,
	iconClassName?: BEMInput,
	textClassName?: BEMInput,
	imageClassName?: BEMInput,
	onClick?: () => void | Promise<void>,
}

export default Button