import PrimaryButton from "@/src/app/components/PrimaryButton";

async function getData() {
  const res = await fetch("http://localhost:3001/users");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const data: { name: string }[] = await getData();

  return (
    <main>
      <div>hoge</div>
      <div>
        <PrimaryButton>Primary</PrimaryButton>
      </div>
      {data && data.map((item, idx) => <div key={idx}>{item.name}</div>)}
    </main>
  );
}
