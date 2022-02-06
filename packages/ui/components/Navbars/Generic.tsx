export const GenericNavbar = (): JSX.Element => {
  return (
    <nav className="fixed top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 bg-white shadow navbar-expand-lg">
      <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
        <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex items-center text-2xl font-black text-gray-800 uppercase align-middle dark:text-white">
            Client - GraphQL
          </div>
        </div>
      </div>
    </nav>
  );
};
