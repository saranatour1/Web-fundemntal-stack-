use world;


/*select country.name ,countrylanguage.Language, countrylanguage.Percentage from country
left join countrylanguage  ON country.code=CountryCode
where Language='Slovene' 
ORDER BY countrylanguage.Percentage desc;*/
/*SELECT country.name, COUNT(cities.id) AS city_count
FROM country
LEFT JOIN cities ON country.Code = cities.country_code
GROUP BY country.name
ORDER BY city_count DESC;*/
/*SELECT country.name,cities.name,cities.population  from country
LEFT JOIN cities ON country.Code = cities.country_code
where country.name='Mexico' AND cities.population > 500000 
ORDER BY cities.population  DESC ;*/
/*SELECT country.name, countrylanguage.Language, countrylanguage.Percentage from country
LEFT JOIN countrylanguage ON country.Code = countrylanguage.CountryCode
where countrylanguage.Percentage> 0.89 
ORDER BY countrylanguage.Percentage  DESC ;*/
/*select country.name, country.SurfaceArea ,country.Population from country
where SurfaceArea < 501 and Population > 100000;*/
/*select name, GovernmentForm ,Capital,LifeExpectancy from country 
where GovernmentForm='Constitutional Monarchy' AND Capital >200 AND  LifeExpectancy > 75; */
/*select cities.name, country.name, cities.district ,cities.population from country
left join cities on country.Code =cities.country_code
where country.name='Argentina' and cities.district='Buenos Aires' AND cities.population>500000;*/
/*SELECT region, COUNT(*) AS country_count
FROM country
GROUP BY region
ORDER BY country_count DESC;*/
