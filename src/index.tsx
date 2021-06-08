import { createBem, BemInput, BemPropTypes } from "@oly_op/bem"
import { createElement, CSSProperties, FC, Fragment } from "react"

import "./index.scss"

const bem = createBem("Button")

const Button: FC<ButtonPropTypes> = ({
	icon,
	text,
	style,
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
		style={style}
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
	style?: CSSProperties,
	transparent?: boolean,
	spanClassName?: BemInput,
	iconClassName?: BemInput,
	textClassName?: BemInput,
	onClick?: () => void | Promise<void>,
}

export default Button