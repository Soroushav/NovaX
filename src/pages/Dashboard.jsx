import DashboardLatestTvShow from "../features/dashboard/DashboardLatestTvShows";
import DashboardTrending from "../features/dashboard/DashboardTrending";
function Dashboard() {
  return (
    <div>
      <DashboardLatestTvShow />
      <DashboardTrending />
    </div>
  );
}

export default Dashboard;
