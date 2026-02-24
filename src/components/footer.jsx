export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-indigo-600 text-white py-4 mt-10">
      <div className="text-center text-sm md:text-base">
        © {currentYear} John Ngugi. All rights reserved.
      </div>
    </footer>
  );
}