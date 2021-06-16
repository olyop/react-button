import { createBEM, BEMInput, BEMPropTypes } from "@oly_op/bem"
import { createElement, FC, Fragment, ButtonHTMLAttributes } from "react"

import "./index.scss"

const bem = createBEM("Button")

const Button: FC<ButtonPropTypes> = ({
	icon,
	text,
	onClick,
	className,
	spanClassName,
	iconClassName,
	textClassName,
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
				{icon && (
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

type HTMLButtonPropTypes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className">

export interface ButtonPropTypes extends BEMPropTypes, HTMLButtonPropTypes {
	icon?: string,
	text?: string,
	transparent?: boolean,
	spanClassName?: BEMInput,
	iconClassName?: BEMInput,
	textClassName?: BEMInput,
	onClick?: () => void | Promise<void>,
}

export default Button