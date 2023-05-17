import dealsData from "./deals.json";
import { NextRequest, NextResponse } from "next/server";
import type { Deal } from "../../types/types";
import { parseFilters, applyFilters } from "../../utils/utils";

const deals: Deal[] = dealsData as Deal[];

export function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const queryString = searchParams.get("q");

  // Se parsea la query string para obtener los filtros
  const filters = parseFilters(queryString);

  // Se aplican los filtros al array de deals
  const filteredDeals = applyFilters(deals, filters);

  return NextResponse.json(filteredDeals);
}

