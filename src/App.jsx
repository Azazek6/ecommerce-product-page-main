import Header from "./components/Header";
import FirtsContent from "./components/Content/FirtsContent";
import SecondContent from "./components/Content/SecondContent";

const App = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:h-[75vh] lg:px-32 xl:px-52 lg:gap-10">
        <FirtsContent />
        <SecondContent />
      </main>
    </>
  );
};

export default App;
