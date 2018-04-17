class Weather {
  constructor(city, state) {
    this.apiKey = 'bdcd325e81a65b2b';
    this.city = city;
    this.state = state;
  }

  // fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`);
    const responseData = await response.json();

    return responseData.current_observation;
  }

  // change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}