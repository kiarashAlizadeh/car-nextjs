import carsData from '../../Data/carsData';
import Categories from '../../components/module/Categories';
import SearchBar from '../../components/module/SearchBar';
import CarsPage from '../../components/template/CarsPage';
export default function Home() {
  return (
    <div>
      <SearchBar />
      <Categories />
      <CarsPage data={carsData} />
    </div>
  );
}
