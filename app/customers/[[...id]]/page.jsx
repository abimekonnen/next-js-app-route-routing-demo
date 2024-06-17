import Image from "next/image";

export default function CustomerDetail({params}) {
    const {id} = params
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{`Customer ${id} Detail Page`}</h1>
    </div>
  );
}
