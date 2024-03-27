import ProductWidgetList from '@/components/productWidgetList';

export type ProductData = {
  readonly id: number;
  readonly amount: number;
  linked: boolean;
  active: boolean;
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige';
  readonly type: 'carbon' | 'plastic bottles' | 'trees';
  readonly action: 'collects' | 'plants' | 'offsets';
};

const getWidgetsData = async (): Promise<ProductData[]> => {
  const res = await fetch(`${process.env.API_ENDPOINT_URL}/product-widgets`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

const Page = async () => {
  const data = await getWidgetsData();

  return (
    <main className="flex w-full h-full items-center justify-center p-8">
      <div className="shadow-2xl p-9 rounded-lg w-[851px] min-h-[419px] max-w-[90vw]">
        <h1
          className="font-[700] text-[30px] leading-[36px] text-center lg:text-start pb-1"
          role="heading"
        >
          Per product widgets
        </h1>
        <hr
          className="mt-2 mb-4 border-2 border-solid border-silver"
          role="separator"
        />
        <ProductWidgetList
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6 justify-center content-center"
          title="Product widget list"
          data={data}
        />
      </div>
    </main>
  );
};

export default Page;
