const resolveRoutes = (route) => {
  if (route.length <= 3) {
    let validRoute = route === "/cientifico" ? route : "/:id";
    return validRoute;
  }
  return `/${route}`;
};

export default resolveRoutes;
