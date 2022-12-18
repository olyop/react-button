import { BEMInput } from "@oly_op/bem";
import { ButtonHTMLAttributes, CSSProperties, ImgHTMLAttributes, ReactNode } from "react";

type HTMLPropTypes = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

interface StylePropTypes {
	iconStyle?: CSSProperties;
	textStyle?: CSSProperties;
	imageStyle?: CSSProperties;
	childrenStyle?: CSSProperties;
	leftIconStyle?: CSSProperties;
	rightIconStyle?: CSSProperties;
}

interface ClassNamePropTypes {
	className?: BEMInput;
	iconClassName?: BEMInput;
	textClassName?: BEMInput;
	imageClassName?: BEMInput;
	childrenClassName?: BEMInput;
	leftIconClassName?: BEMInput;
	rightIconClassName?: BEMInput;
}

export interface ImageOptions extends Pick<ImgHTMLAttributes<HTMLImageElement>, "crossOrigin"> {
	src: string;
	description: string;
}

interface Options {
	transparent?: boolean;
	isHTMLButton?: boolean;
}

interface Content {
	icon?: string;
	text?: ReactNode;
	rightIcon?: string;
	image?: ImageOptions;
}

export interface PropTypes
	extends Content,
		Options,
		HTMLPropTypes,
		StylePropTypes,
		ClassNamePropTypes {}
