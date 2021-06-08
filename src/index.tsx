import { createBem, BemInput } from "@oly_op/bem"
import { createElement, FC, Fragment, ButtonHTMLAttributes } from "react"

import "./index.scss"

const bem = createBem("Button")

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
			icon && !text ? "square" : null,
			transparent ? "transparent" : null,
			"",
			"FlexListCenter PaddingHalf Rounded",
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
						)}
					/>
				)}
			</Fragment>
		)}
		{...props}
	/>
)

export interface ButtonPropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: string,
	text?: string,
	transparent?: boolean,
	spanClassName?: BemInput,
	iconClassName?: BemInput,
	textClassName?: BemInput,
	onClick?: () => void | Promise<void>,
}

export default Button