(function(){

var classApp = angular.module("weatherApp", []);

classApp.controller("weatherCtrl", function($http){
       var vm = this;
		vm.channelInfo = {
     	heading : "open weather API",
     	subheading1:"Free code camp : Front End Projects",
     	subheading2:{
     		name : "checkout my youtube channel",
     		link: "http://htmlcolorcodes.com/"
     	            }
                  };

        $http.get("http://ip-api.com/json").then(function(response)
        {
          vm.lat = response.data.lat;
          vm.lon = response.data.lon;
           var apiKey = "38d72396b7c17ed8254c3ec57cfcf3e5";
           var openWeatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat="+vm.lat+"&lon="+vm.lon+"&appid="+apiKey;
           console.log(openWeatherUrl);

	           $http.get(openWeatherUrl).then(function(response)
	           {
	           	    vm.description = response.data.weather[0].description;
                  vm.speed =  (2.237*response.data.wind.speed).toFixed(1) +" mph";
                  vm.name = response.data.name;
                  vm.temp = response.data.main.temp;
                  vm.fTemp = (vm.temp*(9/5)-459.67).toFixed(1)+ " (`F)";
                  vm.cTemp = (vm.temp-273).toFixed(1)+ " (`C)";
                  vm.icon ="https://openweathermap.org/img/w/"+response.data.weather[0].icon+".png";
                  
                  switch(vm.description)
                  {
                    case 'scattered cloudss':{
                              vm.weatherBackground = {
                                       "background-image": "url(https://static.pexels.com/photos/417105/pexels-photo-417105.jpeg)",
                                        "background-size": "cover"
                                                      };
                                             
                                        break;
                                        }
                     default:
                     vm.weatherBackground = {
                                       "background-image": "url(https://static.pexels.com/photos/373524/pexels-photo-373524.jpeg)",
                                        "background-size": "cover"
                                                      };
                                        break;


                   }

               });
        
        });



 });

		


})();
