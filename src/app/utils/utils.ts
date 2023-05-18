import type { Deal, Filter } from "../types/types";

export function parseFilters(queryString: string | null): Filter[] {
  const filters: Filter[] = [];
  const operators = ["=", ":", ">", "<"];

  if (queryString) {
    // Se separan los filtros por coma
    const filterStrings = queryString.split(",");
    console.log("filterStrings", filterStrings);

    // Se itera sobre cada filtro
    for (const filterString of filterStrings) {
      // Utilizando una expresión regular, se separa el filtro en propiedad, operador y valor
      const [property, operator, value] = filterString.split(
        new RegExp(`\\s*(${operators.join("|")})\\s*`)
      );

      filters.push({ property, operator, value });
    }
  }

  return filters;
}

export function applyFilters(deals: Deal[], filters: Filter[]): Deal[] {
  const filteredDeals: Deal[] = [];

  // Se itera sobre cada deal
  for (const deal of deals) {
    let match = true;

    for (const filter of filters) {
      const { property, operator, value } = filter;

      // Por defecto se usa la propiedad "title" y el operador ":"
      const op = operator || ":";
      const prop = property.toLowerCase().replace(" ", "");

      // Se itera sobre cada filtro y se aplica el operador correspondiente
      switch (op) {
        case "=": // Si el operador es "=", y la propiedad es "title", se compara el título exacto
          if (prop === "title") {
            if (deal.title !== value) {
              match = false;
            }
          }
          break;
        case ":": // Si el operador es ":", y la propiedad es "title", se compara el título incluyendo el valor
          if (prop === "title") {
            if (!deal.title.toLowerCase().includes(value.toLowerCase())) {
              match = false;
            }
          }
          break;
        case ">": // Si el operador es ">", y la propiedad es "saleprice", se compara el precio de oferta
          if (prop === "saleprice") {
            if (parseFloat(deal.salePrice) <= parseFloat(value)) {
              match = false;
            }
          }
          break;
        case "<": // Si el operador es "<", y la propiedad es "saleprice", se compara el precio de oferta
          if (prop === "saleprice") {
            if (parseFloat(deal.salePrice) >= parseFloat(value)) {
              match = false;
            }
          }
          break;
        default:
          // Por defecto se devuelve un array vacío si no se especifica un operador válido
          return [];
      }

      if (!match) {
        break; // Si no hay match, se corta el loop
      }
    }

    // Si hay match, se agrega el deal al array de deals filtrados
    if (match) {
      filteredDeals.push(deal);
    }
  }

  // Se devuelve el array de deals filtrados
  return filteredDeals;
}

// Calculate the discount percentage for a deal
export const calculateDiscountPercentage = (deal: Deal) => {
  const salePrice = parseFloat(deal.salePrice);
  const normalPrice = parseFloat(deal.normalPrice);
  if (salePrice && normalPrice && normalPrice > 0) {
    const discountPercentage =
      ((normalPrice - salePrice) / normalPrice) * 100;
    return Math.round(discountPercentage);
  }
  return 0;
};

export const calculateStarRating = (deal: Deal) => {
  const steamRatingPercent = parseFloat(deal.steamRatingPercent);
  if (steamRatingPercent >= 90) {
    return 5;
  } else if (steamRatingPercent >= 80) {
    return 4;
  } else if (steamRatingPercent >= 70) {
    return 3;
  } else if (steamRatingPercent >= 60) {
    return 2;
  } else {
    return 1;
  }
}