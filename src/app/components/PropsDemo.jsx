export default function PropsDemo({ username, sem, fee }) {
  return (
    <div className="border my-10 p-10">
      <p>This is My New Props Demo Component</p>
      <p>
        Username is {username}, Semester is {sem} and Fee is {fee}
      </p>
    </div>
  );
}
