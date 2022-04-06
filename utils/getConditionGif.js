import { cloudyConditions, rainyConditions, snownyConditions  } from '/utils/conditionLists';

const getConditionColor = (condition, locationHour) => {
    let date = new Date(locationHour);
    let hour = date.getHours();
    let period = hour >= 6 && hour <= 18 ? "day" : "night";
    console.log("HOUR: ", hour);
    console.log("CONDITION: ", condition);
    console.log("PERIOD: ", period);

    if(condition == "Sunny"){
      return "#F98D14 url(/gifs/sunny-day.gif)";
    }
    else if(condition == "Clear" && period == "day"){
      return "#2D8EFE url(/gifs/clear-day.gif)";
    }
    else if(condition == "Clear" && period == "night"){
      return "#103073 url(/gifs/clear-night.gif)";
    }
    else if(cloudyConditions.includes(condition) && period == "day"){
      return "#9398a7 url(/gifs/cloudy-day.gif)";
    }
    else if(cloudyConditions.includes(condition) && period == "night"){
      return "#303E57 url(/gifs/cloudy-night.gif)";
    }
    else if(rainyConditions.includes(condition) && period == "day"){
      return "#226CBF url(/gifs/rainy.gif)";
    }
    else if(rainyConditions.includes(condition) && period == "night"){
      return "#0F2F54 url(/gifs/rainy-night.png)";
    }
    else if(snownyConditions.includes(condition) && period == "day"){
      return "#8EBCDE url(/gifs/snowy-day.gif)";
    }
    else if(snownyConditions.includes(condition) && period == "night"){
      return "#2D3D73 url(/gifs/snowy-night.gif)";
    }
    else{
      return "#252525 url(/gifs/clear-day.gif)";
    }
};

export default getConditionColor;