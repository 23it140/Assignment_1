let weatherData = [
    { cityName: "New York", temperature: 25, condition: "Sunny" },
    { cityName: "London", temperature: 18, condition: "Cloudy" },
    { cityName: "Mumbai", temperature: 30, condition: "Rainy" },
];
function addCityWeather(cityName, temperature, condition) {
    weatherData.push({ cityName, temperature, condition });
}

const findHottestCity = () =>
    weatherData.reduce((hottest, city) => city.temperature > hottest.temperature ? city : hottest, weatherData[0]);

const filterByCondition = (condition) =>
    weatherData.filter(city => city.condition === condition);

const getCityNamesWithTemperatures = () =>
    weatherData.map(city => `City: ${city.cityName}, Temp: ${city.temperature}°C`);

const logWeatherSummary = () => {
    weatherData.forEach(({ cityName, temperature, condition }) => {
        console.log(`City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
    });
};

const logHottestCityDetails = () => {
    const { cityName, temperature, condition } = findHottestCity();
    console.log(`Hottest City: ${cityName}, Temp: ${temperature}°C, Condition: ${condition}`);
};

addCityWeather("Tokyo", 28, "Sunny");
console.log("\nHottest City Details:");
logHottestCityDetails();
console.log("\nCities with 'Sunny' Weather:");
console.log(filterByCondition("Sunny"));
console.log("\nCity Names with Temperatures:");
console.log(getCityNamesWithTemperatures());
console.log("\nWeather Summary:");
logWeatherSummary(); 