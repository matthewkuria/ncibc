const nations = [
  "Ethiopia", "Nigeria", "India", "Zambia", "Zimbabwe", "Holland",
  "Norway", "South Africa", "Rwanda", "Botswana", "Mozambique",
  "Uganda", "Democratic Republic of Congo", "Somalia",
  "United States of America", "Tanzania", "South Sudan",
  "United Kingdom", "Kenya",
];

export default function NationsList() {
  return (
    <ul className="columns-2 gap-x-8 font-display text-lg italic leading-loose text-parchment/90 sm:columns-3 md:columns-4">
      {nations.map((n) => (
        <li key={n} className="break-inside-avoid">
          {n}
        </li>
      ))}
    </ul>
  );
}
