import Link from 'next/link';

function Navbar() {
  return (
    <Link href={'/'}>
      <nav className="bg-[#befa00] max-w-[440px] my-3 rounded-md text-3xl text-center mx-auto py-5 px-10">
        <h2 className="border-b-[1px] text-3xl border-black w-fit mx-auto pb-1 mb-3 font-bold">
          KIACAR
        </h2>
        <p className="text-base font-semibold">Choose and Buy your car</p>
      </nav>
    </Link>
  );
}

export default Navbar;
