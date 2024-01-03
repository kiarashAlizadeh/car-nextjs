import { useRouter } from 'next/router';
import CarsList from '../../components/template/CarsList';
import carsData from '../../Data/carsData';

function FilteredCars() {
  const router = useRouter();

  let [min, max] = [];
  if (router.query.slug && Array.isArray(router.query.slug)) {
    [min, max] = router.query.slug.map(Number);
  }
  console.log(typeof min);
  const filteredData = carsData.filter(
    (item) => item.price > min && item.price < max
  );

  if (!filteredData.length) return <h3>NotFound</h3>;
  return <CarsList data={filteredData} />;
}

export default FilteredCars;
