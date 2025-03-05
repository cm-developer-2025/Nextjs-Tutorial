export default function MyDemo2(props) {
  console.log(props);
  const name = props.name;
  const roll = props.roll;
  return (
    <div>
      This is my Second Demo Component
      <p>User Name is {name}</p>
      <p>Roll Number is {roll}</p>
    </div>
  );
}
