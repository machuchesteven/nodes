import React from "react";

import { FcGraduationCap } from "react-icons/fc";
import { EducationCardProps } from "../../utils/types";
import { BiDownload } from "react-icons/bi";
const EducationCard: React.FC<EducationCardProps> = ({
  tagText,
  header,
  date,
  icon,
}) => {
  if (icon === undefined) {
    icon = <FcGraduationCap />;
  }
  return (
    <li className="mb-10 ms-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        {icon}
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        {header}
        {tagText && (
          <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">
            {tagText}
          </span>
        )}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-900 dark:text-gray-900">
        Completed in {date}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Wasifu wa mwanasheria
      </p>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <BiDownload className="w-3.5 h-3.5 me-2.5" />
        Download ZIP
      </a>
    </li>
  );
};

export default EducationCard;
