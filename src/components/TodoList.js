function Day() {
  let today = new Date();
  let todayDate = today.getDay();
  const week = ["일", "월", "화", "수", "목", "금", "토", "일"];
  let dayOfweek = week[todayDate];
  return dayOfweek;
}
function formatDate() {
  let today = new Date();
  return new Intl.DateTimeFormat("ko-Us", { weekday: "long" }).format(today);
}
export default function TodoList() {
  return <h1>TodoList for {formatDate()}</h1>;
}
