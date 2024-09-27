"use client";

export default function DataContainer({ files }) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-6">
        {files.map((file) => (
          <div
            key={file.fileName}
            className="rounded-lg p-4 shadow-md border-solid bg-black border-white border-2 w-44"
          >
            <div className="grid grid-rows-2 gap-2">
              <p className="text-lg font-semibold text-white">
                {file.fileName}
              </p>
              <p className="text-sm text-gray-600 text-white">
                {file.createdAt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
