import "./index.css";

type props = {
  rate?: number;
  prom?: number;
};

function Stars(props: props){
  console.log(props.rate);
  
  const calcRate = (rate) => {
    return rate * 5;
  };
  const calcProm = (prom) => {
    return (prom * 100) / 5;
  };
  const rate = calcRate(props.rate);
  const prom = calcProm(props.prom);

  return (
    <div className="ratings">
      <div className="empty-stars"></div>
      <div className="full-stars" style={{ width: `${rate || prom}%` }}></div>
    </div>
  );
}

export default Stars;
