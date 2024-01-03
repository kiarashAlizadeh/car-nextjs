import { useRouter } from 'next/router';
import CarDetails from '../../components/template/CarDetails';
import carsData from '../../Data/carsData';

function CarDetail() {
  const router = useRouter();
  const carId = router.query.carID;
  const carDetails = carsData[carId - 1];

  return <CarDetails {...carDetails} />;
}

export default CarDetail;
