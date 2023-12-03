#!/bin/bash

# Function to fetch weather data using the OpenWeatherMap API
get_weather() {
    local api_key="48dba0d5995cf6d06e338cdb97e39fe8"  
    local zipcode=$1

    # Check if zip code is provided
    if [ -z "$zipcode" ]; then
        echo "Error: Please provide a zip code with the -z option."
        return 1
    fi

    # Fetch weather data from the API using curl
    local url="http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=${api_key}&units=imperial"
    local weather_data=$(curl -s "$url")

    # Check if the API request was successful
    if [ "$(echo "$weather_data" | jq -r '.cod')" != "200" ]; then
        echo "Error: Unable to fetch weather data for zip code $zipcode."
        return 1
    fi

    # Parse JSON data using jq
    local city=$(echo "$weather_data" | jq -r '.name')
    local temp=$(echo "$weather_data" | jq -r '.main.temp')
    local description=$(echo "$weather_data" | jq -r '.weather[0].description')

    # Print the formatted weather data
    echo "Right now, the weather for $zipcode in $city is $description with a temperature of $temp °F — have a nice day!"
}

get_weather $1
 