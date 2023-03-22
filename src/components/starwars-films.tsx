import type { FunctionalComponent } from "preact";

const response = await fetch("https://swapi.dev/api/films/");
const data = await response.json();
const films = data.results;

type Props = unknown;
export const StarwarsFilms: FunctionalComponent<Props> = () => (
    <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        {//swapiからのスキーマがゲットできないためany型で型定義してます
        films.map((film: any) => (
            <li><a href={`${film.title}`}>{film.title}</a></li>
        ))}
    </ul>
);