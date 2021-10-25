const title = "How to get 1 million subscribers in a youtube channel?";
const routeGenerator = title => {
  const route = title
    .toLowerCase()
    .replace(/\s+/g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[¿?|¡!"#$%&/()=]+/g, "");
  console.log(route);
  return route;
};
routeGenerator(title);

module.exports = {
  routeGenerator,
};
