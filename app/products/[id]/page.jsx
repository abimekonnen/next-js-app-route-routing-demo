import Image from "next/image";

export default function Products({params}) {
    const {id} = params
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{`Products ${id} Detail Page`}</h1>
    </div>
  );
}
