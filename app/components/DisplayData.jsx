function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
    if (number % 2 === 0 || number % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= number) {
      if (number % i === 0 || number % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
  

  export default function DisplayData({ sortedNumbers }) {
    return (
      <div className="h-1/2 w-full flex-col justify-center items-center p-5 flex">
        <div className="h-1/3 w-full flex gap-1">Filteri</div>
        <div className="w-5/6 h-1/2 flex gap-3 lg:flex-nowrap flex-wrap justify-evenly">
          {sortedNumbers.map((number, index) => (
            <p
              key={index}
              className={`lg:w-14 lg:h-20 flex justify-evenly w-12 h-8 ${
                isPrime(number) ? 'bg-green-500 text-white' : 'bg-slate-800 text-white'
              } items-center font-semibold lg:text-2xl text-sm`}
            >
              {number}
            </p>
          ))}
        </div>
      </div>
    );
  }
  