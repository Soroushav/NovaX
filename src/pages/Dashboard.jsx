import DashboardLatestTvShow from "../features/dashboard/DashboardLatestTvShows";
import DashboardTrending from "../features/dashboard/DashboardTrending";
function Dashboard() {
  return (
    <div className="px-12">
      <DashboardLatestTvShow />
      <DashboardTrending />
    </div>
  );
}

export default Dashboard;
