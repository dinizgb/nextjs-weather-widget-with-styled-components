import { cloudyConditions, rainyConditions, snownyConditions  } from '/utils/conditionLists';

const getConditionColor = (condition, locationHour) => {
    let date = new Date(locationHour);
    let hour = date.getHours();
    let period = hour >= 6 && hour <= 18 ? "day" : "night";
    console.log("HOUR: ", hour);
    console.log("CONDITION: ", condition);
    console.log("PERIOD: ", period);

    if(condition == "Sunny"){
      return "#173A5E url(/gifs/sunny-day.gif)";
    }
    else if(condition == "Clear" && period == "day"){
      return "#173A5E url(/gifs/clear-day.gif)";
    }
    else if(condition == "Clear" && period == "night"){
      return "#173A5E url(/gifs/clear-night.gif)";
    }
    else if(cloudyConditions.includes(condition) && period == "day"){
      return "#173A5E url(/gifs/cloudy-day.gif)";
    }
    else if(cloudyConditions.includes(condition) && period == "night"){
      return "#173A5E url(/gifs/cloudy-night.gif)";
    }
    else if(rainyConditions.includes(condition) && period == "day"){
      return "#173A5E url(/gifs/rainy.gif)";
    }
    else if(rainyConditions.includes(condition) && period == "night"){
      return "#173A5E url(/gifs/rainy-night.png)";
    }
    else if(snownyConditions.includes(condition) && period == "day"){
      return "#173A5E url(/gifs/snowy-day.gif)";
    }
    else if(snownyConditions.includes(condition) && period == "night"){
      return "#173A5E url(/gifs/snowy-night.gif)";
    }
    else{
      return "#173A5E url(/gifs/clear-day.gif)";
    }
};

export default getConditionColor;