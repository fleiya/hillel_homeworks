var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
  
    addService: function(name, price) {
      this[name] = price + " грн";
    },
  
    minPrice: function() {
      var min = Infinity;
      for (var service in this) {
        if (typeof this[service] === "string" && this[service].includes("грн")) {
          var value = parseFloat(this[service]); 
          min = Math.min(min, value); 
        }
      }
      return min + " грн";
    },
  
    maxPrice: function() {
      var max = -Infinity;
      for (var service in this) {
        if (typeof this[service] === "string" && this[service].includes("грн")) {
          var value = parseFloat(this[service]); 
          max = Math.max(max, value); 
        }
      }
      return max + " грн";
    },
  
    price: function() {
      var total = 0;
      for (var service in this) {
        if (typeof this[service] === "string" && this[service].includes("грн")) {
          var value = parseFloat(this[service]); 
          total += value; 
        }
      }
      return total + " грн";
    }
  };
  
  services.addService("Розбити скло", 200.50);
  
  console.log("Мінімальна ціна: ", services.minPrice()); 
  console.log("Максимальна ціна: ", services.maxPrice()); 
  console.log("Загальна вартість: ", services.price());
  