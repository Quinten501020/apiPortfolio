type appDataDefinition = {
  navbarBrand: string;
  customRoutes:
    | [
        {
          id: number,
          itemName: string,
          itemPath: string,
          displayInNavbar: boolean,
        },
      ]
    | [];
}

export const appDataModel: appDataDefinition = {
  navbarBrand: 'vandervalkit.nl',
  customRoutes: [
    {
      id: 3,
      itemName: 'Home',
      itemPath: '/',
      displayInNavbar: true,
    },
  ],
};
