import Cards from './Cards';

export default function Dashboard() {
  return (
    <section className="flex h-screen">
      <div className="flex-1 p-6 mt-2 border flex justify-center flex-wrap gap-7">
        <Cards title="Total Sales" num={23} percentage={8.34} />
      </div>
    </section>
  );
}
