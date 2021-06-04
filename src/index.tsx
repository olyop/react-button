import { createElement, FC, Fragment } from "react"
import { createBem, BemInput, BemPropTypes } from "@oly_op/bem"

import "./index.scss"

const bem = createBem("Button")

const Button: FC<ButtonPropTypes> = ({
	icon,
	text,
	onClick,
	tabIndex,
	disabled,
	className,
	spanClassName,
	iconClassName,
	textClassName,
}) => (
	<button
		title={text}
		type="button"
		onClick={onClick}
		disabled={disabled}
		tabIndex={tabIndex}
		className={bem(className, "", "flex-list-center rounded")}
		children={(
			<Fragment>
				{icon && (
					<i
						children={icon}
						className={bem(
							iconClassName,
							spanClassName,
							"Icon",
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
							"Text",
							"button",
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
	spanClassName?: BemInput,
	iconClassName?: BemInput,
	textClassName?: BemInput,
	onClick?: () => void | Promise<void>,
}

export default Button