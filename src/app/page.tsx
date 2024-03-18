export type ProductData = {
  readonly id: number;
  readonly amount: number;
  linked: boolean;
  active: boolean;
  selectedColor: 'white' | 'black' | 'blue' | 'green' | 'beige';
  readonly type: 'carbon' | 'plastic bottles' | 'trees';
  readonly action: 'collects' | 'plants' | 'offsets';
};

export default function Home() {
  return <main>greenspark-task</main>;
}
