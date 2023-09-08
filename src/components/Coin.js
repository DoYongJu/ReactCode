import { useState } from "react";
const initialDrinks = [
  {
    id: 1,
    name: "코카콜라",
    price: 700,
    stock: 5,
    buyable: false,
  },
  {
    id: 2,
    name: "오렌지주스",
    price: 1200,
    stock: 5,
    buyable: false,
  },
  {
    id: 3,
    name: "커피",
    price: 500,
    stock: 5,
    buyable: false,
  },
  {
    id: 4,
    name: "물",
    price: 700,
    stock: 5,
    buyable: false,
  },
  {
    id: 5,
    name: "옥수수수염차",
    price: 1200,
    stock: 5,
    buyable: false,
  },
  {
    id: 6,
    name: "밀키스",
    price: 700,
    stock: 5,
    buyable: false,
  },
  {
    id: 7,
    name: "트래비",
    price: 1000,
    stock: 5,
    buyable: false,
  },
];
const initialMessages = [{}];
export default function Coin() {
  const coins = [100, 500, 1000];
  const [myAcount, setMyAcount] = useState(20000);
  const [VendingAmount, setVendingAmount] = useState(1000);
  const [inputCoin, setInputCoin] = useState(0);
  const [drinks, setDrinks] = useState(initialDrinks);
  const [messages, setMessages] = useState(initialMessages);

  function handleDrinks(drinkId) {
    const filteredDrink = drinks.filter((drink) => drink.id === drinkId);
    const consumedPrice = filteredDrink[0].price;

    if (inputCoin < consumedPrice) {
      handleMessage("돈이 모자라");
      return alert("돈이 모자릅니다.");
    }

    const remainStock = drinks.map((drink) => {
      if (drink.id === drinkId && drink.stock !== 0) {
        const remainCoin = inputCoin - consumedPrice;
        const remainCoinTovending = consumedPrice + VendingAmount;
        setInputCoin(remainCoin);
        setVendingAmount(remainCoinTovending);
        return {
          ...drink,
          stock: drink.stock - 1,
        };
      } else {
        return drink;
      }
    });
    const trueOrFalse = remainStock.map((drink) => {
      if (drink.stock === 0) {
        return {
          ...drink,
          buyable: true,
        };
      } else {
        return drink;
      }
    });

    setDrinks(trueOrFalse);
  }
  function handleMessage(message) {
    const nextMessage = [...message, message];
    setMessages(nextMessage);
  }

  function handleCoin(coin) {
    if (myAcount < coin) {
      const msg = "돈이 모자랍니다.";
      setMessages(msg);
      return alert("돈이 모자릅니다.");
    }
    let remainAccount = myAcount - coin;
    let sum = inputCoin + coin;
    setMyAcount(remainAccount);
    setInputCoin(sum);
  }

  function repayment() {
    const repayment = myAcount + inputCoin;
    setMyAcount(repayment);
    setInputCoin(0);
  }
  return (
    <>
      <div className="vendingDrink">
        <div className="MyPurse">
          <label>
            내 지갑:
            <input className="MyCoins" value={myAcount} />
          </label>
          <br />
        </div>
        <div className="coinPanel">
          {coins.map((coin) => (
            <button onClick={() => handleCoin(coin)}>{coin}원</button>
          ))}

          <button onClick={() => repayment()}>반환</button>
          <br />
          <br />
        </div>
        <div className="VendingAmount">
          <label>
            투입 금액:
            <input className="inputCoin" value={inputCoin} />
          </label>
          <label>
            음료자판기에 저장된 총 금액:
            <input value={VendingAmount} />
          </label>
          <br />
          <br />
        </div>
        <div className="drinlPanel">
          {drinks.map((drink) => (
            <button
              key={drink.id}
              onClick={() => handleDrinks(drink.id)}
              style={{
                background: drink.buyable ? "pink" : "",
              }}>
              {drink.name}({drink.price} 재고수:{drink.stock})
            </button>
          ))}
        </div>
        <div className="OutputPanel">
          {messages.map((message) => (
            <p>{message.msg}</p>
          ))}
        </div>
      </div>
    </>
  );
}
