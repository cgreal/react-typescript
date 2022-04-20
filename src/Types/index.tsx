/*declare global {
    interface Window {
        dataLayer: undefined | ObjectWithId[];
        DocumentTouch: undefined | ObjectWithId[];
        userGuiding: undefined | { identify: (id: number) => unknown };
    }
}*/
export type ProductListItem = {
    id: string;
    title: string;
    subTitle: null | string;
    icon: null | string;
    link?: null | string;
};

export type ProductListProps = ProductListItem[];

/*
  redux store
 */
//
/*export type IRootStore = {
    user: IUser;
    auth: IAuth;
    global: null;
};*/

// redux store.auth

/*
export type IAuthData = {
    token: string;
    tokenExpirationDate: string;
    userType: number;
};
*/

/**
 *  Utils types
 */
