"use client";

import DataContainer from "./components/dataContainer";
import Select from "./components/select";
import useDataController from "./controllers/dataController";

export default function Home() {
  const { files, onChange } = useDataController();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Select onChange={onChange} />
      <DataContainer files={files} />
    </div>
  );
}
