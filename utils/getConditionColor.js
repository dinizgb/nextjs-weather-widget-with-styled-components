import { cloudyConditions, rainyConditions, snownyConditions  } from '/utils/conditionLists';

const getConditionColor = (condition, locationHour) => {
    let date = new Date(locationHour);
    let hour = date.getHours();
    let period = hour >= 6 && hour <= 18 ? "day" : "night";
    console.log("HOUR: ", hour);
    console.log("CONDITION: ", condition);
    console.log("PERIOD: ", period);

    if(condition == "Sunny"){
      return "#F98D14 url(/images/clouds-art-bg.png)";
    }
    else if(condition == "Clear" && period == "day"){
      return "#2D8EFE url(/images/clouds-art-bg.png)";
    }
    else if(condition == "Clear" && period == "night"){
      return "#103073 url(/images/night-art-bg.png)";
    }
    else if(cloudyConditions.includes(condition) && period == "day"){
      return "#9398a7 url(/images/clouds-art-bg.png)";
    }
    else if(cloudyConditions.includes(condition) && period == "night"){
      return "#303E57 url(/images/clouds-art-bg.png)";
    }
    else if(rainyConditions.includes(condition) && period == "day"){
      return "#226CBF url(/images/rain-art-bg.png)";
    }
    else if(rainyConditions.includes(condition) && period == "night"){
      return "#0F2F54 url(/images/snow-art-bg.png)";
    }
    else if(snownyConditions.includes(condition) && period == "day"){
      return "#8EBCDE url(/images/snow-art-bg.png)";
    }
    else if(snownyConditions.includes(condition) && period == "night"){
      return "#2D3D73 url(/images/snow-art-bg.png)";
    }
    else{
      return "#252525 url(/images/clouds-art-bg.png)";
    }
};

export default getConditionColor;