import Card from '../module/Card';

function CarsPage({ data }) {
  return (
    <>
      <div className="flex flex-wrap justify-around max-w-[1200px] m-auto">
        {data.map((car, index) => (
          <Card key={index} {...car} />
        ))}
      </div>
    </>
  );
}

export default CarsPage;
