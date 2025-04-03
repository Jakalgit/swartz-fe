
export enum PopupEnum {
	REQUEST,
}

export interface IPopupState {
	popup: PopupEnum | null;
}

export interface IMenuState {
	isOpen: boolean;
}