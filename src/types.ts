import {
	ReactNode,
	CSSProperties,
	ImgHTMLAttributes,
	ButtonHTMLAttributes,
} from "react"

import { BEMInput } from "@oly_op/bem"

type HTMLPropTypes =
	Omit<
		ButtonHTMLAttributes<HTMLButtonElement>,
		"className" | "title" | "children"
	>

interface StylePropTypes {
	iconStyle?: CSSProperties,
	textStyle?: CSSProperties,
	imageStyle?: CSSProperties,
	iconTextStyle?: CSSProperties,
	leftIconStyle?: CSSProperties,
	rightIconStyle?: CSSProperties,
}

interface ClassNamePropTypes {
	className?: BEMInput,
	iconClassName?: BEMInput,
	textClassName?: BEMInput,
	imageClassName?: BEMInput,
	iconTextClassName?: BEMInput,
	leftIconClassName?: BEMInput,
	rightIconClassName?: BEMInput,
}

export interface ImageOptions
	extends
	Pick<ImgHTMLAttributes<HTMLImageElement>, "crossOrigin"> {
	src: string,
	description: string,
}

export interface PropTypes
	extends
	HTMLPropTypes,
	StylePropTypes,
	ClassNamePropTypes {
	icon?: string,
	title?: string,
	text?: ReactNode,
	rightIcon?: string,
	image?: ImageOptions,
	transparent?: boolean,
}