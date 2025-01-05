const count = 50000; 

function calculateProbability(count) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;
  
      if (randomNumber % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    const evenPercent = ((evenCount / count) * 100).toFixed(2);
    const oddPercent = ((oddCount / count) * 100).toFixed(2);
    const evenToOddRatio = (evenCount / oddCount).toFixed(2);
    const isCloseTo50 = Math.abs(evenPercent - 50) <= 5 && Math.abs(oddPercent - 50) <= 5;
  
    return {
      count,
      evenCount,
      oddCount,
      evenPercent,
      oddPercent,
      evenToOddRatio,
      isCloseTo50,
    };
  }

  const result = calculateProbability(count);
  
  console.log(`Кількість згенерованих чисел: ${result.count}`);
  console.log(`Парних чисел: ${result.evenCount}`);
  console.log(`Непарних чисел: ${result.oddCount}`);
  console.log(`Відсоток парних: ${result.evenPercent}%`);
  console.log(`Відсоток непарних: ${result.oddPercent}%`);
  console.log(`Відношення парних до непарних: ${result.evenToOddRatio}`);
  if (result.isCloseTo50) {
    console.log("Відсоток парних та непарних чисел близький до 50%50.");
  } else {
    console.log("Відсоток парних та непарних чисел не близький до 50%50.");
  }