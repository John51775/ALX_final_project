export default function Header() {
  return (
    <header className="bg-indigo-500 shadow-md py-6">
      <div className="px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white tracking-wide">
          Flex Recipe Finder
        </h1>
        <p className="text-indigo-100 mt-2 text-sm md:text-base">
          Discover delicious meals from around the world
        </p>
      </div>
    </header>
  );
}