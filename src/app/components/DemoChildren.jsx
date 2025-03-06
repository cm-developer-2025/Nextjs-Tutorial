function DemoChildren({ user, children }) {
  console.log(user);
  return (
    <div>
      {children}
      <p>User name is {user}</p>
    </div>
  );
}

export default DemoChildren;
