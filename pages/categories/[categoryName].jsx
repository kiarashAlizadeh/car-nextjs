import { useRouter } from 'next/router';

import CarsList from '../../components/template/CarsList';
import carsData from '../../Data/carsData';

function CarCategory() {
  const router = useRouter();
  const carCategory = router.query.categoryName;
  const Cars = carsData.filter((car) => car.category === carCategory);

  return <CarsList data={Cars} />;
}

export default CarCategory;
