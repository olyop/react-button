import { createElement, FC, Fragment } from "react"
import { createBem, BemInput, BemPropTypes } from "@oly_op/bem"

import "./index.scss"

const bem = createBem("ReactButton")

const Button: FC<ButtonPropTypes> = ({
	icon,
	text,
	onClick,
	tabIndex,
	className,
	spanClassName,
	iconClassName,
	textClassName,
	disabled = false,
	transparent = false,
}) => (
	<button
		title={text}
		type="button"
		onClick={onClick}
		disabled={disabled}
		tabIndex={tabIndex}
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
	/>
)

export interface ButtonPropTypes extends BemPropTypes {
	icon?: string,
	text?: string,
	tabIndex?: number,
	disabled?: boolean,
	transparent?: boolean,
	spanClassName?: BemInput,
	iconClassName?: BemInput,
	textClassName?: BemInput,
	onClick?: () => void | Promise<void>,
}

export default Button