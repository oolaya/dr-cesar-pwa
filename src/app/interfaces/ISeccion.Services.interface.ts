export interface ISeccionServices {
    _id: number;
    active: boolean;
    label: string;
    title: string;
    technique: string;
    other: string;
    icon: string;
    path: string;
    fill: string;
    image: string;
    class: string;
    idLottie:string;
    resourceJson: string;
    content: ISeccionContentServices;
}

export interface ISeccionContentServices {
    _id: number;
    image: string;
    class: string;
    body: string;
    type: string;
}