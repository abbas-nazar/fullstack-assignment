"use client";
import { SORT_OPTIONS } from "../constant";

export default function DataContainer({ onChange }) {
  return (
    <div>
      <select
        onChange={(e) => onChange(e)}
        id="options"
        className="bg-black border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 text-white focus:border-blue-500 block w-full p-2.5"
      >
        <option value={""} disabled>
          Select
        </option>
        <option value={SORT_OPTIONS.SORT_BY_CREATED_AT}>
          sort by created at
        </option>
        <option value={SORT_OPTIONS.SORT_BY_FILENAME_ASC}>
          sort by filename ascendent
        </option>
        <option value={SORT_OPTIONS.SORT_BY_FILENAME_DSC}>
          sort by filename descendent
        </option>
      </select>
    </div>
  );
}
