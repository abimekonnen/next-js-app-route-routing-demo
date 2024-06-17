import Image from "next/image";

export default function PictureDetail({params}) {
    const {id} = params
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>{`Picture ${id} Detail Page`}</h1>
    </div>
  );
}
