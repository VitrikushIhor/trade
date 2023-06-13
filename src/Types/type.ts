export interface LinkProps { name: string; }
export interface LanguagesType {
	select: string;
	setSelect: (select: string) => void;
}

export interface TitleDescriptionProps {
	children?: string;
	className?: string;
}

export interface TradeWithTrustObjType {
	title: string;
	content: Array<TrustContentType>;
	btn1: string;
}

export interface TrustContentType {
	text: string;
	image: string;
}

export interface TakeControlObjType {
	title: string;
	description: string;
	content: Array<ContactType>;
	btn2: string;
	btn1: string;
	firstImage: string;
	secondImage: string;

}
export interface ContactType {
	title: string;
}



export interface Platforms {
	title: string;
	description: string;
	links: Array<PlatformsObj>;
}
export interface PlatformsObj {
	image: string;
	text: string;
}


export interface SupportObjType {
	title: string;
	btn: string;
	image: string;
}


export interface FooterObjType {
	title: string;
	description: string;
	subTitle: string;
	subDescription: string;
}


export interface AssociationObjType {
	title: string;
	description: string;
	links: Array<AssociationLinkType>;
}
export interface AssociationLinkType {
	title: string;
	description: string;
	subTitle: string;
}

export interface PaymentLinkType {
	img: string;
}
