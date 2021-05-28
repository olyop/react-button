import { createElement, FC, Fragment } from "react"
import { createBem, BemInput, BemPropTypes } from "@oly_op/bem"

import "./index.scss"

const bem = createBem("Button")

const Button: FC<PropTypes> = ({
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
		className={bem(className, "")}
		children={(
			<Fragment>
				<i
					children={icon}
					className={bem(
						iconClassName,
						spanClassName,
						"icon",
						{ ignore: true, className: "material-icons" },
					)}
				/>
				{icon && text && (
					<div className={bem("spacer")}/>
				)}
				<span
					children={text}
					className={bem(
						textClassName,
						spanClassName,
						"text",
					)}
				/>
			</Fragment>
		)}
	/>
)

interface PropTypes extends BemPropTypes {
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