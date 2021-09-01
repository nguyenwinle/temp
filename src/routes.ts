const overview = '/overview';
const correlations = '/correlations';
const scenarios = '/scenarios';
const historicalScenariosAnalysis = '/scenarios/historical';
const marketsStressScenariosAnalysis = '/scenarios/market-stress';
const positionDetails = '/positions-details';

export const paths = {
  correlations,
  historicalScenariosAnalysis,
  marketsStressScenariosAnalysis,
  overview,
  positionDetails,
  scenarios,
};

export const routes = {
  getCorrelationsRoute: () => correlations,
  getHistoricalScenariosAnalysisRoute: () => historicalScenariosAnalysis,
  getMarketStressScenariosAnalysisRoute: () => marketsStressScenariosAnalysis,
  getOverviewRoute: () => overview,
  getPositionDetailsRoute: () => positionDetails,
  getScenariosRoute: () => scenarios,
};
